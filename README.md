Automated Testing With Node.js 

Stack: 
Language: NodeJs, Cucumber
Chai for Assertion
Driver: Selenium Webdriver
Browser: Chrome


First, you should start by cloning the repository

git clone 
Then run npm install to install all the dependencies


Projecte Structure

├
│
├── Features                       
│   ├── Feature                    # Generic functionality for tests
│   └── Step Definition             # Home page testing functionality
│
│
│
├── Utils                       # Utility files for testing
│   ├── common.js             # Generating random keyword for searching
│   └── Locators.js              # HTML and CSS identifier for elements to test
├── ...


To run all features for Browser Automation
npm run cucumber-features

To run Test Cases 2 :
node app.js