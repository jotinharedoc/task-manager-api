# Task Manager API

API REST desenvolvida com Node.js, Express e MongoDB para gerenciamento de tarefas com autenticação JWT.
O projeto evoluiu para um modelo de **planner**, permitindo organização por data e prioridade.

---

## Funcionalidades

* Cadastro de usuário
* Login com autenticação JWT
* Proteção de rotas com middleware
* CRUD completo de tarefas
* Associação de tarefas ao usuário autenticado
* Organização por data e prioridade

---

## Tecnologias

* Node.js
* Express
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* Bcrypt

---

## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/jotinharedoc/task-manager-api.git
```

### 2. Acessar a pasta

```bash
cd task-manager-api
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Criar arquivo `.env`

Crie um arquivo `.env` na raiz com:

```env
PORT=3001
MONGO_URI=sua_string_do_mongodb
JWT_SECRET=seu_segredo
```

### 5. Rodar o servidor

```bash
npm run dev
```

---

## Rotas da API

### Autenticação

#### Registro

POST `/auth/register`

```json
{
  "name": "Joao",
  "email": "joao@email.com",
  "password": "123456"
}
```

#### Login

POST `/auth/login`

```json
{
  "email": "joao@email.com",
  "password": "123456"
}
```

---

### Tarefas (protegidas)

Todas as rotas abaixo exigem token:

Header:

```
Authorization: Bearer SEU_TOKEN
```

---

#### Criar tarefa

POST `/tasks`

```json
{
  "title": "Treino",
  "description": "Academia",
  "date": "2026-04-20",
  "priority": "alta"
}
```

---

#### Listar tarefas

GET `/tasks`

---

#### Atualizar tarefa

PUT `/tasks/:id`

```json
{
  "title": "Treino atualizado",
  "completed": true,
  "priority": "media"
}
```

---

#### Deletar tarefa

DELETE `/tasks/:id`

---

## Estrutura do projeto

```
src/
  controllers/
  models/
  routes/
  middlewares/
  config/
```

---

## Segurança

* Senhas criptografadas com bcrypt
* Autenticação via JWT
* Rotas protegidas por middleware
* Variáveis sensíveis armazenadas em `.env`

---

## Melhorias futuras

* Filtro de tarefas por data
* Filtro por prioridade
* Paginação
* Interface frontend (planner visual)
* Deploy da aplicação

---

## Autor

https://github.com/jotinharedoc
