import fetch from "node-fetch";
import {range} from "../util.mjs";
import {BASE_URL, ITEMS_PER_PAGE} from "./config.mjs";

const url = (page = 1, city = 'ljubljana',) => `${BASE_URL}/v1/search/?position=${city}&radius=&franchise=&name=&page=${page}`

const getPagesCount = async () => {
    const response = await fetch(url());

    if (response.status !== 200) {
        throw new Error("could not fetch data from goriva.si")
    }

    const data = await response.json();

    if (!data.count) {
        throw new Error("received malformed response from goriva.si")
    }

    return Math.ceil(data.count / ITEMS_PER_PAGE)
}

const getPrices = async () => {
    const pages = range(1, await getPagesCount())
    const urls = pages.map(page => url(page))

    const resultsArray = await Promise.all(
        urls.map(async (url) => {
            const response = await fetch(url)
            const data = await response.json()

            return data?.results
        })
    )

    return resultsArray.flat();
}

export {
    getPrices
}
