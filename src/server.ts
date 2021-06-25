import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";
import { ApplicationError } from "@utils/errors";

import "./database";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof ApplicationError) {
      return response.status(err.statusCode).json({
        name: err.name,
        statusCode: err.statusCode,
        message: err.message,
      });
    }

    return response.status(500).json({
      name: "InternalServerError",
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
);

app.listen(process.env.PORT, () => console.log("Server is running"));
