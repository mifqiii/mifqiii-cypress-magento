describe('Sign Up page - Verify User Successfully Creates Account', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  it('Succeeds in creating a new customer account', () => {
    // Mengisi formulir pendaftaran
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Miftahul')
    cy.get('#lastname').type('Fiqri') 
    cy.get('#email_address').type('miftahul.fiqri01@sanberdoe.com') //jika ingin melajukan test ubah email terlebih dahulu
    cy.get('#password').type('Sanber100%') 
    cy.get('#password-confirmation').type('Sanber100%') 
    cy.get('button[title="Create an Account"]').click()
    cy.get('.message-success > div').should('be.visible')
  })
})
