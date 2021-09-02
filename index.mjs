import {fuelCodeList} from "./src/api/fuel.mjs";
import {franchiseCodeList} from "./src/api/franchise.mjs";
import {getPrices} from "./src/api/prices.mjs";
import {getFilename} from "./src/util.mjs";
import fs from 'fs';

const [fuelCodes, franchiseCodes, prices] = await Promise.all([
    fuelCodeList(),
    franchiseCodeList(),
    getPrices(),
])

const data = {
    fuelCodeList: fuelCodes,
    franchiseCodeList: franchiseCodes,
    prices
}

fs.writeFile(`./data/${getFilename()}`, JSON.stringify(data), (err) => {
    if (err) {
        throw err;
    }

    console.log("data saved");
});
