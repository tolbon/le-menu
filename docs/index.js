const allergen = [
    { id: 'en:gluten', name: 'Gluten' },
    { id: 'en:crustaceans', name: 'Crustacés' },
    { id: 'en:eggs', name: 'Oeufs' },
    { id: 'en:fish', name: 'Poissons' },
    { id: 'en:peanuts', name: 'Arachides' },
    { id: 'en:soybeans', name: 'Soja' },
    { id: 'en:milk', name: 'Lait' },
    { id: 'en:nuts', name: 'Fruits a coques' },
    { id: 'en:celery', name: 'Céleri' },
    { id: 'en:mustard', name: 'Moutarde' },
    { id: 'en:sesame-seeds', name: 'Graines de sésame' },
    { id: 'Sulfites', name: 'Sulfites' },
    { id: 'en:lupin', name: 'Lupin' },
    { id: 'en:molluscs', name: 'Mollusque' },
]

const diet = [
    { id: 'en:diabetic', name: 'Diabetique' },
    { id: 'en:glutenFree', name: 'Sans Gluten' },
    { id: 'en:halal', name: 'Halal' },
    { id: 'en:hindu', name: 'Hindu' },
    { id: 'en:kosher', name: 'Kasher' },
    { id: 'en:lowCalorie', name: 'Minimum Calorie' },
    { id: 'en:lowFat', name: 'Minimum Gras' },
    { id: 'en:lowLactose', name: 'Minimum Lactose' },
    { id: 'en:lowSalt', name: 'Minimum Sel' },
    { id: 'en:pregnant', name: 'Enceinte' },
    { id: 'en:vegan', name: 'Vegan' },
    { id: 'en:vegetarian', name: 'Vegetarien' },
]

/**
 * PERSONNALISER ?
 */
const ingredients = [
 { id: 'en:pig', name: 'Porc' },
 { id: 'en:chicken', name: 'Volaille' },
 { id: 'en:beef', name: 'Boeuf' },
 { id: 'en:fish', name: 'Poisson' },
 { id: 'en:cheese', name: 'Fromage' },
]


