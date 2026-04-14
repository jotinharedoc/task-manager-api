# Task Manager API

API REST desenvolvida com Node.js, Express e MongoDB para gerenciamento de usuários com autenticação JWT.

---

## Funcionalidades

* Cadastro de usuário
* Login com autenticação JWT
* Criptografia de senha com bcrypt
* Middleware de proteção de rotas
* Rota protegida de perfil

---

## Tecnologias

* Node.js
* Express
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* Bcrypt

---

## Como rodar o projeto

### 1. Clonar o repositório

```
git clone https://github.com/jotinharedoc/task-manager-api.git
```

### 2. Entrar na pasta

```
cd task-manager-api
```

### 3. Instalar dependências

```
npm install
```

### 4. Criar arquivo `.env`

Crie um arquivo `.env` na raiz:

```
PORT=3001
MONGO_URI=sua_string_do_mongodb
JWT_SECRET=sua_chave_secreta
```

### 5. Rodar o servidor

```
npm run dev
```

Servidor rodando em:

```
http://localhost:3001
```

---

## Rotas da API

### Registro

POST `/auth/register`

```
{
  "name": "João",
  "email": "joao@email.com",
  "password": "123456"
}
```

---

### Login

POST `/auth/login`

```
{
  "email": "joao@email.com",
  "password": "123456"
}
```

---

### Perfil (rota protegida)

GET `/profile`

Headers:

```
Authorization: Bearer SEU_TOKEN
```

---

## Segurança

* Senhas criptografadas com bcrypt
* Autenticação via JWT
* Variáveis sensíveis protegidas com `.env`

---

## Melhorias futuras

* CRUD de tarefas
* Relacionamento usuário → tarefas
* Deploy da API
* Documentação com Swagger

---

## Autor

Desenvolvido por https://github.com/jotinharedoc
