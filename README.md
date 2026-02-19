# Portfólio Juliane Almeida

Site de portfólio profissional desenvolvido com React e Supabase, apresentando um design moderno e premium com animações fluidas.

## 🚀 Tecnologias

- **React** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Supabase** - Backend-as-a-Service para persistência de dados
- **CSS3** - Estilização com variáveis CSS e animações

## ✨ Características

- Design premium com gradientes vibrantes e glassmorphism
- Animações suaves e micro-interações
- Formulário de contato integrado com Supabase
- Totalmente responsivo
- SEO otimizado

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- Conta no Supabase

## 🔧 Configuração

1. **Clone o repositório** (ou use este projeto)

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o Supabase:**

   a. Crie um projeto no [Supabase](https://supabase.com)
   
   b. Crie a tabela `messages` com o seguinte SQL:
   ```sql
   CREATE TABLE messages (
     id BIGSERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMPTZ DEFAULT NOW()
   );
   
   -- Habilitar Row Level Security
   ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
   
   -- Política para permitir inserção pública
   CREATE POLICY "Permitir inserção pública" ON messages
     FOR INSERT TO anon
     WITH CHECK (true);
   
   -- Política para permitir leitura apenas autenticados
   CREATE POLICY "Permitir leitura autenticada" ON messages
     FOR SELECT TO authenticated
     USING (true);
   ```
   
   c. Atualize o arquivo `src/lib/supabase.js` com suas credenciais:
   ```javascript
   const supabaseUrl = 'sua-url-do-supabase'
   const supabaseAnonKey = 'sua-chave-anon-do-supabase'
   ```

4. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

5. **Abra no navegador:**
   - O site estará disponível em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
portfolio-juliane/
├── src/
│   ├── components/
│   │   ├── Header.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Work.jsx/css
│   │   ├── Experience.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── lib/
│   │   └── supabase.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   └── profile.png
└── package.json
```

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS em `src/index.css`:

```css
:root {
  --primary: #8B5CF6;
  --secondary: #EC4899;
  --accent: #3B82F6;
  /* ... */
}
```

### Atualizar Conteúdo

- **Foto de Perfil:** Substitua `public/profile.png`
- **Informações Pessoais:** Edite os componentes em `src/components/`
- **Projetos:** Modifique o array `projects` em `Work.jsx`
- **Experiências:** Atualize o array `experiences` em `Experience.jsx`

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 📄 Licença

Este projeto foi criado para Juliane Almeida.

---

**Desenvolvido com ❤️ usando React + Supabase**
