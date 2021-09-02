const BASE_URL = process.env.GORIVA_API_BASE_URL || 'https://goriva.si/api'
const ITEMS_PER_PAGE = process.env.GORIVA_API_ITEMS_PER_PAGE || 25

export {
    BASE_URL,
    ITEMS_PER_PAGE
}
