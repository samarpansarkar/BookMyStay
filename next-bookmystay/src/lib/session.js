import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getUserSession() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return null;
    }

    // We decode it here just to read the payload without verifying
    // because middleware already verified the signature.
    const payload = jwt.decode(token);
    return payload;
  } catch (error) {
    return null;
  }
}
