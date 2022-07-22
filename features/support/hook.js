const {
    BeforeAll,
    AfterAll,
    BeforeStep,
    AfterStep,
    After,
    Before,
    setDefaultTimeout,
    Status
} = require("@cucumber/cucumber");
const {browser} = require("protractor");

setDefaultTimeout(12 * 60 * 60 * 1000);

BeforeAll(async function () {
    console.log(`Starting Feature`);
});

AfterAll(async function () {

})

Before(async function (Scenario) {

})

After(async function (scenario) {

});

BeforeStep(async function (scenario) {
});

AfterStep(async function (scenario) {
})