// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Web site availability', () => {
    it('Sanity listings web site', () => {
      cy.visit('http://localhost:3000')
      cy.contains("LisTinder").should('exist')
      cy.contains("Like").should('exist')

    })
    it('Test Like listings', () => {
        cy.visit('http://localhost:3000')
        cy.contains("Like").click({force : true})
        cy.contains("❤").should('exist')
        cy.contains("❤").click({force : true})
        cy.contains("❤").should('not.exist')
    })
  })