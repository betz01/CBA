This repo contains UI and API tests for SuperHeroes and SuperVillain project.
- [SuperHeroes.SuperVillain](https://github.com/betz01/CBA/tree/main/SuperHeroes.SuperVillain) contains the Test Framework.
- [ReportsUI](https://github.com/betz01/CBA/tree/main/ReportsUI) contains a sample `index.html` report for UI tests.
- [ReportsAPI](https://github.com/betz01/CBA/tree/main/ReportsAPI) contains a sample `index.html` report for API tests.

## SuperHeroes.SuperVillain contents

- [Automation Test Framework](#automation-test-framework)
  - [Tools](#tools)
  - [Installation](#installation)
  - [Components](#components)
- [API Tests](#api-tests)
- [UI Tests](#ui-tests)

## Automation Test Framework

The tests uses [Jest Javascript Framework](https://jestjs.io/).

### Tools

- [SuperTest](https://www.npmjs.com/package/supertest) for making http calls.
- [Playwright](https://playwright.dev/) for UI testing.
- [jest-stare](https://www.npmjs.com/package/jest-stare) for Html reports.

### Installation

- Install [NodeJS](https://nodejs.org/en/download/).
- Clone this Repo.
- Navigate to `/SuperHeroes.SuperVillain` directory in Visual Studio Code.
- In the terminal run `npm i` to install all the packages.

### Components

- `Configs` defines all the environment specific values for Test/Stage/Production environments.
- `API` contains all API tests.
    - For each endpoint there is a Test data and Test file. To add more regression tests just update the test data file for that endpoint.
    - `/TestData` defines the data for each endpoint. 
    - `/Tests` defines the tests for each endpoint.
    - `/Helpers` have common functions used for API tests.
- `UI` contains all UI tests.
    - UI tests uses Page Object Model.
    - `/PageObjects` defines the pageobjects for each page. 
    - `/Tests` defines the tests for each challenge. 

## API Tests

These are the API tests based on the [Swagger](https://supervillain.herokuapp.com/api-docs/) documentation.

- To run the tests and generate reports `npm run regressionAPI --reporters`. Reports are generated in `SuperVillain/Reports/index.html`.
- There are some known failures in `DELETE /user` and `PUT /user`.

## UI Tests

These are the UI tests for [Responsive fight](https://responsivefight.herokuapp.com/).

- To run the tests and generate reports `npm run regressionUI --reporters`. Reports are generated in `SuperVillain/Reports/index.html`.- 
