export const harvestPlants = (field) => {
    let harvester = []
    for (const plant of field) {
        let i = 0;
        if (plant.type === 'Corn') {
            let cornOutput = plant.output / 2
            for (i; cornOutput > i; i++) {
                harvester.push(plant);
            }
        } else {
            for (i; plant.output > i; i++) {
                harvester.push(plant);
            }
        }

    }
    return harvester
}
