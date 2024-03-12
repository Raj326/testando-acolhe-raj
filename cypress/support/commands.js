Cypress.Commands.add("login", () => {
  cy.get("#email").type("rajneeshrpg@gmail.com");
  cy.get("#password").type("dIXpJU");
  cy.get("button").contains("Entrar").click();
});