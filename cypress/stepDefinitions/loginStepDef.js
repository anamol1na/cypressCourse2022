///<reference types="Cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/**
 * Feature: Login

    Validate Login scenarios
Scenario:Verify successful login
Given I navigate to DEMOBLAZE page
When I enter valid credentials
Then I submit information and validate welcome message 

 */
Given('I navigate to DEMOBLAZE page',()=>{
    cy.visit('https://www.demoblaze.com/');
})

When('I enter valid credentials',()=>{
    cy.get('#login2').click();
    cy.get('#loginusername').type('jjmoncada');
    cy.get('#loginpassword').type('12345');
})

Then('I submit information and validate welcome message',()=>{
    cy.get("[type='button']").contains('Log in').click();
  //  cy.get('#nameofuser').should('have.text','Welcome jjmoncada')
})



