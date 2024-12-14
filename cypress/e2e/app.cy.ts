describe('example-theme-app', () => {
  describe('light theme', () => {
    beforeEach(() => {
      cy.wrap(
        Cypress.automation('remote:debugger:protocol', {
          command: 'Emulation.setEmulatedMedia',
          params: {
            media: 'page',
            features: [
              {
                name: 'prefers-color-scheme',
                value: 'light',
              },
            ],
          },
        }),
      );
      cy.visit('/');
    });

    it('should load', () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(500);
    });

    it('should have light background color', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(255, 221, 186)');
    });
  });

  describe('dark theme', () => {
    beforeEach(() => {
      cy.wrap(
        Cypress.automation('remote:debugger:protocol', {
          command: 'Emulation.setEmulatedMedia',
          params: {
            media: 'page',
            features: [
              {
                name: 'prefers-color-scheme',
                value: 'dark',
              },
            ],
          },
        }),
      );
      cy.visit('/');
    });

    it('should have dark background color', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(0, 75, 114)');
    });
  });
});
