import mongoose from "mongoose";

const conectarBD = async () => {

    try {
        const connection = await mongoose.connect(
            `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.2r9dx.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conectado en: ${url}`)
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
        // process.exit(1): va a terminar los procesos en caso de que la app no se pueda conectar a la BD
        // 0 es un código de éxito y 1 un código de error. Normalmente Node termina sus procesos con 0
    }
}

export default conectarBD;