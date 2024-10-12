# Aplicação NestJS + Prisma + PostgreSQL + Docker

Este é um projeto NestJS que integra o Prisma para o acesso ao banco de dados e utiliza PostgreSQL como banco de dados, tudo configurado para rodar usando Docker.

## Requisitos

Para rodar este projeto, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- **Node.js** (v18.x ou superior)
- **Docker** (Docker Engine e Docker Compose)

## Começando

Siga os passos abaixo para rodar a aplicação:

### 1. Clonar o Repositório

```bash
git clone https://github.com/wesleydematos/backend-to-do.git
cd backend-to-do
```

### 2. Instalar Dependências do Node.js

Mesmo utilizando Docker, é uma boa prática instalar as dependências localmente:

```bash
npm install
```

### 3. Iniciar os Contêineres Docker

Use o Docker Compose para construir e iniciar a aplicação e o banco de dados PostgreSQL:

```bash
docker-compose up --build
```

Isso iniciará tanto a aplicação NestJS quanto o banco de dados PostgreSQL dentro de contêineres Docker.

### 4. Acessar a Aplicação

Depois que os contêineres Docker estiverem em execução, a aplicação estará disponível em:

```arduino
http://localhost:3000
```

Você verá a mensagem "Hello World" na rota padrão do NestJS.

#

# Configuração do Prisma e Banco de Dados

### 1- Migrar o Schema do Banco de Dados

Com a aplicação rodando, você pode aplicar as migrações do Prisma para configurar o schema do banco de dados:

```bash
docker exec -it nest-app npx prisma migrate dev --name init
```

\*\* Caso ocorra algum erro tente rodar o comando no terminal e repetir passos anteriores:

```bash
npx prisma generate
```

#

# Comandos Úteis

### -> Iniciar a aplicação com Docker Compose:

```bash
docker-compose up --build
```

### -> Parar a aplicação:

```bash
docker-compose down
```

### -> Rodar migrações:

```bash
docker exec -it nest-app npx prisma migrate dev --name init
```

### -> Gerar o cliente Prisma:

```bash
docker exec -it nest-app npx prisma generate
```
