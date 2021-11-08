const screenWidths = [375, 768, 1280];

describe("ordering stocks", () => {
  it("should add strains to cart, fill out order form and successfully submit", () => {
    cy.visit("/");
    cy.findByText(/Hello world/);
    // Commenting out the line below whould have the tests pass
    cy.percySnapshot("DSC homepage", { widths: screenWidths });
  });
});

// necessary to prevent block-scoped var typescript warning
export {};
