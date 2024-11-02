

const express = require("express");
const mongoose = require("mongoose");
const financialRecordRouter = require("./routes/financemanagementroutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


const mongoURI = "mongodb+srv://mohammadali13703:XswMDg1C8Xmngldv@personalfinancemanageme.ujsxg.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
