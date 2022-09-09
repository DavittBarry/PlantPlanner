

// const Kasvi = new Plant({
//     plant_name: 'Ruusu',
// })

// Function to save plant to DB
async function save_to_DB(name) {
    await name.save(function (err) {
        if(err) return console.log(err)
        console.log(`${name.plant_name} added`)
    })
}

module.exports = save_to_DB()

// saveToDB(Kasvi)