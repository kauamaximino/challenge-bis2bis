<h1 align="center">Teste Back-end</h1>
<br/>

## 🗞️ Requisitos dos testes:

### Parte 1: Criação de script para ler API JSON e popular o banco de dados.
### Como foi solucionado:
- Utilizando o [MongoDB Atlas](https://www.mongodb.com/atlas/database) como Database na nuvem e o [Mongoose](https://mongoosejs.com/) como ODM.
- Lógica desenvolvida para consumir e retornar todas as universidades da API disponibilizada: [aqui](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/utils/api/getAllUniversitiesInAPI.js)
- Lógica desenvolvida para popular o banco de dados: [aqui](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/services/insert.service.js) 
<br/>

### Parte 2: Criação de API REST para gestão das universidades cadastradas.
### Como foi solucionado:
- Método GET para listagem de todas as universidades, ou todas de um determinado páis, ou uma específica pelo ID. Na camada de [service](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/services/universities.service.js) e na camada de [controller](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/controllers/universities.controller.js), são essas 3 funções: getAllUniversities,  getUniversitiesByCountry e getUniversityById.
- Método POST para cadastro de universidades. Na camada de [service](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/services/universities.service.js) e na camada de [controller](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/controllers/universities.controller.js) é utilizado a função createUniversity e o [middleware](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/middlewares/checkBodyForPost.js) para validação do request.body.
- Método PUT para atualização de universidades. Na camada de [service](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/services/universities.service.js) e na camada de [controller](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/controllers/universities.controller.js) é utilizado a função updateUniversity e o [middleware](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/middlewares/checkBodyForPut.js) para validação do request.body.
- Método DELETE para deletar determinada universidade pelo ID. Na camada de [service](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/services/universities.service.js) e na camada de [controller](https://github.com/kauamaximino/challenge-bis2bis/blob/main/src/controllers/universities.controller.js) é utilizado a função deleteUniversity.
---
## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e o [Insomnia](https://insomnia.rest/) ou algum [outro software](https://www.postman.com/) para testar as rotas desenvolvidas nessa API.
<details>

```bash

# Clone este repositório
git clone git@github.com:kauamaximino/challenge-bis2bis.git

# Acesse a pasta do projeto no terminal/cmd
cd challenge-bis2bis

# Instale as dependências
npm install

# Execute a aplicação em modo de desenvolvimento
npm start

# O servidor inciará na porta:3030 - acesse http://localhost:3030  

```
</details>


> Veja o arquivo  [package.json](https://github.com/kauamaximino/talker-manager/blob/main/package.json)
