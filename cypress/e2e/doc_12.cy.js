describe('Cadastro da família', () => {
  it.only('EP03 ST-01 DOC-12', () => {
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
    cy.get("button").contains("Família").click();
    cy.get("button").contains("Adicionar Manualmente").click();

    // Preenche todos os campos da família
    cy.get("#zipCode").type("54410-512");
    cy.get("#number").type("81912345678");
    cy.get("#moradiaAtingida").click();
    cy.get("mat-option").contains("Sim, está completamente inabitável").click();
    cy.get("button").contains("Membro da Família").click();

    // Preenche o primeiro membro
    cy.get("#name").type('Teste da Silva');
    cy.get("#gender").click();
    cy.get("#cpf").type("45931180850", { force: true });
    cy.get("mat-option").contains("Masculino").click();
    cy.contains("Data de Nascimento").click();
    cy.get(".mat-calendar-content").contains(2002).click();
    cy.get(".mat-calendar-content").contains("JUL").click();
    cy.get(".mat-calendar-content").contains(5).click();
    cy.get("#colorRace").click();
    cy.get("mat-option").contains("Branca").click();
    cy.contains("Responsável pela unidade familiar").click();
    cy.get("button").contains("Adicionar").click();

    // Confirma o cadastro da família
    cy.get("button").contains("Cadastrar").click();
    
    // verifica se aparece menssagem de sucesso ou cpf já cadastrado
    cy.get("simple-snack-bar").should("be.visible");
  });
});
