const axios = require("axios");

exports.fetchHero = async (heroName) => {
    const response = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
    const data = response.data;

    const hero = data.find(hero => hero.name.toLowerCase() === heroName.toLowerCase());

    if (!hero) {
        throw new Error("No hero name found.");
    }

    return {
        id: hero.id,
        name: hero.name,
        fullName: hero.biography.fullName,
        publisher: hero.biography.publisher,
        strength: hero.powerstats.strength,
        speed: hero.powerstats.speed,
        image: hero.images.md
        // brug map
    }
}
