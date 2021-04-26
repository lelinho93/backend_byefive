# Projeto Seletivo Byefive - Frontend

* Objetivo:

Esta projeto tem como propósito o desenvolvimento de uma aplicação fullstack com Javascript para avaliação técnica da empresa Byefive.

* Tecnologias empregadas:

Este api/backend foi desenvolvido com Node.js em linguagem Typescript e algumas bibliotecas(express, mongoose, bcrypt, cors, dotenv, jsonwebtoken, ts-node-dev, body-parser e outras) e faz conexão com uma base de dados MongoDB que está na nuvem do MongoDB.

* Arquitetura

A aplicação está estruturada com orientação a objetos, arquitetura de software em CAMADAS para a melhor organização do código. As camadas são: 

Controller: Responsável por receber e responder as requisições, é a primeira camada mais próxima do frontend;

Business que faz as verificações das regras de négocio, é a camada intermediária, se algo não estiver correto é barrado nessa camada;

Data que é a camada mais próxima do banco de dados, onde faz a conexão e insere ou coleta informações do mesmo.

* Funcionalidades:

Este Backend é responsável por gerenciar um sistema de cadastro de usuários, podendo executar a operação de signup, login, ver todos os usuários salvos no banco de dados e deletar um usuário informando o ID. 

Na operação de signup o usuário insere seu nome, seu email e sua senha, o sistema salva isso no banco, criptografa a senha através da biblioteca bcryptjs (Solicitado nas regras de negócio para dados sensíveis) e estando tudo ok, ele devolve um token para que o frontend faça a autenticação desse usuário no sistema e dê a ele a autorização de navegar na parte "interna" do sistema, que só é permitida pra quem tem um token válido.

Na operação de login o usuário insere seu email e sua senha, o backend descriptografa e verifica se a senha criptografada é compativel com a senha digitada, se for verdadeira e os dados estiverem corretos, ele fornece um token jwt para a usuário se autenticar no sistema.

Há uma operação onde o usuário pode inserir o ID de um usuário que ele deseja excluir e faz a exclusão desse usuário da base de dados.

Por fim, há um endpoint que disponibiliza todos os usuários cadastrado na base de dados naquele momento.

# Como rodar? 

* Este backend está hospedado na nuvem do heroku com o seguinte link: https://backend-byefive.herokuapp.com/
Obs.: Está com um pequeno bug nesse deploy, precisa de alguma alteração para funcionar perfeitamente(será feito em breve)

* Para rodar este projeto em sua máquina local é necessário ter a última versão do Node.js instalado (https://nodejs.org/en/);
* Clonar o repositório para sua maquina local através do link do github e terminal git;
* Na pasta raiz do projeto executar o seguintes comandos: "npm install" para instalar todas as dependências do npm, "npm run start" ou "npm run start:dev" para que o servidor seja executado, automaticamente o node irá fazer com que o servidor fique escutando a porta na qual foi designada no código e assim já recebendo e respondendo as requisições.

# Banco de dados MongoDB

![Firefox_Screenshot_2021-04-26T16-37-08 727Z](https://user-images.githubusercontent.com/71237016/116119176-831cb780-a694-11eb-817c-984e2b713ea4.png)


