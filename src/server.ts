import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";

import "./database"

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        name: err.name,
        statusCode: 400,
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

app.listen(3000, () => console.log("Server is running"));
