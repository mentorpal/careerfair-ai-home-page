import { cySetup } from "../support/functions";

describe("visits the site", () => {
  it.only("opens the site at localhost:8000", () => {
    cySetup(cy);
    cy.visit("/");
  });

  it("takes a snapshot of the site", () => {
    cySetup(cy);
    cy.visit("/");
    cy.matchImageSnapshot(`screenshots-example`);
  });
});
