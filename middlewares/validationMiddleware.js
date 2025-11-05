exports.validateHero = (req, res, next) => {

    const { name, fullName, publisher, strength, speed, image } = req.body;

    if (!name || !fullName || !publisher || strength === undefined || speed === undefined || !image) {
        return res.status(400).json({
            error: 'Alle felter skal udfyldes'
        });

    }

    if (typeof name !== 'string' || typeof fullName!=='string'|| typeof publisher !== 'string'){
        return res.status(400).json({
            error: 'Felterne name, fullname og publisher skal være tekst (string)'
        })
    }

    if (typeof strength !== 'number' || typeof speed !== 'number'){
        return res.status(400).json({
            error: 'Strength og speed skal være tal'
        });
    }

    if (typeof image !== 'string'){
        return res.status(400).json({
            error: 'Image skal være tekst'
        });
    }

    next();
};