const range = (start, end, length = end - start + 1) =>
    Array.from({length}, (_, i) => start + i)

const getFilename = () => {
    return `${new Date().toISOString()}.json`
}

export {
    range,
    getFilename
}
