import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const generateToken = (user:any) => {
  console.log( process.env.NEXT_JWT_SECRET);
  
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    process.env.NEXT_JWT_SECRET as string,
    {
      expiresIn: "30d",
    }
  );
};

export const comparePassword = (password:string, hash:string) => {
  return bcrypt.compare(password, hash);  // return true or false after comparing
};

export const hashPassword = (password:string) => {
  return bcrypt.hash(password, 10);
};

export const protect = (req:any, res:any, next:any) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401).json({ message: "not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401).json({ message: "invalid token" });
  }

  try {                               
     const payload = jwt.verify(token, process.env.NEXT_JWT_SECRET as string)
     req.user = payload
     next();
  } catch (error) {
    console.log(error);
    res.status(401).json({message: "not authorized"})
    
  }
};
