const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    { 
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },  
    { 
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

//  FOR OF 
// function getCharacters(titles){
//     for (let i of titles){
//         console.log(i)
//     }
// }
// getCharacters(characters)


// FOR EACH
characters.forEach(function(character){
    // console.log(character)
    character.powers.forEach(function(power){
        console.log(power)
    })
})
