@login @regression
Feature: WebdriverUniversity - Login Page

    Scenario Outline: Validate valid and invalid login credentials

        Given I navigate to the webdriveruniversity homepage
        When I click on the login page button
        And I type a '<username>' and '<password>'
        And I click on the login button
        Then I should be presented with an alert box with '<message>'
        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | Name      | pass123      | validation failed    |

