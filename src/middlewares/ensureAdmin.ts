import { Unauthorized } from "@utils/errors";
import { NextFunction, Request, Response } from "express";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const admin = true;

  if (admin) {
    return next();
  }

  throw new Unauthorized("User not admin");
}
