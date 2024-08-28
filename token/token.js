import jwt from "jsonwebtoken";

const chaveSecreta = "chaveSuperSecreta"

const token = jwt.sign(
    {
        apelido : "kowalski",
        curso: "Segurança e Node.js"
    },chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)