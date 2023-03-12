
const getAll = async (req, res) => {
    await res.send('Hello World From Controller')
}

module.exports = {
    getAll,
}