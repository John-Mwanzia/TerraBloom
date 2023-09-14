import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateToken = (user: any) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin
    },
    process.env.NEXT_JWT_SECRET as string,
    {
      expiresIn: "30d",
    }
  );

  return token;
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash); // return true or false after comparing
};

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const protect = (req: any, res: any, next: any) => {
  const bearer = req.headers.authorization; //get the authorization header from the request
  if (!bearer) {
    res.status(401).json({ message: "not authorized" });
    return;
  }

  const [, token] = bearer.split(" "); //split the bearer token into two parts and get the second part which is the token
  if (!token) {
    res.status(401).json({ message: "invalid token" });
  }

  try {
    const payload = jwt.verify(token, process.env.NEXT_JWT_SECRET as string); //verify the token
    req.user = payload; //set the user to the payload
    next(); //call the next middleware
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "not authorized" });
  }
};
