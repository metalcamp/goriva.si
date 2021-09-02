import fetch from "node-fetch";
import {BASE_URL} from "./config.mjs";

const franchiseCodeList = async () => {
    const response = await fetch(`${BASE_URL}/v1/franchise`);

    if (response.status !== 200) {
        throw new Error("could not fetch data from goriva.si")
    }

    return response.json();
}

export {
    franchiseCodeList
}
