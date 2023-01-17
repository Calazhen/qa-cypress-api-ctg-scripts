describe('empty spec', () => {
  const baseURL = 'localhost:8080'
  it('GET Custumer', () => {
    cy.request ({
      method: 'POST',
      url: baseURL + '/cliente',
      body:{
        "id": 11,
        "idade": 15,
        "nome": "Henrique",
        "risco": 0
      }
    }).then((Response) => {
        expect (Response.status).to.eq(201)
      })
    
    cy.request ({
      method: 'GET',
      url: baseURL + '/cliente/11',

    }).then((Response) => {
      expect (Response.status).to.eq(200)
      expect (Response.body).has.property('nome', 'Henrique','idade',15,'id',11,'risco',0) 
    })
  })

  it ('GET all custumers', () =>{
    cy.request ({
      method: 'POST',
      url: baseURL + '/cliente',
      body:{
        "id": 11,
        "idade": 15,
        "nome": "Henrique",
        "risco": 0
      }
    }).then((Response) => {
        expect (Response.status).to.eq(201)
      })
      cy.request ({
        method: 'POST',
        url: baseURL + '/cliente',
        body:{
          "id": 13,
          "idade": 26,
          "nome": "Calazans",
          "risco": 0
        }
      
      }).then((Response) => {
          expect (Response.status).to.eq(201)
        })
    
    cy.request ({
      method: 'GET',
      url: baseURL 

    }).then((Response) => {
      expect (Response.status).to.eq(200)
      expect (Response.body ['11'],['13']).has.property('nome', 'Henrique','idade',15,'id',11,'risco',0,'nome', 'Calazans','idade',26,'id',13,'risco',0) 
    })

  })

  it('POST a Custumer',()=>{
    cy.request ({
      method: 'POST',
      url: baseURL + '/cliente',
      body:{
        "id": 11,
        "idade": 15,
        "nome": "Henrique",
        "risco": 0
      }
    }).then((Response) => {

      expect (Response.status).to.eq(201)
      expect (Response.body['11']).has.property('nome', 'Henrique','idade',15,'id',11,'risco',0) 

    })
  })

  it('PUT a Custumer',()=>{
      cy.request ({
        method: 'PUT',
        url: baseURL + '/cliente',
        body:{
          "id": 11,
          "idade": 26,
          "nome": "Henrique",
          "risco": 0
        }
      }).then((Response) => {

          expect (Response.status).to.eq(200)  
          expect (Response.body['11']).has.property('nome', 'Henrique','idade',26,'id',11,'risco',0)
     
      })
    
    })
  it('DELETE an specific Custumer', ()=>{
      cy.request ({
        method: 'POST',
        url: baseURL + '/cliente',
        body:{
          "id": 11,
          "idade": 15,
          "nome": "Henrique",
          "risco": 0
        }
      }).then((Response) => {
          expect (Response.status).to.eq(201)
      cy.request({
        method:'DELETE',
        url: baseURL+"/cliente/11"
      }).then((Response) => {
        expect (Response.status).to.eq(200)
        expect (Response.body).to.deep.eq('CLIENTE REMOVIDO: { NOME: Henrique, IDADE: 15, ID: 11 }')


      })
    })
  })


  it('DELETE ALL custumers', ()=>{
  cy.request ({
    method: 'POST',
    url: baseURL + '/cliente',
    body:{
      "id": 11,
      "idade": 15,
      "nome": "Henrique",
      "risco": 0
    }
  }).then((Response) => {
      expect (Response.status).to.eq(201)
    })
    cy.request ({
      method: 'POST',
      url: baseURL + '/cliente',
      body:{
        "id": 13,
        "idade": 26,
        "nome": "Calazans",
        "risco": 0
      }
    
    }).then((Response) => {
        expect (Response.status).to.eq(201)
      })
      cy.request({
        method:'DELETE',
        url: baseURL+"/cliente/apagaTodos"
      }).then((Response) => {
        expect (Response.status).to.eq(200)
        expect (Response.body).to.deep.eq('{}')

      })
    })

  })


