package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginBSPStepDefinition {
	//Declare WebDriver ref variable
	//WebDriver driver;
	
	@Before
	public void launchBrowser() {
		/* Code for launching browser
		System.setProperty("webdriver.chrome.driver", "./Drivers/chromedriver.exe");
		 driver = new ChromeDriver();
		 */
	}
	
	@After
	public void closeBrowser() {
		/*Code for closing browser opened by selenium code
		 driver.quit();
		 */
		System.out.println("Closed browser");
	}
	
	@Given("^user is on BSP login page$")
	public void user_is_on_BSP_login_page() {
		/*code for navigating to BSP login page
		 driver.get("BSP login page url");
		 */
		System.out.println("");
		System.out.println("Launched browser and navigated to BSP login page");
	}
	
	@When("^title of login page is BSP$")
	public void title_of_login_page_is_BSP() {
		/* code for validating login page of BSP
		 String title = driver.getTitle();
		 System.out.println("BSP login page tilte: "+title);
		 Assert.assertEquals("BSP portal" , title);
		 */
		System.out.println("Yes, it is BSP login page");
	}
	
	@Then("^user enters BSP username \"(.*)\"$")
	public void user_enters_BSP_username(String username) {
	    /* code for entering username
		   driver.findElement(locatorForUsername).sendKeys(username);
		 */
		System.out.println("Entered username: "+username);
	}
	
	@Then("^user enters BSP password \"(.*)\"$")
	public void user_enters_BSP_password(String password) {
		/* code for entering password
		driver.findElement(locatorForPassword).sendKeys(password);
		*/
		System.out.println("Entered password: "+password);
	}

	@Then("^user clicks on Login button on BSP portal$")
	public void user_clicks_on_Login_button_on_BSP_portal() {
		/*Code for clicking on login button
		 driver.findElement(locatorForPassword).click();
		 */
		System.out.println("Clicked on Login button");
	}
	
	@Then("^user with \"(.*)\" checks for BSP \"(.*)\"$")
	public void user_checks_for_BSP_element(String username, String element) {
		if(username.equals("admin") || username.equals("business")) {
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
		else if(username.equals("customer")){
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
