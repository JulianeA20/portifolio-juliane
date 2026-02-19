const { createClient } = require('@supabase/supabase-js');

// Configuração do Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Erro: SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY (ou SUPABASE_ANON_KEY) devem estar configurados como secrets no GitHub');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Nome fixo da tabela de controle (será criada se não existir)
const KEEP_ALIVE_TABLE = '_keep_alive';

async function keepSupabaseActive() {
    try {
        console.log('🚀 Iniciando processo de keep-alive do Supabase...');
        console.log(`📅 Data/Hora: ${new Date().toISOString()}`);

        // Passo 1: Garantir que a tabela _keep_alive existe
        console.log(`📝 Garantindo que a tabela '${KEEP_ALIVE_TABLE}' existe...`);
        const { error: createError } = await supabase.rpc('create_keep_alive_if_not_exists');

        if (createError) {
            // Se a função RPC não existir, tentamos criar via SQL puro
            console.log('ℹ️  Função RPC não encontrada, tentando via SQL direto...');

            const { error: sqlError } = await supabase.rpc('exec_sql', {
                sql: `CREATE TABLE IF NOT EXISTS ${KEEP_ALIVE_TABLE} (
                    id SERIAL PRIMARY KEY,
                    ping_at TIMESTAMPTZ DEFAULT NOW()
                );`
            });

            if (sqlError) {
                // Último fallback: apenas inserir numa tabela existente
                console.warn('⚠️  Sem acesso a DDL. Usando fallback de leitura simples...');
                await simplePingFallback();
                return;
            }
        }

        console.log('✅ Tabela de controle verificada!');

        // Passo 2: Inserir um registro (simula atividade)
        console.log('➕ Inserindo registro de ping...');
        const { data: inserted, error: insertError } = await supabase
            .from(KEEP_ALIVE_TABLE)
            .insert({ ping_at: new Date().toISOString() })
            .select('id')
            .single();

        if (insertError) {
            throw new Error(`Erro ao inserir registro: ${insertError.message}`);
        }

        console.log(`✅ Registro inserido com ID: ${inserted.id}`);

        // Passo 3: Deletar o registro recem inserido (limpa a tabela)
        console.log('🗑️  Deletando o registro inserido...');
        const { error: deleteError } = await supabase
            .from(KEEP_ALIVE_TABLE)
            .delete()
            .eq('id', inserted.id);

        if (deleteError) {
            console.warn(`⚠️  Aviso ao deletar registro: ${deleteError.message}`);
        } else {
            console.log('✅ Registro deletado com sucesso!');
        }

        console.log('🎉 Processo de keep-alive concluído com sucesso!');
        console.log('📊 Seu projeto Supabase foi mantido ativo.');

    } catch (error) {
        console.error('❌ Erro durante o processo:', error.message);
        process.exit(1);
    }
}

// Fallback: apenas lê qualquer tabela para gerar atividade
async function simplePingFallback() {
    console.log('🔄 Executando ping simples (leitura de sistema)...');

    // Consulta uma view de sistema que sempre existe no Postgres/Supabase
    const { error } = await supabase
        .from('pg_tables')
        .select('tablename')
        .limit(1);

    if (error) {
        // Se pg_tables não funcionar via API, tenta qualquer coisa
        console.warn('⚠️  Ping via pg_tables falhou, mas a tentativa já gerou atividade.');
        console.log('💡 Para melhor resultado, crie manualmente a tabela no SQL Editor do Supabase:');
        console.log(`
  CREATE TABLE IF NOT EXISTS ${KEEP_ALIVE_TABLE} (
    id SERIAL PRIMARY KEY,
    ping_at TIMESTAMPTZ DEFAULT NOW()
  );
  -- Depois, adicione permissão (RLS) ou desabilite RLS nessa tabela:
  ALTER TABLE ${KEEP_ALIVE_TABLE} DISABLE ROW LEVEL SECURITY;
        `);
    } else {
        console.log('✅ Ping de sistema realizado com sucesso!');
    }

    console.log('🎉 Processo de keep-alive concluído (modo fallback).');
}

// Executar
keepSupabaseActive();