const menu = {
    name: 'Menu',
    currency: 'EUR',
    hasMenuSection: [
        {
            name: 'Menu',
            hasMenuItem: [
                { 
                    name: 'BestOf',
                    menuAddon: {
                        hasMenuSection: [
                            {
                                name: 'Burger',
                                hasMenuItem: [
                                    {
                                        name: 'BigMacDo',
                                        description: 'LE BIG MAC DE MACDO',
                                        ingredients: ['Bun', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                                        price: 23
                                    },
                                    {
                                        name: 'EggMacMuffin',
                                        description: 'urger avec des oeufs',
                                        ingredients: ['en:eggs', 'eggs', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                                        allergen: ['en:eggs', 'en:milk'],
                                        diet: ['en:eggs', 'eggs', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                                        price: 23
                                    },
                                    {
                                        name: 'Le 280',
                                        description: 'LE BIG MAC DE MACDO',
                                        ingredients: ['Bun', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                                        price: 23
                                    }
                                ]
                            },
                            {
                                name: 'Accompagnements',
                                hasMenuItem: [
                                    {
                                        name: 'Frite',
                                        description: 'Des Frites Quoi',
                                        ingredients: ['en:potatoes'],
                                        price: 23
                                    },
                                    {
                                        name: 'Potatoes',
                                        description: 'Grosse potate',
                                        ingredients: ['en:potatoes'],
                                        price: 23
                                    }
                                ]
                            },
                        ]
                    }
                },
                { 
                    name: 'MaxiBestOf',
                    menuAddon: {
                        hasMenuSection: [
                            {
                                name: 'Burger',
                                hasMenuItem: [
                                    {
                                        name: 'BigMacDo',
                                        description: 'LE BIG MAC DE MACDO',
                                        ingredients: ['Bun', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                                        price: 23
                                    },
                                    {
                                        name: 'Le 280',
                                        description: 'LE BIG MAC DE MACDO',
                                        ingredients: ['Bun', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                                        price: 23
                                    }
                                ]
                            },
                            {
                                name: 'Accompagnements',
                                hasMenuItem: [
                                    {
                                        name: 'Frite',
                                        description: 'LE BIG MAC DE MACDO',
                                        ingredients: ['Bun', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                                        price: 23
                                    },
                                    {
                                        name: 'Potatoes',
                                        description: 'LE BIG MAC DE MACDO',
                                        ingredients: ['Bun', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                                        price: 23
                                    }
                                ]
                            },
                        ]
                    }
                }
            ]
        },
        {
            name: 'Burger',
            hasMenuItem: [
                {
                    name: 'BigMacDo',
                    description: 'le big mac de mac do quoi',
                    ingredients: ['Bun', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions']
                },
                {
                    name: 'EggMacMuffin',
                    description: 'burger avec des oeufs',
                    ingredients: ['en:eggs', 'eggs', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                    allergen: ['en:eggs', 'en:milk'],
                    diet: ['en:eggs', 'eggs', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                    price: 23
                },
            ]
        },
        {
            name: 'A Composer',
            hasMenuItem: [
                {
                    name: 'OTacos taille L',
                    description: '2 Viandes au choix, sauces au choix, frites et notre sauce fromagère unique comprise.',
                    ingredients: [],
                    menuAddon: {
                        hasMenuSection: [
                            {
                                name: 'Choisissez vos 2 viandes!',
                                description: 'Obligatoire',
                                offers: {
                                    eligibleQuantity: 2
                                },
                                hasMenuItem: [
                                    {
                                        name: 'Tenders',
                                        description: '',
                                        allergen: ['en:gluten'],
                                        ingredients: ['en:chicken'],
                                        price: 1.5
                                    },
                                    {
                                        name: 'Poulet',
                                        description: '',
                                        allergen: [],
                                        ingredients: ['en:chicken'],
                                    },
                                ]
                            },
                            {
                                name: 'Choisissez votre Sauce',
                                description: 'Obligatoire',
                                offers: {
                                    eligibleQuantity: 1
                                },
                                hasMenuItem: [
                                    {
                                        name: 'Algerienne',
                                        description: '',
                                        allergen: [],
                                        ingredients: ['en:spicy'],
                                        price: 1.5
                                    },
                                    {
                                        name: 'Barbecue',
                                        description: '',
                                        allergen: [],
                                        ingredients: ['en:beef'],
                                    },
                                    {
                                        name: 'Sans Sauce',
                                        description: '',
                                        allergen: [],
                                        ingredients: ['en:chicken'],
                                    },
                                ]
                            }
                        ]
                    }
                },
                {
                    name: 'EggMacMuffin',
                    description: 'burger avec des oeufs',
                    ingredients: ['en:eggs', 'eggs', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                    allergen: ['en:eggs', 'en:milk'],
                    diet: ['en:eggs', 'eggs', 'Beef', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions'],
                    price: 23
                },
            ]
        },
        {
            name: 'Petite Faim',
            hasMenuItem: [
                {
                    name: 'MacWrap',
                    description: 'un wrap',
                    ingredients: ['Bun', 'en:chicken', 'Lettuce', 'BigMac Sauce', 'American Cheese', 'Pickle', 'Onions']
                },
                {
                    name: 'McFish',
                    description: 'burger avec du poisson',
                    ingredients: ['en:fish', 'en:buns'],
                    allergen: ['en:fish', 'en:milk'],
                    diet: ['en:diabetic', 'en:pregnant', 'en:halal', 'en:kosher'],
                    price: 23
                },
            ]
        }
    ]
}

/** @type {HTMLSelectElement} */
const multiSelectOptGroup = document.getElementById("multiSelectOptGroup");
/** @type {HTMLSelectElement} */
const allergenMultiSelect = document.getElementById("allergenMultiSelect");
/** @type {HTMLSelectElement} */
const dietMultiSelect = document.getElementById("dietMultiSelect");
/** @type {HTMLSelectElement} */
const ingredientsMultiSelect = document.getElementById("ingredientsMultiSelect");
/** @type {HTMLDivElement} */
const allergenDiv = document.getElementById("allergenDiv");
/** @type {HTMLDivElement} */
const dietDiv = document.getElementById("dietDiv");
/** @type {HTMLDivElement} */
const ingredientDiv = document.getElementById("categoryDiv");
/** @type {HTMLDivElement} */
const menuDiv = document.getElementById("menuDiv");

allergenMultiSelect.addEventListener('change', (ev) => {
    const values = Array.from(allergenMultiSelect.selectedOptions)
                    .map(option => option.value);
    filter.allergen = values;
    
    const menu_deepcopy = JSON.parse(JSON.stringify(menu));
    menuDiv.innerHTML = ''
    displayMenu(menuDiv, filterAllergen(menu_deepcopy, filter))
})
dietMultiSelect.addEventListener('change', (ev) => {
    const values = Array.from(dietMultiSelect.selectedOptions)
                    .map(option => option.value);
    filter.diet = values;
    const menu_deepcopy = JSON.parse(JSON.stringify(menu));
    menuDiv.innerHTML = ''
    displayMenu(menuDiv, filterAllergen(menu_deepcopy, filter))
})
ingredientsMultiSelect.addEventListener('change', (ev) => {
    const values = Array.from(ingredientsMultiSelect.selectedOptions)
                    .map(option => option.value);
    filter.ingredients = values;
    const menu_deepcopy = JSON.parse(JSON.stringify(menu));
    menuDiv.innerHTML = ''
    displayMenu(menuDiv, filterAllergen(menu_deepcopy, filter))
})

function filterAllergen(menuObj, values, level = 0) {
    const newLevel = level + 1 
    if (menuObj.hasMenuSection) {
        menuObj.hasMenuSection.forEach((ms) => {
            filterAllergen(ms, values, newLevel)
        })
    }

    if (menuObj.menuAddon) {
        filterAllergen(menuObj.menuAddon, values, newLevel)
    }

    if (menuObj.hasMenuItem) {
        menuObj.hasMenuItem = menuObj.hasMenuItem.filter(menuItem => {
            const containAllergen = (menuItem.allergen ?? []).some((allergen) => {
                return filter.allergen.includes(allergen)
            })
            if (containAllergen) {
                return false
            }
            const containDiet = (menuItem.diet ?? []).some((diet) => {
                return filter.diet.includes(diet)
            })
            if (containDiet) {
                return true
            }
            if (filter.diet.length > 0) {
                return false
            }
            if (filter.ingredients.length === 0) {
                return true
            }
            const needIngredients = (menuItem.ingredients ?? []).some((ingredient) => {
                return filter.ingredients.includes(ingredient)
            })
            return needIngredients
        })

        menuObj.hasMenuItem.forEach((ms) => {
            filterAllergen(ms, values, newLevel)
        })
    }

    return menuObj
}

const filter = {
    allergen: [],
    diet: [],
    ingredients: []
}

createMultiSelectOptGroup(multiSelectOptGroup, 'Allergen', allergen)
createMultiSelectOptGroup(multiSelectOptGroup, 'Diet', diet)
createMultiSelectOptGroup(multiSelectOptGroup, 'Ingredients', ingredients)
createMultiSelect(allergenMultiSelect, allergen)
createMultiSelect(dietMultiSelect, diet)
createMultiSelect(ingredientsMultiSelect, ingredients)
createDivCheckBox(allergenDiv, allergen)
createDivCheckBox(dietDiv, diet)
createDivCheckBox(ingredientDiv, ingredients)

const menu_deepcopy = JSON.parse(JSON.stringify(menu));
displayMenu(menuDiv, filterAllergen(menu_deepcopy, filter))

function createMultiSelectOptGroup(divAddTo, nameOptGroup, objArray) {
    const optGroup = document.createElement("optgroup");
    optGroup.label = nameOptGroup;

    objArray.forEach(obj => {
        const option = document.createElement("option");
        option.value = obj.id
        option.text = obj.name
        optGroup.appendChild(option)
    });

    divAddTo.appendChild(optGroup)
}

function createMultiSelect(divAddTo, objArray) {
    objArray.forEach(obj => {
        /** @type {HTMLOptionElement} */
        const option = document.createElement("option");
        option.value = obj.id
        option.text = obj.name
        divAddTo.appendChild(option)
    });
}

function createDivCheckBox(divAddTo, objArray) {
    objArray.forEach(obj => {
        /** @type {HTMLDivElement} */
        const newDiv = document.createElement("div");
        /** @type {HTMLInputElement} */
        const input = document.createElement("input");
        input.type = 'checkbox'
        input.id = obj.id
        /** @type {HTMLLabelElement} */
        const label = document.createElement("label");
        label.textContent = obj.name
        label.htmlFor = obj.id

        newDiv.appendChild(input)
        newDiv.appendChild(label)
        divAddTo.appendChild(newDiv)
    });
}

function displayMenu(divAddTo, menuObj, level = 2) {
    /** @type {HTMLDivElement} */
    const title = document.createElement(`h${level}`);
    title.textContent = menuObj.name
    const descriptionDiv = document.createElement('small');
    descriptionDiv.textContent = menuObj.description
    
    divAddTo.appendChild(title)

    if (menuObj.hasMenuSection) {
        /** @type {HTMLDivElement} */
        const menuSectionDiv = document.createElement('div');
        menuObj.hasMenuSection.forEach((menuSection) => {
            displayMenu(menuSectionDiv, menuSection, level + 1)
        })
        divAddTo.appendChild(menuSectionDiv)
    }

    if (menuObj.hasMenuItem) {
        /** @type {HTMLDivElement} */
        const menuItemDiv = document.createElement('div');
        menuObj.hasMenuItem.map(createMenuItem).forEach((menuItem) => {
            menuItemDiv.appendChild(menuItem)
        })
        divAddTo.appendChild(menuItemDiv)
    }
}

function createMenuItem(menuObj) {
    /** @type {HTMLDivElement} */
    const newDiv = document.createElement("div");
    
    const titleDiv = document.createElement("div");
    titleDiv.textContent = menuObj.name
    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = menuObj.description
    
    newDiv.appendChild(titleDiv)
    newDiv.appendChild(descriptionDiv)
    
    if (menuObj.price) {
        const priceDiv = document.createElement("div");
        priceDiv.textContent = Intl.NumberFormat('lookup', { style: 'currency', currency: menu.currency }).format(menuObj.price)

        newDiv.appendChild(priceDiv)
    }
    if (menuObj.menuAddon) {
        const buttonDiv = document.createElement("button");
        buttonDiv.textContent = '+'
        buttonDiv.addEventListener('click', () => {
            generateDialog(divDialog, menuObj)
            onOpenFavDialog()
        })

        newDiv.appendChild(buttonDiv)
    }
    return newDiv
}
/**
 * 
 * @param {HTMLDivElement} formDialog 
 * @param {*} menuObj 
 */
function generateDialog(formDialog, menuObj) {
    formDialog.innerHTML = ''
    menuObj.menuAddon.hasMenuSection.forEach((menuSection) => {
        const p = document.createElement("p");
        const maxSelected = menuSection.offers?.eligibleQuantity ?? 1

        if (maxSelected === 1) {
            const label = document.createElement("label");
            const select = document.createElement("select");
            select.name = menuSection.name
            label.textContent = menuSection.name
            menuSection.hasMenuItem.forEach((menuItem, index) => {
                const opt = document.createElement("option");
                opt.value = index
                opt.textContent = menuItem.name
                select.add(opt)
            })
            label.appendChild(select)
            p.appendChild(label)
        } else {
            const label = document.createElement("label");
            const select = document.createElement("div");
            select.name = menuSection.name
            label.textContent = menuSection.name
            menuSection.hasMenuItem.forEach((menuItem, index) => {
                const divMenuItem = document.createElement("div");
                const labelMenuItem = document.createElement("label");
                const opt = document.createElement("input");
                opt.type = 'number';
                opt.value = 0
                labelMenuItem.textContent = menuItem.name
                labelMenuItem.appendChild(opt)
                divMenuItem.appendChild(labelMenuItem)
                select.appendChild(divMenuItem)
            })
            label.appendChild(select)
            p.appendChild(label)
        }
        
        divDialog.appendChild(p)
    })
}

/** @type {HTMLDialogElement} */
let favDialog = document.getElementById('favDialog');
/** @type {HTMLFormElement} */
let formDialog = document.getElementById('formDialog');
/** @type {HTMLDivElement} */
let divDialog = document.getElementById('divDialog');

function onOpenFavDialog() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    console.error("L'API <dialog> n'est pas prise en charge par ce navigateur.");
  }
};


function validForm(event) {
    console.log(event)
}

favDialog.addEventListener('close', onClose)

function onClose() {
    if (favDialog.returnValue !== 'OK') {
        return
    }

    // do stuff with the form values
    const dialogFormData = new FormData(favDialog.querySelector('form'))
    console.info('Dialog form data', Object.fromEntries(dialogFormData.entries()))
}