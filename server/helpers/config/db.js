const mongoose = require('mongoose');

const DB = process.env.LOCAL_MONGODB_SERVER;

const init = () => {
    mongoose
        .connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .catch((err) => {
            console.error(`error${err.stack}`);
        });

    mongoose.connection.on('open', () => {
        console.log('connected to database!');
    });
};

module.exports = init;
