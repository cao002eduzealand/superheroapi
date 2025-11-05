const heroModel = require('../models/heroModel');

exports.getHeroData = async (req, res) => {
    const heroName = req.params.heroName.toLowerCase();
    try {
        const data = await heroModel.fetchHero(heroName);
        res.json(data);
    } catch (error) {
        res.status(404).json({ message: 'Hero ikke fundet' });
    }
}