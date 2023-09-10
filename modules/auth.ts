import jwt from 'jsonwebtoken'

export const generateToken = (user)=>{
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    })

    return token
}


