import { comparePassword, generateToken, hashPassword } from "@/modules/auth";
import prisma from "@/modules/db";

export const newUser = async (req: any, res: any) => {
    const { name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    const token = generateToken(user);
    res.status(200).json({ token });
};

export const login = async (req: any, res: any) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        res.status(404).json({ message: "user not found" });
        return;
    }

    const valid = await comparePassword(password, user.password);
    if (!valid) {
        res.status(401).json({ message: "invalid password" });
        return;
    }

    const token = generateToken(user);
    res.status(200).json({ token });
};

     