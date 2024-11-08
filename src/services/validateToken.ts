import { NextRequest } from "next/server";

const AUTH_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

export function validateToken(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || authHeader !== `Bearer ${AUTH_KEY}`) {
    return false;
  }

  return true;
}
