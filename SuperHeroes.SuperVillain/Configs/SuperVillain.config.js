module.exports = {

    "setupFilesAfterEnv": ["jest-extended"],
    "verbose": true,
    "testTimeout": 60000,
    "preset": 'jest-playwright-preset',
    "testEnvironmentOptions": {
      'jest-playwright': {
        browsers: ['chromium'],
        launchOptions: {
          headless: true
        }      
      },
    },
    "roots": [
        "../"
      ],   
    "reporters": [
    "default", 
    ["jest-stare", {
        "resultDir": "./Reports",
        "reportHeadline": "SuperHeroes & SuperVillain Test Results",
        "disableCharts": true
    }]
    ],  
    "globals" :{
        "server" : "https://supervillain.herokuapp.com/v1",
        "baseUrlLogin" : "https://responsivefight.herokuapp.com/"
    }
}