const {TypesDiet} = require('../db.js');
const {getDiets} = require('../getData.js');

const findOrCreateDiets = async (req, res) => {
    const diets = await getDiets();
    diets.map(async (g) => {
        await TypesDiet.findOrCreate({ where: { title: g.title}});
    });
    // for (const key in object) {
    //     if (Object.hasOwnProperty.call(object, key)) {
    //         const element = object[key];
            
    //     }
    // }
    //const orderedDiets = diets.sort((a, b) => a.title.localeCompare(b.title))
    res.json(diets.concat({ title : "vegetarian"}));
}

module.exports = findOrCreateDiets;