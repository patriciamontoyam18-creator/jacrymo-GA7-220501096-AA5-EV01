# Diseño del servicio web - GA7-220501096-AA5-EV01

## Objetivo
Construir un servicio web REST para registrar usuarios y validar sus credenciales.

## Flujo
1. El cliente envía usuario y contraseña al registro.
2. La API valida los datos y verifica si el usuario existe.
3. La contraseña se almacena mediante un hash.
4. El cliente envía usuario y contraseña al inicio de sesión.
5. La API compara las credenciales.
6. Si son correctas, devuelve **Autenticación satisfactoria**.
7. Si son incorrectas, devuelve **Error en la autenticación**.

## Endpoints

| Método | Endpoint | Función |
|---|---|---|
| GET | `/api/health` | Verificar disponibilidad |
| POST | `/api/auth/register` | Registrar usuario |
| POST | `/api/auth/login` | Autenticar usuario |

## Códigos HTTP
- 200: autenticación satisfactoria.
- 201: usuario registrado.
- 400: datos incompletos.
- 401: error de autenticación.
- 409: usuario ya registrado.
- 500: error interno.
