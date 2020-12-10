/// <reference types="Cypress" />

import testElements from '../elements/testElements'
const testelements = new testElements
const url= Cypress.config("baseUrl")

class TestPage {
   acessarSite(){
       cy.visit(url)
       cy.wait(2000)
   } 

   clicarReportagem(){
     cy.get(testelements.clicarReportagem()).click()
     cy.wait(2000)
     cy.screenshot()
   
    }
   
    validarReportagem(){
        cy.get(testelements.validarTitulo()).contains('Com sete pontos de vantagem, São Paulo terá a tabela como adversário nas próximas quatro rodadas')
        cy.screenshot()
    }

}
export default TestPage;
