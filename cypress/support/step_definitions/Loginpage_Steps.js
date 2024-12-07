/// <reference types="cypress" />
const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const url = "http://www.webdriveruniversity.com/";

Given(`I type a {string} and {string}`, (username, password) => {
  cy.get("#text").type(username);
  cy.get("#password").type(password);
});

When(`I click on the login button`, () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  cy.get("#login-button").click();
});

Then(`I should be presented with an alert box with {string}`, (message) => {
  expect(stub).to.has.been.calledWith(message);
});
