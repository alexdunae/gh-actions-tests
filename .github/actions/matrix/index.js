const core = require("@actions/core");
// const wait = require("./wait");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput("milliseconds");
    core.info(`Waiting ${ms} milliseconds ...`);

    const clientsOnMaster = core.getInput("clientsOnMaster");
    const clientsOnPR = core.getInput("clientsOnPR");
    //   const filterString = core.getInput("filter");

    //   core.debug("Inside try block");
    //   core.warning("Yolo!");
    //   core.debug(`inputFoile ${inputFilePath}`);

    core.debug(new Date().toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    // await wait(parseInt(ms));
    core.info(new Date().toTimeString());

    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

// const core = require("@actions/core");
// // const jmes = require("jmespath");
// const fs = require("fs");

// try {
//   // `who-to-greet` input defined in action metadata file
//   const inputFilePath = core.getInput("inputFile");
//   const filterString = core.getInput("filter");

//   core.debug("Inside try block");
//   core.warning("Yolo!");
//   core.debug(`inputFoile ${inputFilePath}`);
//   core.debug(`filter ${filter}`);

//   //   const inputFile = fs.readFileSync(inputFilePath);

//   //   const inputJson = JSON.parse(inputFile);

//   //   const filteredIncludes = jmes.search(inputJson, filterString);
//   //   const filteredIncludesAsString = JSON.stringify(filteredIncludes);

//   //   const outputString = `{"include":${filteredIncludesAsString}}`;
//   core.setOutput("matrix", "blah");
// } catch (error) {
//   core.setFailed(error.message);
// }
