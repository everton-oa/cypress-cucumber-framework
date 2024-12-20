/// <reference types="cypress" />
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When(`I type a first name`, () => {
  cy.get('[name="first_name"]').type("Test");
});

When(`I type a last name`, () => {
  cy.get('[name="last_name"]').type("Cypress");
});

When(`I enter an email address`, () => {
  cy.get('[name="email"]').type("test@cypress.com");
});

When(`I type a comment`, () => {
  cy.get("textarea[name='message']").type("Hello World");
});

When(`I click on the submit button`, () => {
  cy.get('[type="submit"]').click();
});

Then(
  `I should be presented with a successful contact us submission message`,
  () => {
    cy.get("h1").should("have.text", "Thank You for your Message!");
  }
);

Then(
  `I should be presented with an unsuccessful contact us submission message`,
  () => {
    cy.get("body").contains("Error: Invalid email address");
  }
);

When(`I type a specific first name {string}`, (firstName) => {
  cy.get('[name="first_name"]').type(firstName);
});

When(`I type a specific last name {string}`, (lastName) => {
  cy.get('[name="last_name"]').type(lastName);
});

When(`I enter a specific email address {string}`, (emailAdress) => {
  cy.get('[name="email"]').type(emailAdress);
});

When(`I type a specific word {string} and number {int}`, (word, number) => {
  cy.get("textarea[name='message']").type(word + number);
});

When(
  `I type a first name {string} and a last name {string}`,
  (firstName, lastName) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
  }
);

When(`I type a {string} and a {string}`, (emailAdress, comment) => {
  cy.get('[name="email"]').type(emailAdress);
  cy.get("textarea[name='message']").type(comment);
});

Then(`I should be presented with header text {string}`, (message) => {
  cy.get("body").contains(message);
});
