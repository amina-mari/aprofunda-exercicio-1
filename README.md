# API Nina Simone

Esta foi uma API criada como Primeiro Exercício do curso Aprofunda PretaLab em um ambiente de execução NodeJS usando o Framework Express para gerenciamento de endpoints e também Nodemon para automação de execução no terminal. Em homenagem à Rainha do Jazz, Nina Simone, esta API fornece músicas dos álbuns *Silk & Soul* e *I Put A Spell On You*.

## 1. Endpoints

| Método   | Rota  |
|--------  |----- |
| GET      | **/music/:id** <p>Retorna a música com o ID indicado da URI</p> <p>**Se existir**: Retorna Status Code 200 e os dados da música no formato JSON </p> <p>**Se não existir**: Retorna Status Code 404 e a mensagem ```Erro: O recurso não foi localizado, verifique se a solicitação está correta e tente novamente```</p>  
| GET    | **/allmusics** <p>Retorna todas as músicas da API no formato JSON</p>
| POST   | **/music** <p>Permite a inserção de uma nova música na API</p><p>**Se os dados estiverem corretos:** Insere a música na API, retorna Status Code 200 e a mensagem ```A música foi inserida com sucesso, obrigada por colaborar!```</p> <p>**Em caso de dados incorretos/inconsistentes**: Retorna Status Code 400 e a mensagem  ```Erro: a solicitação contém sintaxe diferente da esperada, verifique se a solicitação está correta e tente novamente```</p>

### 1.1 Formato dos recursos da API

```
[
    {
        id: number,
        title: string,
        lyrics: string,
        played: boolean
    },
    {
        id: number,
        title: string,
        lyrics: string,
        played: boolean
    },
    {
        id: number,
        title: string,
        lyrics: string,
        played: boolean
    }    
]

```

# 2. Testagem de Endpoints no Insomnia

(...)

---------

Por *Mariana Amina* 