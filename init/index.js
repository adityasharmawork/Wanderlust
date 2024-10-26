const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

main().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner : "671368d1969b15db4370b8ad"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();