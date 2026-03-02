import crypto from "crypto";

// simple in-memory session store; in production, use redis or database
const sessions = new Map();

export function createSession(userId) {
  const token = crypto.randomUUID();
  sessions.set(token, { userId, createdAt: Date.now() });
  return token;
}

export function getSession(token) {
  if (!token) return undefined;
  return sessions.get(token);
}

export function deleteSession(token) {
  return sessions.delete(token);
}
