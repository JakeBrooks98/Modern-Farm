console.log("Welcome to the main module")
//imports
import {createPlan} from "./plan.js"
import {plantSeeds} from "./tractor.js";


const yearlyPlan= createPlan();

//console.log(yearlyPlan);

//test code
const sowField= plantSeeds(yearlyPlan);
console.log(sowField);