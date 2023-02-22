const allergen = [
    { id: 'Gluten', name: 'Gluten' },
    { id: 'Crustacés', name: 'Crustacés' },
    { id: 'en:eggs', name: 'Oeufs' },
    { id: 'Poissons', name: 'Poissons' },
    { id: 'Arachides', name: 'Arachides' },
    { id: 'Soja', name: 'Soja' },
    { id: 'en:milk', name: 'Lait' },
    { id: 'Fruits a coques', name: 'Fruits a coques' },
    { id: 'Céleri', name: 'Céleri' },
    { id: 'Moutarde', name: 'Moutarde' },
    { id: 'Graines de sésame', name: 'Graines de sésame' },
    { id: 'Sulfites', name: 'Sulfites' },
    { id: 'Lupin', name: 'Lupin' },
    { id: 'Mollusque', name: 'Mollusque' },
]

const diet = [
    { id: 'Diabetic', name: 'Diabetic' },
    { id: 'GlutenFree', name: 'GlutenFree' },
    { id: 'Halal', name: 'Halal' },
    { id: 'Hindu', name: 'Hindu' },
    { id: 'Kosher', name: 'Kosher' },
    { id: 'LowCalorie', name: 'LowCalorie' },
    { id: 'LowFat', name: 'LowFat' },
    { id: 'LowLactose', name: 'LowLactose' },
    { id: 'LowSalt', name: 'LowSalt' },
    { id: 'Pregnant', name: 'Pregnant' },
    { id: 'Vegan', name: 'Vegan' },
    { id: 'Vegetarian', name: 'Vegetarian' },
]

/**
 * PERSONNALISER ?
 */
const ingredients = [
 { id: 'porc', name: 'porc' },
 { id: 'volaille', name: 'volaille' },
 { id: 'boeuf', name: 'boeuf' },
 { id: 'poisson', name: 'poisson' },
 { id: 'Fromage', name: 'Fromage' },
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
                    .map(option => option.value)
    filterAllergen(menu, values)
})
dietMultiSelect.addEventListener('change', (ev) => {
    console.log(dietMultiSelect.selectedOptions)   
})
ingredientsMultiSelect.addEventListener('change', (ev) => {
    console.log(ingredientsMultiSelect.selectedOptions)
})

function filterAllergen(menuObj, values) {
    if (menuObj.hasMenuSection) {
        menuObj.hasMenuSection.forEach((ms) => { 
            filterAllergen(ms, values)
        })
    }

    if (menuObj.menuAddon) {
        menuObj.menuAddon.forEach((ms) => { 
            filterAllergen(ms, values)
        })   
    }

    if (menuObj.hasMenuItem) {
        console.log(menuObj.hasMenuItem, menuObj.hasMenuItem.filter(menuItem => {
            const containAllergen = !(menuItem.allergen ?? []).some((allergen) => {
                console.log('values', allergen, values.includes(allergen))
                return values.includes(allergen)
            })
            console.log('filter', menuItem.name, containAllergen)
            return containAllergen
        }))
    }

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
createMenu(menuDiv, menu)

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

function createMenu(divAddTo, menuObj, level = 2) {
    divAddTo.innerHTML = ''
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
            createMenu(menuSectionDiv, menuSection, level + 1)
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
        p.appendChild(label)
        label.appendChild(select)
        divDialog.appendChild(p)
    })
}



let updateButton = document.getElementById('updateDetails');
/** @type {HTMLDialogElement} */
let favDialog = document.getElementById('favDialog');
/** @type {HTMLFormElement} */
let formDialog = document.getElementById('formDialog');
/** @type {HTMLDivElement} */
let divDialog = document.getElementById('divDialog');

updateButton.addEventListener('click', onOpenFavDialog);

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