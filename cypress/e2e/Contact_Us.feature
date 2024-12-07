Feature: WebdriverUniversity - Contact Us Page

    Background: Visit page
        
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button


    Scenario: Valid Contact Us Form Submission
        
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission

        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data

        And I type a specific first name "Sara"
        And I type a specific last name "Woods"
        And I enter a specific email address "sara@email.com"
        And I type a specific word "Hello123 " and number 123456
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario Outline: Scenario Outline page

        And I type a first name <firstName> and a last name <lastName>
        And I type a '<emailAddress>' and a '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'


        Examples:
            | firstName | lastName    | emailAddress    | comment   | message                      |
            | "Name1"   | "LastName1" | email1@test.com | Comment 1 | Thank You for your Message!  |
            | "Name2"   | "LastName2" | email1          | Comment 2 | Error: Invalid email address |

