const heroModel = require('../models/heroModel');

exports.getAllHeroes = async (req, res) => {
    try {
        const data = await heroModel.fetchAllHeroes();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Kunne ikke hente helte' });
    }
}



exports.getHeroData = async (req, res) => {
    const heroName = req.params.heroName.toLowerCase();
    try {
        const data = await heroModel.fetchHero(heroName);
        res.json(data);
    } catch (error) {
        res.status(404).json({ message: 'Hero ikke fundet' });
    }
}

