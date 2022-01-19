const fieldProduce = [];

export const addPlant = (seed) => {
    fieldProduce.push(seed)
    return fieldProduce
}

export const usePlants = () => {
    let usePlantsCopy = fieldProduce.map(fieldProduce => ({...fieldProduce}))
    return usePlantsCopy
}
