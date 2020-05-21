$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginBSP.feature");
formatter.feature({
  "line": 1,
  "name": "BSP Login Feature",
  "description": "",
  "id": "bsp-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "BSP Login Test Scenario",
  "description": "",
  "id": "bsp-login-feature;bsp-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on BSP login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is BSP",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters BSP username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters BSP password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button on BSP portal",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user with \"\u003cusername\u003e\" checks for BSP \"\u003celement\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "bsp-login-feature;bsp-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "element"
      ],
      "line": 13,
      "id": "bsp-login-feature;bsp-login-test-scenario;;1"
    },
    {
      "cells": [
        "admin",
        "admin123",
        "homepage"
      ],
      "line": 14,
      "id": "bsp-login-feature;bsp-login-test-scenario;;2"
    },
    {
      "cells": [
        "business",
        "busi123",
        "homepage"
      ],
      "line": 15,
      "id": "bsp-login-feature;bsp-login-test-scenario;;3"
    },
    {
      "cells": [
        "customer",
        "cust123",
        "errmsg"
      ],
      "line": 16,
      "id": "bsp-login-feature;bsp-login-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 129975,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "BSP Login Test Scenario",
  "description": "",
  "id": "bsp-login-feature;bsp-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on BSP login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is BSP",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters BSP username \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters BSP password \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button on BSP portal",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user with \"admin\" checks for BSP \"homepage\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginBSPStepDefinition.user_is_on_BSP_login_page()"
});
formatter.result({
  "duration": 250947357,
  "status": "passed"
});
formatter.match({
  "location": "LoginBSPStepDefinition.title_of_login_page_is_BSP()"
});
formatter.result({
  "duration": 237827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 26
    }
  ],
  "location": "LoginBSPStepDefinition.user_enters_BSP_username(String)"
});
formatter.result({
  "duration": 2761084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 26
    }
  ],
  "location": "LoginBSPStepDefinition.user_enters_BSP_password(String)"
});
formatter.result({
  "duration": 257185,
  "status": "passed"
});
formatter.match({
  "location": "LoginBSPStepDefinition.user_clicks_on_Login_button_on_BSP_portal()"
});
formatter.result({
  "duration": 239408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 11
    },
    {
      "val": "homepage",
      "offset": 34
    }
  ],
  "location": "LoginBSPStepDefinition.user_checks_for_BSP_element(String,String)"
});
formatter.result({
  "duration": 254024,
  "status": "passed"
});
formatter.after({
  "duration": 184099,
  "status": "passed"
});
formatter.before({
  "duration": 30419,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "BSP Login Test Scenario",
  "description": "",
  "id": "bsp-login-feature;bsp-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on BSP login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is BSP",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters BSP username \"business\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters BSP password \"busi123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button on BSP portal",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user with \"business\" checks for BSP \"homepage\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginBSPStepDefinition.user_is_on_BSP_login_page()"
});
formatter.result({
  "duration": 63605,
  "status": "passed"
});
formatter.match({
  "location": "LoginBSPStepDefinition.title_of_login_page_is_BSP()"
});
formatter.result({
  "duration": 54518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "business",
      "offset": 26
    }
  ],
  "location": "LoginBSPStepDefinition.user_enters_BSP_username(String)"
});
formatter.result({
  "duration": 1371653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "busi123",
      "offset": 26
    }
  ],
  "location": "LoginBSPStepDefinition.user_enters_BSP_password(String)"
});
formatter.result({
  "duration": 272198,
  "status": "passed"
});
formatter.match({
  "location": "LoginBSPStepDefinition.user_clicks_on_Login_button_on_BSP_portal()"
});
formatter.result({
  "duration": 313679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "business",
      "offset": 11
    },
    {
      "val": "homepage",
      "offset": 37
    }
  ],
  "location": "LoginBSPStepDefinition.user_checks_for_BSP_element(String,String)"
});
formatter.result({
  "duration": 503308,
  "status": "passed"
});
formatter.after({
  "duration": 315654,
  "status": "passed"
});
formatter.before({
  "duration": 49382,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "BSP Login Test Scenario",
  "description": "",
  "id": "bsp-login-feature;bsp-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on BSP login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is BSP",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters BSP username \"customer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters BSP password \"cust123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button on BSP portal",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user with \"customer\" checks for BSP \"errmsg\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginBSPStepDefinition.user_is_on_BSP_login_page()"
});
formatter.result({
  "duration": 2952689,
  "status": "passed"
});
formatter.match({
  "location": "LoginBSPStepDefinition.title_of_login_page_is_BSP()"
});
formatter.result({
  "duration": 81382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customer",
      "offset": 26
    }
  ],
  "location": "LoginBSPStepDefinition.user_enters_BSP_username(String)"
});
formatter.result({
  "duration": 417580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cust123",
      "offset": 26
    }
  ],
  "location": "LoginBSPStepDefinition.user_enters_BSP_password(String)"
});
formatter.result({
  "duration": 493827,
  "status": "passed"
});
formatter.match({
  "location": "LoginBSPStepDefinition.user_clicks_on_Login_button_on_BSP_portal()"
});
formatter.result({
  "duration": 245728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customer",
      "offset": 11
    },
    {
      "val": "errmsg",
      "offset": 37
    }
  ],
  "location": "LoginBSPStepDefinition.user_checks_for_BSP_element(String,String)"
});
formatter.result({
  "duration": 2623998,
  "status": "passed"
});
formatter.after({
  "duration": 392296,
  "status": "passed"
});
formatter.uri("loginCSP.feature");
formatter.feature({
  "line": 1,
  "name": "CSP Login Feature",
  "description": "",
  "id": "csp-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "CSP Login Test Scenario",
  "description": "",
  "id": "csp-login-feature;csp-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on CSP login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is CSP",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters CSP username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters CSP password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button on CSP portal",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user with \"\u003cusername\u003e\" checks for CSP \"\u003celement\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "csp-login-feature;csp-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "element"
      ],
      "line": 13,
      "id": "csp-login-feature;csp-login-test-scenario;;1"
    },
    {
      "cells": [
        "admin",
        "admin123",
        "homepage"
      ],
      "line": 14,
      "id": "csp-login-feature;csp-login-test-scenario;;2"
    },
    {
      "cells": [
        "customer",
        "cust123",
        "homepage"
      ],
      "line": 15,
      "id": "csp-login-feature;csp-login-test-scenario;;3"
    },
    {
      "cells": [
        "business",
        "busi123",
        "errmsg"
      ],
      "line": 16,
      "id": "csp-login-feature;csp-login-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41481,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "CSP Login Test Scenario",
  "description": "",
  "id": "csp-login-feature;csp-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on CSP login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is CSP",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters CSP username \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters CSP password \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button on CSP portal",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user with \"admin\" checks for CSP \"homepage\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCSPStepDefinition.user_is_on_CSP_login_page()"
});
formatter.result({
  "duration": 504493,
  "status": "passed"
});
formatter.match({
  "location": "LoginCSPStepDefinition.title_of_login_page_is_CSP()"
});
formatter.result({
  "duration": 230320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 26
    }
  ],
  "location": "LoginCSPStepDefinition.user_enters_CSP_username(String)"
});
formatter.result({
  "duration": 230321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 26
    }
  ],
  "location": "LoginCSPStepDefinition.user_enters_CSP_password(String)"
});
formatter.result({
  "duration": 128395,
  "status": "passed"
});
formatter.match({
  "location": "LoginCSPStepDefinition.user_clicks_on_Login_button_on_CSP_portal()"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 11
    },
    {
      "val": "homepage",
      "offset": 34
    }
  ],
  "location": "LoginCSPStepDefinition.user_checks_for_CSP_element(String,String)"
});
formatter.result({
  "duration": 215308,
  "status": "passed"
});
formatter.after({
  "duration": 322370,
  "status": "passed"
});
formatter.before({
  "duration": 43456,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "CSP Login Test Scenario",
  "description": "",
  "id": "csp-login-feature;csp-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on CSP login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is CSP",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters CSP username \"customer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters CSP password \"cust123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button on CSP portal",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user with \"customer\" checks for CSP \"homepage\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCSPStepDefinition.user_is_on_CSP_login_page()"
});
formatter.result({
  "duration": 282864,
  "status": "passed"
});
formatter.match({
  "location": "LoginCSPStepDefinition.title_of_login_page_is_CSP()"
});
formatter.result({
  "duration": 60444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customer",
      "offset": 26
    }
  ],
  "location": "LoginCSPStepDefinition.user_enters_CSP_username(String)"
});
formatter.result({
  "duration": 128395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cust123",
      "offset": 26
    }
  ],
  "location": "LoginCSPStepDefinition.user_enters_CSP_password(String)"
});
formatter.result({
  "duration": 422321,
  "status": "passed"
});
formatter.match({
  "location": "LoginCSPStepDefinition.user_clicks_on_Login_button_on_CSP_portal()"
});
formatter.result({
  "duration": 120099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "customer",
      "offset": 11
    },
    {
      "val": "homepage",
      "offset": 37
    }
  ],
  "location": "LoginCSPStepDefinition.user_checks_for_CSP_element(String,String)"
});
formatter.result({
  "duration": 178567,
  "status": "passed"
});
formatter.after({
  "duration": 43852,
  "status": "passed"
});
formatter.before({
  "duration": 39111,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "CSP Login Test Scenario",
  "description": "",
  "id": "csp-login-feature;csp-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on CSP login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is CSP",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters CSP username \"business\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters CSP password \"busi123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button on CSP portal",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user with \"business\" checks for CSP \"errmsg\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCSPStepDefinition.user_is_on_CSP_login_page()"
});
formatter.result({
  "duration": 352790,
  "status": "passed"
});
formatter.match({
  "location": "LoginCSPStepDefinition.title_of_login_page_is_CSP()"
});
formatter.result({
  "duration": 88494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "business",
      "offset": 26
    }
  ],
  "location": "LoginCSPStepDefinition.user_enters_CSP_username(String)"
});
formatter.result({
  "duration": 225185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "busi123",
      "offset": 26
    }
  ],
  "location": "LoginCSPStepDefinition.user_enters_CSP_password(String)"
});
formatter.result({
  "duration": 74272,
  "status": "passed"
});
formatter.match({
  "location": "LoginCSPStepDefinition.user_clicks_on_Login_button_on_CSP_portal()"
});
formatter.result({
  "duration": 152493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "business",
      "offset": 11
    },
    {
      "val": "errmsg",
      "offset": 37
    }
  ],
  "location": "LoginCSPStepDefinition.user_checks_for_CSP_element(String,String)"
});
formatter.result({
  "duration": 598518,
  "status": "passed"
});
formatter.after({
  "duration": 231506,
  "status": "passed"
});
});