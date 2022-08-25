import nodemailer from "nodemailer";

export const emailRegistro = async datos => {
    
    const { email, nombre, token } = datos;

    // Documentación y dependencias: https://nodemailer.com/ y https://mailtrap.io/
    const transport = nodemailer.createTransport({
        // host: "smtp.mailtrap.io",
        // port: 2525,
        // auth: {
        //   user: "26e52b71c824dc",
        //   pass: "0075225c581dc2"
        // }
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
    });

    // Información del Email
    await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject:"UpTask - Confirma tu cuenta",
        text: "Confirma tu cuenta en UpTask",
        html:`<p>Hola: ${nombre}, comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta ya está casi lista, sólo debes comprobarla en el siguiente enlace:</p>
    
        <a href="${process.env.FRONTED_URL}/confirmar/${token}">Comprobar Cuenta</a>

        <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje</p>`,
    });
};

export const emailOlvidePassword = async datos => {
    
    const { email, nombre, token } = datos;

    // Documentación y dependencias: https://nodemailer.com/ y https://mailtrap.io/
    // TODO: Marcar comentarios importantes con extensión Better Comments
    const transport = nodemailer.createTransport({
        // host: "smtp.mailtrap.io",
        // port: 2525,
        // auth: {
        //   user: "26e52b71c824dc",
        //   pass: "0075225c581dc2"
        // }
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
    });

    // Información del Email
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject:"UpTask - Reestablece tu Password",
        text: "Reestablece tu Password",
        html:`<p>Hola: ${nombre}, has solicitado reestablecer tu password</p>
        <p>Sigue el siguiente enlace para generar un nuevo password:</p>
    
        <a href="${process.env.FRONTED_URL}/olvide-password/${token}">Reestablecer Password</a>

        <p>Si tú no solicitaste este email, puedes ignorar el mensaje</p>`,
    });
};