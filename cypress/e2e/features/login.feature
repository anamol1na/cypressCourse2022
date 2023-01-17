Feature: Login

    Validate Login scenarios
Scenario:Verify successful login
Given I navigate to DEMOBLAZE page
When I enter valid credentials
Then I submit information and validate welcome message 
