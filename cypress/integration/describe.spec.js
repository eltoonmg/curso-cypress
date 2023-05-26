/// <reference types="cypress" />

//it serve para descrever os testes
it('A external test...', () =>{

})

//serve para agrupar testes
describe('Should group tests... ', () => {
    it('A internal test...', () => {

    })

    //pula testes
    it.skip('A internal test...', () => {
        
    })

    //only executa somente um teste
    it.only('A internal test...', () => {
        
    })
})