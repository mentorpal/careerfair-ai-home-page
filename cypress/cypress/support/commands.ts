// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-fill-command";
import "cypress-localstorage-commands";
import "cypress-file-upload";
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  customDiffDir: Cypress.env("CYPRESS_SNAPSHOT_DIFF_DIR"),
  comparisonMethod: "ssim",
  failureThreshold: 0.01,
  failureThresholdType: "percent",
});

// recursively gets an element, returning only after it's determined to be attached to the DOM for good
Cypress.Commands.add("getSettled", (selector, opts = {}) => {
  const retries = opts.retries || 3;
  const delay = opts.delay || 100;

  const isAttached = (resolve, count = 0) => {
    const el = Cypress.$(selector);

    // is element attached to the DOM?
    count = Cypress.dom.isAttached(el) ? count + 1 : 0;

    // hit our base case, return the element
    if (count >= retries) {
      return resolve(el);
    }

    // retry after a bit of a delay
    setTimeout(() => isAttached(resolve, count), delay);
  };

  // wrap, so we can chain cypress commands off the result
  return cy.wrap(null).then(() => {
    return new Cypress.Promise((resolve) => {
      return isAttached(resolve, 0);
    }).then((el) => {
      return cy.wrap(el);
    });
  });
});
