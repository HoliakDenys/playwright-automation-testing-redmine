# Playwright Automation Testing

## Summary

This repository contains an automation testing project built using Playwright and TypeScript for testing the Redmine website. The project follows the Page Object Model (POM) design pattern and includes test cases for various functionalities of the Redmine web application. The tests are executed using Playwright, and the results are reported using Allure reports.

## Requirements

- **Node.js** (version 16 or later)
- **Playwright** (version 1.51 or later)
- **Allure Playwright** (version 3.2.0 or later)
- **TypeScript** (version 5.8.2 or later)
- **dotenv** for environment variable management
- **ts-node** for running TypeScript files without compilation

## Steps to Install

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/HoliakDenys/playwright-automation-testing-redmine.git
    cd playwright-automation-testing
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Ensure the project dependencies are installed correctly:
    ```bash
    npm run tests
    ```

## Steps to Launch

    1. Run tests in **headless** mode (no browser UI):
        ```bash
        npm run tests
        ```

2. Run tests in **headed** mode (with browser UI visible):
    ```bash
    npm run tests:headed
    ```

3. After running tests, generate the Allure report:
    ```bash
    npm run allure:generate
    ```

4. Open the Allure report in your browser:
    ```bash
    npm run allure:open
    ```

## Steps to Create the Report

1. **Run Tests and Generate Allure Results:**
    Allure reports are generated automatically when running the tests. You can create the report after tests execution by running the following command:
    ```bash
    npm run allure:generate
    ```

2. **Open Allure Report:**
    After generating the Allure report, you can open it with the following command:
    ```bash
    npm run allure:open
    ```

    This will launch the Allure report in your default browser.
    
## CI/CD Pipeline (GitHub Actions)
This project is configured with GitHub Actions for CI/CD automation with the following steps:

1. **Install dependencies** – Automatically installs project dependencies using `npm install`.
2. **Run tests** – Executes Playwright tests using `npm run tests`.
3. **Copy Allure data from previous runs** – Ensures that data from previous test runs is available for generating reports.
4. **Create new report** – Generates a new Allure report using the command `npm run allure:generate`.
5. **Push report to the other branch** – Deploys the generated report to a separate branch, typically `gh-pages`, where the report is stored for easy access.
6. **Add GitHub Pages to the branch with the report** – The report is then served through GitHub Pages, allowing it to be accessed via a URL.

The report will be accessible at:  
`https://holiakdenys.github.io/playwright-automation-testing-redmine/`