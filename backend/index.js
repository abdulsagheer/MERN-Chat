const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

dotenv.config();

const port = process.env.PORT || 5000; // or use process.env.PORT if you have it set up in your .env file

dbConnect();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: process.env.CLIENT_URL,
	})
);
app.get("/", (req, res) => {
	res.send("Hello, world!");
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
