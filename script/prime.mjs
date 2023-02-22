// An import assertion in a static import
import { exit } from 'process';
import { first } from 'rxjs';
import ingredients from './ingredients.json' assert { type: 'json' };
import allergens from './allergens.json' assert { type: 'json' };


const lang = 'fr'
const i18nAllergen = []
for (const allergen in allergens) {
    i18nAllergen.push({
        key: allergen,
        trad: allergens[allergen].name[lang]
    })
}
i18nAllergen.sort((a, b) => {
    console.log(a.trad, b.trad)
    return a.trad.localeCompare(b.trad) 
})

console.log(i18nAllergen)


const firstClass = []
const secondClass = []
for (const ingredient in ingredients) {
    const ingOBJ = ingredients[ingredient]

    if (!ingredients[ingredient].parents) {
        if (!ingOBJ.e_number) {
            firstClass.push(ingredient)
            secondClass.push(ingredient.children)
            console.log(ingOBJ)
            exit(0)
        }
    }
}

console.log(firstClass.length, firstClass)