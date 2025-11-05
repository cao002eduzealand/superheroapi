let heroList = [];
let currentId = 1;

exports.create = (data) => {
    const hero = {id: currentId++, ...data};
    heroList.push(hero);
    return hero;
}

exports.findAll = () => heroList;

exports.findById = (id) => heroList.find(hero => hero.id === id);

exports.update = (id, data) => {
    const index = heroList.findIndex(hero => hero.id === id);
    if (index === -1) return null;

   heroList[index] = {id: Number(id), ...data};
    return heroList;
}

exports.delete = (id) => {
    const index = heroList.findIndex(hero => hero.id === id);
    if (index === -1) return false;
    heroList.splice(index, 1);
    return true;
}