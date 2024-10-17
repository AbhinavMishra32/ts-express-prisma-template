import dotenv from 'dotenv';

dotenv.config();

// if implementing own authentication:
// const JWT_SECRET = process.env.JWT_SECRET;
// const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// if (!JWT_SECRET || !REFRESH_TOKEN_SECRET) {
//     throw new Error("JWT_SECRET or REFRESH_TOKEN_SECRET is not defined");
// }

// export { JWT_SECRET, REFRESH_TOKEN_SECRET };