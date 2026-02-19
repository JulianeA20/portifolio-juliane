# Configuração da GitHub Action para Manter Supabase Ativo

Esta GitHub Action mantém seus projetos Supabase ativos executando consultas diárias, evitando a inatividade de 90 dias.

## 📋 Passo a Passo de Configuração

### 1️⃣ Configurar Secrets no GitHub

Você precisa adicionar as credenciais do Supabase como secrets no seu repositório GitHub:

1. Vá para o seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Secrets and variables** → **Actions**
4. Clique em **New repository secret** e adicione:

   - **Nome**: `SUPABASE_URL`
   - **Valor**: A URL do seu projeto Supabase (ex: `https://xxxxx.supabase.co`)

5. Clique em **Add secret**

6. Repita para o segundo secret:
   - **Nome**: `SUPABASE_ANON_KEY`
   - **Valor**: A anon key do seu projeto Supabase

### 2️⃣ Encontrar suas credenciais do Supabase

Para encontrar suas credenciais:

1. Acesse [app.supabase.com](https://app.supabase.com)
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Copie:
   - **Project URL** → Use como `SUPABASE_URL`
   - **Project API keys** → **anon/public** → Use como `SUPABASE_ANON_KEY`

### 3️⃣ Ajustar o script (se necessário)

No arquivo `.github/scripts/keep-supabase-active.js`, na linha 35, há uma consulta à tabela `content`:

```javascript
.from('content') // Ajuste para uma tabela que existe no seu projeto
```

**Importante**: Substitua `'content'` pelo nome de uma tabela que existe no seu projeto Supabase.

### 4️⃣ Testar a Action

Após configurar os secrets, você pode testar a action de duas formas:

**Opção 1: Executar manualmente**
1. Vá para a aba **Actions** no seu repositório
2. Selecione o workflow "Keep Supabase Active"
3. Clique em **Run workflow** → **Run workflow**

**Opção 2: Aguardar execução automática**
- A action executará automaticamente todos os dias às 3:00 AM UTC (00:00 AM no horário de Brasília)

### 5️⃣ Verificar os Logs

Para verificar se está funcionando:

1. Vá para a aba **Actions**
2. Clique no workflow "Keep Supabase Active"
3. Clique na execução mais recente
4. Você verá os logs com mensagens como:
   ```
   🚀 Iniciando processo de keep-alive do Supabase...
   ✅ Consulta realizada com sucesso!
   🎉 Processo de keep-alive concluído com sucesso!
   ```

## 🎯 Como Funciona

A action executa diariamente e faz uma consulta simples no banco de dados Supabase. Isso conta como atividade e evita que seu projeto seja pausado por inatividade.

## ⚙️ Personalizações

### Mudar o horário de execução

Edite a linha do cron no arquivo `.github/workflows/keep-supabase-active.yml`:

```yaml
- cron: '0 3 * * *'  # 3:00 AM UTC
```

Exemplos:
- `'0 12 * * *'` - Meio-dia UTC (9:00 AM Brasília)
- `'0 0 * * *'` - Meia-noite UTC (21:00 Brasília do dia anterior)

### Múltiplos projetos Supabase

Se você tem vários projetos Supabase, adicione mais secrets:
- `SUPABASE_URL_2`, `SUPABASE_ANON_KEY_2`
- `SUPABASE_URL_3`, `SUPABASE_ANON_KEY_3`

E execute o script múltiplas vezes no workflow com diferentes variáveis de ambiente.

## ❓ Solução de Problemas

**Erro: "SUPABASE_URL e SUPABASE_ANON_KEY devem estar configurados"**
- Verifique se você adicionou os secrets corretamente no GitHub

**Erro: "Erro ao consultar tabela"**
- Certifique-se de que a tabela especificada no script existe no seu Supabase
- Verifique se a anon key tem permissão para ler a tabela

**Action não está executando**
- Verifique se o arquivo está no caminho correto: `.github/workflows/keep-supabase-active.yml`
- Certifique-se de que o workflow foi commitado e enviado para o GitHub

## 📚 Recursos

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Supabase Documentation](https://supabase.com/docs)
- [Cron Expression Generator](https://crontab.guru/)
