import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { connectDB } from "./src/db/db.config.js";
import { createServer } from "http";
import multer from "multer";
dotenv.config({ path: "./.env" });

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

app.use(express.json());

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
import userRoute from "./src/routers/user.router.js";
import loginRoute from "./src/routers/login.router.js";

app.use("/api/v1/user", userRoute);
app.use("/api/v1/login", loginRoute);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start the Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
