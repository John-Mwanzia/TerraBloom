import jwt from 'jsonwebtoken'

export const generateToken = (user:any) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET
  );

  return token;
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
     const payload = jwt.verify(token, process.env.JWT_SECRET as String)
     req.user = payload
     next();
  } catch (error) {
    console.log(error);
    res.status(401).json({message: "not authorized"})
    
  }
};
