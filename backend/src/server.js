import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

/// middle ware
app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json()); //pasre json bodies
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is runnign on port: ", PORT);
  });
});
