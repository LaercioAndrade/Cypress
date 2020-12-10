/* global Given, Then, When */

import TestPage from '../pageobjects/testPage'
const PageTest  = new TestPage



Given("que eu acesso a tela principal do Globo", () =>{
  PageTest.acessarSite()
})

When("seleciono a reportagem", () =>{
  PageTest.clicarReportagem() 
})


Then("validar que acessamos a reportagem", () =>{ 
  PageTest.validarReportagem() 

})