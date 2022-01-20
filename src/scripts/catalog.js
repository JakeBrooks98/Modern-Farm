export const catalog = (harvester) => {
    for (const food of harvester) {
        document.querySelector(".container") .innerHTML += `<div class="food">${food.type}</div>`
    }

}