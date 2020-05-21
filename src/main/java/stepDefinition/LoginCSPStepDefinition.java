package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginCSPStepDefinition {
	//Declare WebDriver ref variable
	//WebDriver driver;
	
	@Given("^user is on CSP login page$")
	public void user_is_on_CSP_login_page() {
		/*code for navigating to CSP login page
		 driver.get("CSP login page url");
		 */
		System.out.println("");
		System.out.println("Launched browser and navigated to CSP login page");
	}
	
	@When("^title of login page is CSP$")
	public void title_of_login_page_is_CSP() {
		/* code for validating login page of CSP
		 String title = driver.getTitle();
		 System.out.println("CSP login page tilte: "+title);
		 Assert.assertEquals("CSP portal" , title);
		 */
		System.out.println("Yes, it is CSP login page");
	}
	
	@Then("^user enters CSP username \"(.*)\"$")
	public void user_enters_CSP_username(String username) {
	    /* code for entering username
		   driver.findElement(locatorForUsername).sendKeys(username);
		 */
		System.out.println("Entered username: "+username);
	}
	
	@Then("^user enters CSP password \"(.*)\"$")
	public void user_enters_CSP_password(String password) {
		/* code for entering password
		driver.findElement(locatorForPassword).sendKeys(password);
		*/
		System.out.println("Entered password: "+password);
	}

	@Then("^user clicks on Login button on CSP portal$")
	public void user_clicks_on_Login_button_on_CSP_portal() {
		/*Code for clicking on login button
		 driver.findElement(locatorForPassword).click();
		 */
		System.out.println("Clicked on Login button");
	}
	
	@Then("^user with \"(.*)\" checks for CSP \"(.*)\"$")
	public void user_checks_for_CSP_element(String username, String element) {
		if(username.equals("admin") || username.equals("customer")) {
		/* Code to verify login successful and navigated to home page
	    	 String title = driver.getTitle();
	    	 System.out.println("Home page title: "+title);
	    	 if(title.equals("CSP home page")) {
	    		 System.out.println("Login successful and home page loaded");
	    	 }
	    	 */
		System.out.println(username+" sees "+element);
	    	System.out.println("Login successful");
		}
		else if(username.equals("business")){
		/* Code to display error message
	    	       WebElement errMsg = driver.findElement(locator));  
			String errtext = errMsg.getText();
			System.out.println("error message is :"+errtext);
		*/
		System.out.println(username+" sees "+element);
	    	System.out.println("Login unsuccessful");
		}
	}
}
