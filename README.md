# Task Manager API

API REST para gerenciamento de tarefas com autenticação JWT, desenvolvida com Node.js, Express e MongoDB.

**[Demo ao vivo](https://portfoliotaskmanager.netlify.app)**

---

## Tecnologias

- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Bcrypt
- Dotenv
- CORS

---

## Funcionalidades

- Cadastro e login de usuários
- Autenticação via JWT
- Senhas criptografadas com bcrypt
- CRUD completo de tarefas
- Prioridade por tarefa (baixa, média, alta)
- Rotas protegidas por middleware
- Cada usuário acessa apenas suas próprias tarefas

---

## Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/jotinharedoc/task-manager-api.git
cd task-manager-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o `.env`

Crie um arquivo `.env` na raiz:

```env
PORT=3001
MONGO_URI=sua_string_do_mongodb
JWT_SECRET=sua_chave_secreta
ALLOWED_ORIGIN=http://localhost:5173
NODE_ENV=development
```

### 4. Rode o servidor

```bash
npm run dev
```

Servidor rodando em `http://localhost:3001`

---

## Rotas da API

### Auth

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/auth/register` | Cadastro de usuário |
| POST | `/auth/login` | Login e geração do token |

### Tasks (autenticadas)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/tasks` | Listar tarefas do usuário |
| POST | `/tasks` | Criar tarefa |
| PUT | `/tasks/:id` | Atualizar tarefa |
| DELETE | `/tasks/:id` | Deletar tarefa |

### Profile (autenticada)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/profile` | Dados do usuário logado |

---

## Segurança

- Senhas criptografadas com bcrypt
- Autenticação via JWT com expiração de 1 dia
- Variáveis sensíveis protegidas com `.env`
- CORS restrito ao domínio do frontend
- Validação de ObjectId nas rotas

---

## Deploy

- **Backend:** [Railway](https://railway.app)
- **Frontend:** [Netlify](https://netlify.com)
- **Banco de dados:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## Autor

Desenvolvido por [@jotinharedoc](https://github.com/jotinharedoc)