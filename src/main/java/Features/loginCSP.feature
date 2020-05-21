Feature: CSP Login Feature 

Scenario Outline: CSP Login Test Scenario

	Given user is on CSP login page
	When title of login page is CSP 
	Then user enters CSP username "<username>" 
	Then user enters CSP password "<password>" 
	Then user clicks on Login button on CSP portal
	Then user with "<username>" checks for CSP "<element>"
	
	Examples: 
		| username | password | element |
		| admin    | admin123  | homepage |
		| customer  | cust123  | homepage |
		| business | busi123 | errmsg |
