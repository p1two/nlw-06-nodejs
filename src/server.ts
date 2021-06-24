import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import "./database";
import { ApplicationError } from "@utils/errors";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof ApplicationError) {
      return response.status(err.statusCode).json({
        statusCode: err.statusCode,
        name: err.name,
        message: err.message,
      });
    }

    return response.status(500).json({
      statusCode: 500,
      name: "InternalServerError",
      message: "Internal Server Error",
    });
  }
);

app.listen(3000, () => console.log("Server is running"));
