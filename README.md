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

## Credentials Management

### Local Execution

For local execution of the tests, credentials are stored in a `.env` file. You will need to create a `.env` file in the root directory of the project and provide the necessary credentials in the following format:

STANDARDUSER=

LOCKEDUSER=

PERFORMANCEGLITCHUSER=

PROBLEMUSER=

PASSWORD=

Ensure that you include the `.env` file in your `.gitignore` to prevent accidentally committing sensitive information.

### Continuous Integration (CI) Pipeline

For the CI pipeline, credentials are stored as environment variables. These variables should be configured within your CI/CD platform (e.g., azure devops, github actions, Jenkins) to maintain security and confidentiality. Avoid hardcoding credentials directly in the CI configuration files and utilize the platform's secure storage options for sensitive data.

### Running Tests

Execute the following command to run the tests:

npm run wdio

### Writing Tests

1. Create new test files under the `test/specs` directory.

2. Utilize the Page Object Model by creating page objects under the `test/pageobjects` directory.

3. Write test cases using WebDriverIO API, utilizing the created page objects.

### Azure Pipeline Analytics

<img width="2234" height="865" alt="image" src="https://github.com/user-attachments/assets/a468d047-fd9b-4289-97d4-360387b51267" />

##  Pipeline failure report

<img width="2358" height="790" alt="image" src="https://github.com/user-attachments/assets/839e6e56-7655-48f3-8144-66eb37773704" />

## Test failure report

<img width="2274" height="1180" alt="image" src="https://github.com/user-attachments/assets/57e44666-c499-4a06-be22-042cbeac80d7" />

## Pipeline duration report

<img width="2426" height="1184" alt="image" src="https://github.com/user-attachments/assets/38fc93a7-478f-490d-b505-42d0ce8128b0" />


## Contributors

- [Nikhil Gangwar]

## Acknowledgments

- Inspiration for this framework structure and design pattern comes from [[source/reference](https://webdriver.io/docs/pageobjects)].
