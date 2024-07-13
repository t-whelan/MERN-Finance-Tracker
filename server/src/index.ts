//8eZmIdGuLbvyOdnO
//whelantionne

import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
const mongoURI: string =
  "mongodb+srv://whelantionne:8eZmIdGuLbvyOdnO@personalfinancetracker.wa3fkwt.mongodb.net/?retryWrites=true&w=majority&appName=PersonalFinanceTracker";

mongoose
  .connect(mongoURI)
  .then(() => console.log("connected to Database"))
  .catch((err) => console.error("error connecting to database", err));

app.use("/financial-records", financialRecordRouter);

//checks port connection
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
