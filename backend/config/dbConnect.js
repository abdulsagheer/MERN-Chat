// Importing Libraries
const mongoose = require("mongoose");

/**  Function to connect to MongoDB */
const dbConnect = async () => {
	try {
		mongoose.set("strictQuery", true);
		await mongoose.connect(process.env.MONGO_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log("Successfully Connected to mongoose ✅");
	} catch (error) {
		console.log(`❌ Error: ${error.message}`);
	}
};

module.exports = dbConnect;
