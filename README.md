# JACRYMO - Servicio Web de Autenticación

**Evidencia:** GA7-220501096-AA5-EV01  
**Tecnología:** Node.js + Express

## Objetivo
Servicio web REST para registro e inicio de sesión.

## Endpoints
- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`

## Ejemplo de registro o login
```json
{"username":"monica","password":"123456"}
```

Respuesta correcta:
```json
{"success":true,"message":"Autenticación satisfactoria"}
```

Respuesta incorrecta:
```json
{"success":false,"message":"Error en la autenticación"}
```

## Instalación
```bash
npm install
npm start
```

Servidor: `http://localhost:3000`

El proyecto está preparado para versionamiento con Git y publicación en GitHub.
