export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
const database = {
    fish: [
        {
            id: 1, 
            species: "Clown",
            sizeIn: 3,
            name: "Bart",
            harvestLoc: "Sydney",
            food: "crustaceans",
        },
        {
            id: 2, 
            species: "Moorish Idol",
            sizeIn: 3,
            name: "Lisa",
            harvestLoc: "Cape Town",
            food: "pellets",
        },
        {
            id: 3, 
            species: "Royal Blue Tang",
            sizeIn: 4,
            name: "Marge",
            harvestLoc: "Sydney",
            food: "crustaceans",
        },
        {
            id: 4, 
            species: "Catfish",
            sizeIn: 7,
            name: "Homer",
            harvestLoc: "Hendersonville",
            food: "flakes",
        },
        {
            id: 5, 
            species: "GoldFish",
            sizeIn: 2,
            name: "Maggie",
            harvestLoc: "Osaka",
            food: "pellets",
        }
    ]
}
