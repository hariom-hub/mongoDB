const mongoose = require('mongoose');

main()
.then((result)=>{

    console.log("connection is successful");
}).catch((err)=>{

    console.log(err);
})

async function main(){

    await mongoose.connect('mongodb://localhost:27017'); 
}
