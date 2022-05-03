const mongoose = require('mongoose');


const db = mongoose.connection;
const dbUrl = process.env.MONGO_URL;

mongoose
	.connect(dbUrl)
	.then(() => 
		console.log(`MongoDB successfully connected at ${db.host}:${db.port}! 
		How dope!`))
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));


