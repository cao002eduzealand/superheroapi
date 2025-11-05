const store = require('../models/heroStore');


exports.createHero = (req, res) => {
    const created = store.create(req.body);
    res.status(201).json({ message: 'Created hero!', hero: created });
};

exports.getAllHeros = (req, res) => {
    const all = store.findAll();
    res.json(all);
};

exports.getHeroById = (req, res) => {
    const hero = store.findById(req.params.id);
    if (!hero) {
        res.status(404).json({ error: 'No hero found!' });
    }
    res.json(hero);
};

exports.updateHero = (req, res) => {
    const updated = store.update(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ error: 'No hero found!' });
    }
    res.json({ message: 'Updated hero!', hero: updated });
};

exports.deleteHero = (req, res) => {
    const ok = store.delete(req.params.id);
    if (!ok) {
        return res.status(404).json({ error: 'No hero found!' });
    }
    res.json({ message: 'Deleted hero!' });
}