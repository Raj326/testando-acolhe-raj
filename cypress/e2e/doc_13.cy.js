
describe('Falha no cadastro do membro', () => {
  it('EP03 ST-01 DOC-13', () => {
    // Visita a página inicial
    cy.visit('/');
    // Realiza o login
    cy.login();

    // Clica no item 'Abrigos' no menu de navegação vertical
    cy.get(".fuse-vertical-navigation-item-wrapper").contains("Abrigos").click();
    // Preenche o primeiro campo de formulário com o texto "Abrigo 42"
    cy.get("mat-form-field").first().type("Abrigo 42");
    // Clica no elemento que contém "Abrigo 42 - Raj"
    cy.get("shelter-name-inline").contains("Abrigo 42 - Raj").click();
    // Clica na guia "Acolhidos" com forçamento
    cy.get("[role='tab']").contains("Acolhidos").click({ force: true });
    // Clica na primeira família
    cy.get("person-name-clickable").first().click();
    // Clica no ícone de edição
    cy.get("[data-mat-icon-name='pencil']").click({ force: true });
    // Limpa o campo com o id "name"
    cy.get("#name").clear();
    // Clica no botão "Atualizar" com forçamento
    cy.get("button").contains("Atualizar").click({ force: true });
    // Verifica se o texto "O nome é obrigatório" está visível na tela
    cy.contains('O nome é obrigatório').should('be.visible');
  });
});