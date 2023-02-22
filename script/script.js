const fs = require('node:fs/promises');
const { argv } = require('node:process');

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        const unordered = JSON.parse(data)
        const ordered = Object.keys(unordered).sort().reduce(sortObj.bind(unordered), {});

        await fs.writeFile(filePath + 'ordered', JSON.stringify(ordered));
    } catch (err) {
        console.log(err);
    }
}

function sortObj(obj, key) {
    if (this[key] instanceof Object) {
        const ordered = Object.keys(this[key]).sort().reduce(sortObj.bind(this[key]), {});
        obj[key] = ordered
    } else {
        obj[key] = this[key];
    }

    return obj;
}

readFile(argv[2])