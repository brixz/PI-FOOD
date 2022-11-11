const {TypesDiet} = require('../db.js');
const {getDiets} = require('../getData.js');

const findOrCreateGenres = async (req, res) => {
    const diets = await getDiets();
    diets.map(async (g) => {
        await TypesDiet.findOrCreateGenres({ where: { diets: g.diets}});
    });
    const orderedDiets = diets.sort((a, b) => a.title.localeCompare(b.title))
    res.json(orderedDiets);
}

module.exports = findOrCreateGenres;