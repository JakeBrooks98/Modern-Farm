console.log("Welcome to the main module")

import {createPlan} from "./plan.js"

const yearlyPlan= createPlan();

console.log(yearlyPlan);

//test code
import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { usePlants } from "./field.js"
const tillField = usePlants()
console.log(tillField)

const seed= {type:'asparagus', height:145, output:4}