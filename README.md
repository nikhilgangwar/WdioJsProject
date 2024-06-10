# WebDriverIO Automation Framework with Page Object Model (POM)

## Introduction

This repository contains an automation framework developed using WebDriverIO and following the Page Object Model (POM) design pattern. This framework aims to provide a structured and maintainable approach to automate web application testing.

## Features

- **Page Object Model (POM):** The framework is organized using the Page Object Model design pattern, which promotes code reusability, readability, and maintenance.
- **WebDriverIO:** WebDriverIO is used as the automation library, providing powerful features for browser automation and testing.

- **Test Suite Organization:** Test suites are logically organized for easy navigation and execution.

- **Configurable:** The framework is highly configurable through the `wdio.conf.js` file, allowing customization of browsers, environments, and other settings.

## Getting Started

### Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js
- WebDriverIO
- Selenium Server (if applicable)

### Installation

1. Clone this repository to your local machine:

git clone <git@github.com:nikhilgangwar/WdioJsProject.git>

2. Navigate to the project directory:

cd <Your-project-directory> (i.e. your project directory where you want to install the Wdio project)

3. Install dependencies:

npm install

### Configuration

1. Customize `wdio.conf.js` file as per your requirements. Update browser configurations, test suites, and other settings.

2. Add necessary environment configurations in the `config` directory if required.

### Running Tests

Execute the following command to run the tests:

npm test

### Writing Tests

1. Create new test files under the `test/specs` directory.

2. Utilize the Page Object Model by creating page objects under the `test/pageobjects` directory.

3. Write test cases using WebDriverIO API, utilizing the created page objects.

## Contributors

- [Nikhil Gangwar]

## Acknowledgments

- Inspiration for this framework structure and design pattern comes from [[source/reference](https://webdriver.io/docs/pageobjects)].
