import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
// const fishtest = ["fish1", "fish2", "fish3"]
// console.log(fishtest);