import {generateKeyPairSync, createSign, createVerify} from "crypto";

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

let dados = "Essa String vai ser assinada"

const assinador = createSign("rsa-sha256")

assinador.update(dados)

const assinatura = assinador.sign(privateKey, "hex")

console.log(`Assinatura: ${assinatura}`) 

//Intermediário

// dados += "Arquivo alterado"

//Envia: documento <-------------------------> Recebe: documento, assinatura e chave pública


const verificador = createVerify("rsa-sha256")
verificador.update(dados)

const ehVerificado = verificador.verify(publicKey, assinatura, "hex")

console.log(ehVerificado)