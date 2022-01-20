console.log("Welcome to the main module")
//imports
import {createPlan} from "./plan.js"
import {plantSeeds} from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";


const yearlyPlan= createPlan();
const sowField= plantSeeds(yearlyPlan);
const harvestedCrops= harvestPlants(sowField);
const showCatalog = catalog(harvestedCrops)
catalog(showCatalog);