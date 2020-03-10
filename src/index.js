import express from "express";
import cors from "cors";
import mongoose from "mongoose";
mongoose.set("useCreateIndex", true);
import routes from "./routes";
const app = express();

mongoose.connect(
  "mongodb+srv://andre:wasd123@cluster0-6ypzj.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
