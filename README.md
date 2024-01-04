# Automated Testing Course with Cypress - cypress-basico-v2

👋 "Welcome!"

Web application related to a Customer Support Center called "TAT." The tests cover different aspects of this application, including title verification, form filling, handling mandatory fields, form submission, product selection, types of assistance, interactions with checkboxes and radio buttons, as well as privacy policy validation.

## Requirements

Before you begin, make sure you have the following requirements installed:

1. **Node.js and npm:** Cypress is based on Node.js. Download and install Node.js from the official website: [Node.js Downloads](https://nodejs.org/en/download/).

2. **Git:** Git is used for version control. Download and install Git from the official website: [Git Downloads](https://git-scm.com/downloads).

3. **Code Editor:** Choose a code editor of your preference, such as Visual Studio Code, Sublime Text, or Atom.

4. **Cypress ( v"^13.6.2") Project Configuration:** Run the following command to install Cypress as a development dependency:

    ```bash
    npm install cypress --save-dev
    ```

    Configure scripts in your `package.json` file to facilitate test execution.

5. **Cypress Dashboard Configuration (Optional):** If you are using the Cypress Dashboard, set up your account on [Cypress Dashboard](https://dashboard.cypress.io/) and provide the project key when running tests.

Make sure to check the project-specific documentation for any additional requirements or specific configurations.

## How to Run Tests

Follow the steps below to execute tests in the project:

1. **Install Dependencies:** Ensure you have the necessary dependencies installed. Run the following command in the terminal:

    ```bash
    npm install
    ```

2. **Run Tests Locally:** To run tests locally, use the following command:

    ```bash
    npm test
    ```

    This command will use Cypress to run tests in command-line mode.

3. **Run Tests with Graphical Interface:** If you prefer an interactive approach, you can open the Cypress graphical interface with the following command:

    ```bash
    npm run cy:open
    ```

4. **Run Tests in Mobile Environment (Optional):** If you want to test in a mobile environment, use the following command:

    ```bash
    npm run cy:open:mobile
    ```

    This command will open the Cypress graphical interface with configuration to emulate a mobile device.
