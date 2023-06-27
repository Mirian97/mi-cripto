# 💸 MiCripto

MiCripto es una aplicación que ofrece funciones relacionadas con criptomonedas, permitiendo a los usuarios acceder a información sobre monedas, autenticarse, registrarse y actualizar su perfil.

## Servidor

1. Clona este repositorio en tu máquina local.
1. Accede a la carpeta del servidor utilizando el comando cd server en la terminal.
1. Instala las dependencias de la aplicación ejecutando el comando npm install.
1. Crea un archivo llamado .env en la raíz de la carpeta del server.
1. Copia el siguiente código y pégalo en el archivo .env:

```plaintext
PORT=8000
DB_HOST="silly.db.elephantsql.com"
DB_PORT=5432
DB_USER="aublntyn"
DB_PASSWORD="JGE2qHDjHEp4vGGpah7RlLNgxmxsdfWc"
DB_DATABASE="aublntyn"
JWT_PASSWORD="Uma senha segura"
BACKBLAZE_ENDPOINT="s3.us-west-004.backblazeb2.com"
BACKBLAZE_KEY_ID="004ff0098320ddb0000000002"
BACKBLAZE_APP_KEY="K004P5v7+pMU6WPENE42GxXj9rIkp0s"
BACKBLAZE_APP_NAME="mi-cripto"
COINRANKING_API_URL="https://coinranking1.p.rapidapi.com"
COINRANKING_API_KEY="3e3e85b591mshd5fa0c044c3a42ap14d50ejsnca8676de7f29"
COINRANKING_API_HOST="coinranking1.p.rapidapi.com"
COINRANKING_REF_CURRENCY="yhjMzLPhuIDl"
```

Estas son todas las variables de entorno utilizadas en el servidor. Completa cada valor con la configuración adecuada.

1. En la terminal, ejecuta el comando npm run dev dentro de la carpeta server para iniciar el servidor.
1. Ahora estás listo para usar esta API a través de la URL: http://localhost:8000.

**Nota:** También puedes acceder a esta API a través del despliegue realizado en Vercel, utilizando la siguiente URL: https://mi-cripto.vercel.app/. En este caso, todas las variables de entorno necesarias ya están configuradas para que la aplicación funcione correctamente.

## Rutas de la API

### Registro de usuario

**POST /user:** Ruta para registrar nuevos usuarios.

- Parámetros obligatorios:
  - name: Nombre del usuario.
  - email: E-mail del usuario.
  - password: Contraseña del usuario.

### Login

**POST /login:** Ruta para autenticación de usuarios.

- Parámetros obligatorios:
  - email: E-mail del usuario.
  - password: Contraseña del usuario.

**Nota:** Las rutas a continuación requieren autenticación en el encabezado de la solicitud con el token generado durante el login.

### Perfil del usuario

**GET /user:** Ruta para obtener el perfil del usuario autenticado.

### Actualizar usuario

**PUT /user:** Ruta para actualizar la información del perfil del usuario.

- Parámetros obligatorios:
  - name: Nombre del usuario.
  - email: E-mail del usuario.
  - password: Contraseña del usuario.
- Parámetros opcionales:
  - description: Descripción del usuario.
  - avatar: Imagen del usuario

### Listagem de Criptomoedas

**GET /crypto?name= :** Ruta para obtener una lista de criptomonedas.

- Parámetro `name` opcional para filtrar la lista por nombre de criptomoneda.

## Tecnologías utilizadas

- Javascript
- Node.js
- Express.js
- Cors
- Knex
- Postgres
- Bcrypt
- Jsonwebtoken
- Joi
- Multer
- AWS SDK
- Axios
- Dotenv
