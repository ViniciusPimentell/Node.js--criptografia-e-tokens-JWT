import { generateKeyPairSync } from "crypto";

const { privateKey, publicKey } =
    generateKeyPairSync("rsa", {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    })

console.log(publicKey);
console.log(privateKey);

import { publicEncrypt, privateDecrypt } from "crypto"

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Senha ultrasecreta")
)

console.log(dadosCriptografados.toString("hex"))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TRASMISSÃO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const decifrarDados = privateDecrypt(
    privateKey,
    dadosCriptografados
)
console.log(`DECIFRADO: ${decifrarDados.toString("utf-8")}`)