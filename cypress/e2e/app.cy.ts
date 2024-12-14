describe('example-theme-app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
  });
});
