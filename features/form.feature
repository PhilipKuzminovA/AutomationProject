Feature: Form

  Scenario Outline: Test different form fields
    Given I am on the practice page homepageurl
    When I validate page <headertext>
    Then I enter full name <name>
    And I enter email <email>
    And I enter phonenumber <phonenumber>
    And I select gender <gender>
    And I select years of experience <experience>
    And I select skills <skills>
    And I select tools <tools>
    And I click on submit button
    And I validate result page header <resultPageHeader>

    Examples: 
      | headertext | name | email                | phonenumber | gender | experience | skills             | tools   | resultPageHeader           |
      | Demo form  | Phil | testemail@gmail.com  |   999 98 22 | Male   |          1 | Functional testing | Appium  | Your message has been sent |
      | Demo form  | John | testemail1@gmail.com |   888 99 22 | Female |          3 | API testing        | Cypress | Your message has been sent |
