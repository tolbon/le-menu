const fs = require('node:fs/promises');
const { argv } = require('node:process');

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        const unordered = JSON.parse(data)
        const filtered = Object.keys(unordered).filter((value) => {            
            if (value.startsWith('en', 0) === false) {
                return false
            }

            return true
        });

        const mapRet = []
        const ordered = filtered.forEach((value) => {
            console.log(unordered[value].name?.['fr'] ?? unordered[value].name?.['en'] ?? value, 
            'Allergen', unordered[value].allergens, 
            'Vegan', unordered[value].vegan, 
            'Veggie', unordered[value].vegetarian);
            
            mapRet.push(unordered[value]);

            Object.values(unordered[value].children ?? {}).forEach((value2) => {
                if (!unordered[value2]) {
                    return;
                }
                console.log('\t', unordered[value2].name?.['fr'] ?? unordered[value2].name?.['en'] ?? value, 
                'Allergen', unordered[value2].allergens ?? unordered[value].allergens, 
                'Vegan', unordered[value2].vegan ?? unordered[value].vegan, 
                'Veggie', unordered[value2].vegetarian ?? unordered[value].vegetarian)
    
                mapRet.push(unordered[value2])
            });
        });




        await fs.writeFile(filePath + 'filtered', JSON.stringify(mapRet));
    } catch (err) {
        console.log(err);
    }
}


readFile(argv[2])