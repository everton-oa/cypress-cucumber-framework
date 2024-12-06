/// <reference types="cypress" />
const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");

const url = "http://www.webdriveruniversity.com/";

Given(`I navigate to the webdriveruniversity homepage`, () => {
  cy.visit(url);
});

When("I click on the contact us button", () => {
  cy.get("#contact-us").invoke("removeAttr", "target").click();
});
