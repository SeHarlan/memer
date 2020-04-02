const chance = require('chance').Chance();
const Meme = require('../lib/models/Meme');

module.exports = async() => {

  const memes = await Meme.create([...Array(50)].map(() => ({
    top: chance.animal(),
    image: chance.url(),
    bottom: chance.profession()
  })));
};
