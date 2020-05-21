Feature: BSP Login Feature 

Scenario Outline: BSP Login Test Scenario

	Given user is on BSP login page
	When title of login page is BSP 
	Then user enters BSP username "<username>" 
	Then user enters BSP password "<password>" 
	Then user clicks on Login button on BSP portal
	Then user with "<username>" checks for BSP "<element>"
	
	Examples: 
		| username | password | element |
		| admin    | admin123  | homepage |
		| business  | busi123  | homepage |
		| customer | cust123 | errmsg |
