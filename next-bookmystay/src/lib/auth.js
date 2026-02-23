import { SignJWT, jwtVerify } from "jose";

const getValidSecret = () => {
  // Next.js development often doesn't have process.env populated on the very first load sometimes in certain edges,
  // so we default to a strong random-looking string if it's missing. Never do this in actual production.
  const secret =
    process.env.JWT_SECRET || "super-secret-key-bookmystay-2024-secure";
  return new TextEncoder().encode(secret);
};

export async function signToken(payload) {
  const secret = getValidSecret();
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret);
}

export async function verifyToken(token) {
  try {
    const secret = getValidSecret();
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}
