package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\YATHI\\eclipse-workspace\\TestProject\\src\\main\\java\\Features",
		glue = {"stepDefinition"},
		format = {"pretty", "html:test-output"},
		monochrome = true,
		dryRun = false
		)

public class TestRunner {

}
