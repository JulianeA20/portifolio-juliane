const { createClient } = require('@supabase/supabase-js');

// Configuração do Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Erro: SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY (ou SUPABASE_ANON_KEY) devem estar configurados como secrets no GitHub');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function keepSupabaseActive() {
    try {
        console.log('🚀 Iniciando processo de ping do Supabase para manter o projeto ativo...');
        console.log(`📅 Data/Hora: ${new Date().toISOString()}`);

        // Fazendo uma requisição simples na API (leitura de 1 registro da tabela 'messages')
        // Qualquer requisição na REST API reinicia o contador de inatividade do Supabase!
        const { error } = await supabase
            .from('messages')
            .select('id')
            .limit(1);

        if (error) {
            console.log('ℹ️  Aviso: Houve um erro na leitura, mas a requisição API já registrou atividade no Supabase.');
            console.log('Detalhes:', error.message);
        } else {
            console.log('✅ Ping de sistema (leitura) realizado com sucesso!');
        }

        console.log('🎉 Processo concluído com sucesso!');
        console.log('📊 Seu projeto Supabase foi mantido ativo. A requisição de API é suficiente para manter o projeto online, sem precisar criar e deletar tabelas.');

    } catch (error) {
        console.error('❌ Erro durante o processo:', error.message);
        process.exit(1);
    }
}

keepSupabaseActive();
