import { addPlant, usePlants } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (parentPlan) => {
    for (const childPlan of parentPlan) {
        for (const plan of childPlan) {
            if (plan === 'Asparagus') {
                const plantAsparagus = createAsparagus();
                addPlant(plantAsparagus);
            }
            else if (plan === 'Corn') {
                const plantCorn = createCorn();
                addPlant(plantCorn[0])
                addPlant(plantCorn[1])
            }
            else if (plan === 'Potato') {
                const plantPotato = createPotato();
                addPlant(plantPotato);
            }
            else if (plan === 'Soybean') {
                const plantSoybean = createSoybean();
                addPlant(plantSoybean);
            }
            else if (plan === 'Sunflower') {
                const plantSunflower = createSunflower();
                addPlant(plantSunflower);
            }
            else if (plan === 'Wheat') {
                const plantWheat = createWheat();
                addPlant(plantWheat);
            }
        }
    }
    return usePlants()

}