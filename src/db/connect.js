const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex : true
    })
    .then(() => {
        console.log("connection sucsussfull");
    })
    .catch((e) => {
        console.log(e);
    })