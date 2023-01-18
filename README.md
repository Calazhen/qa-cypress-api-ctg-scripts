## Automação de testes da API de estudos da CTG utilizando Cypress

Este é um exemplo de um projeto de testes automatizados de API, misturando conteúdos aprendidos no curso de Cypress básico e intermediário da escola TAT com Curso de API incluido na mentoria Comunidade do Tester Global. 

### Requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador:

Para a API:

Baixe e instale o [INTELIJ](https://www.jetbrains.com/idea/)

Baixe e instale a JDK 8 (1.8) [JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

Para o projeto de Testes com Cypress:
 
- git (estou usando a versão 2.39 enquanto desenvolvo este projeto)
- Node.js (estou usando a versão v18.13.0 enquanto desenvolvo este projeto)
- npm (estou usando a versão 8.19.3 enquanto desenvolvo este projeto)
- Visual Studio Code (estou usando a versão 1.74.0 enquanto desenvolvo este projeto)


### Como rodar esse projeto

## Comece pela API...

Depois de baixar a API e rodar segundo a documentação: [API](https://github.com/vinnypessoni/api-clientes-exemplo-microservico)


## Meu projeto de testes:

Clone ou baixe o meu projeto de testes e siga as instruções:

Abra a pasta do arquivo pelo terminal e digite o comando para abrilo no VSCode: 
    code . 

Após abrir o projeto, no mesmo terminal inicie o Cypress com o comando: 
    npx cypress open


Após abrir o Cypress, clique na opção E2E Testing conforme a imagem:

![Project_E2E_Option](https://github.com/Calazhen/Automation-Test-API-CTG-Cypress/blob/main/Images/Project_E2E_Option_.png)

Selecione o Navegador da sua preferência (Chrome,Edge,Electron,Firefox) e clique em "Stat E2E Testing":
![Following_Steps](https://github.com/Calazhen/Automation-Test-API-CTG-Cypress/blob/main/Images/Following_Steps_.png)

Com a API já rodando, clique no arquivo de testes chamado "custumers":
 
![Test_Suit](https://github.com/Calazhen/Automation-Test-API-CTG-Cypress/blob/main/Images/Test_Suit_.png)

Todos os testes devem ser executado e passar conforme a imagem abaixo: 
 
![All_test_passing](https://github.com/Calazhen/Automation-Test-API-CTG-Cypress/blob/main/Images/All_tests_passing_.png)



### Sobre os testes: 

Os testes estão escritos de forma independente/atômica, ou seja, executando todas as ações necessárias para testar aquele método coberto, neste projeto estou utilizando os seguintes endpoints e métodos:

    /clientes --> GET clientes: para pegar todos os clientes (GET an specific Custumer)
    /cliente/{ID}  --> GET cliente por ID: para pegar um cliente com base no seu id. (GET all custumers)
    /cliente       --> POST cliente para cadastrar um cliente novo. (POST a Custumer)
    /cliente       --> PUT atualiza cliente já cadastrado previamente.(PUT a Custumer)
    /cliente/{ID}  --> DELETE cliente por ID para deletar um cliente por ID. (DELETE an specific Custumer)
    /cliente/apagaTodos  --> DELETE todos os clientes (DELETE ALL Custumers)

          
O corpo do método POST é um JSON e deve conter:

      {
        "id": 11,
        "idade": 15,
        "nome": "Henrique",
        "risco": 0
       }

O método PUT é um JSON e deve conter:
    {
          "id": 11,
          "idade": 26,
          "nome": "Henrique",
          "risco": 0
        }


Para uma visão completa dos códigos de resposta em cada endpoint, enquanto o seviço estiver sendo executado, veja o SWAGGER no endereço: http://localhost:8080/swagger-ui.html    


Baixe a coleção do POSTMAN que possui os requests (métodos HTTP)  que exercitam essa API [aqui](https://github.com/Calazhen/Automation-Test-API-CTG-Cypress/tree/main/Collection_Postman) .


### Contatos:

Conheça os mentores que foram referência para o projeto:

[Vinicius Pessoni] (https://github.com/vinnypessoni)
[Walmyr Filho] (https://github.com/wlsf82)

Caso tenha alguma dúvida poderá entrar em contato pelo meu [Linkedin] (https://www.linkedin.com/in/henrique-calazans/)


Bora se conectar? =]
