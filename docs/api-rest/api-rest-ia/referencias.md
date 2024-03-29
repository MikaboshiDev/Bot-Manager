---
description: >-
  Esta página le ayudará a comprender cómo utilizar la API Rest. Recomendamos
  encarecidamente leer esto antes de comenzar a utilizar la API.
---

# Referencias

## Rate Limits

La API tiene un límite de velocidad de 1 solicitud por segundo. Si supera este límite, recibirá una respuesta 429. Puede utilizar el encabezado `Retry-After` y `X-RateLimit-Reset` para determinar cuánto tiempo esperar antes de volver a intentarlo.

Si excedes el límite de velocidad 10 veces en la misma hora, quedarás bloqueado durante una hora.

## Autentificación

La api requiere de una autentificación regular en gran parte de las solicitudes, aquellas que no lo necesiten se especificarán dentro de las mismas.

Una vez que tengas tu token de autorización debes configurarlo de la siguiente manera (1hr)

```
Authorization: Bearer <token>
```

## Búsquedas

{% hint style="warning" %}
Se sigue trabajando en esta sección hasta el momento de su ultima modificación dentro de la documentación y el proyecto
{% endhint %}

## Respuesta

La API siempre devolverá un objeto JSON. La respuesta tendrá la siguiente estructura:

```json
{
 "status": Boolean,
 "message": String,
 "data": Object
}
```

## Errors

Si se produce un error, la API devolverá un objeto JSON con la siguiente estructura dependiendo del tipo de error:

### Validación

```json
{
  "errors": [
    {
      "location": "query",
      "msg": "Invalid value",
      "path": "person",
      "type": "field"
    }
  ]
}
```

### Comunes

```json
{
 "status": Boolean,
 "message": String,
 "data": Object
}
```

## EndPoints

Aun que existe una documentación de estos mismos dentro de la Api aquí te explicare cuales son públicos y cuales requieren de un token de acceso o rol de desarrollador dentro de el perfil.

```
http://www.night-support.xyz/api/v1/
```

### Públicos

#### `GET /aplications`

<details>

<summary>Obtén las aplicaciones hasta la actualidad registradas en la base de datos</summary>

* `200`: Aplicaciones dentro de la base de datos

```json
{
 status: true,
 message: "Aplications found in the database",
 elements: 10,
 data: [
  {
   "_id": {
     "$oid": "65eb67e0c7eaf6bf7153cb67"
   },
   "name": "API Manager",
   "id": "1210159566180978688",
   "description": "Soy un bot de discord llamado API Manager y estoy registrado en MultiBotHub",
   "licence": "MIT",
   "avatarURL": "https://cdn.discordapp.com/attachments/1209282955998920755/1221169100177539194/background.jpg?ex=66119959&is=65ff2459&hm=215279dc8505e3193226d8f6e9e2fbd0598b2e967e7594d715ab6731162ee6b8&",
   "ownerId": "679560282929889331",
   "guilds": [
     {}
   ],
   "supportServer": "",
   "emailContact": "",
   "createdAt": {
     "$date": "2024-03-08T19:32:48.272Z"
   },
   "updatedAt": {
     "$date": "2024-03-09T03:59:25.028Z"
   }
  }
 ]
}
```

</details>

#### `GET /aplications/:id`

<details>

<summary>Obtén los datos de la aplicación por medio de su ID</summary>

* `200`: Aplicacion dentro de la base de datos

```json
{
 status: true,
 message: "Aplication found in the database",
 data: {
  {
  "_id": {
    "$oid": "65eb67e0c7eaf6bf7153cb67"
  },
  "name": "API Manager",
  "id": "1210159566180978688",
  "description": "Soy un bot de discord llamado API Manager y estoy registrado en MultiBotHub",
  "licence": "MIT",
  "avatarURL": "https://cdn.discordapp.com/attachments/1209282955998920755/1221169100177539194/background.jpg?ex=66119959&is=65ff2459&hm=215279dc8505e3193226d8f6e9e2fbd0598b2e967e7594d715ab6731162ee6b8&",
  "ownerId": "679560282929889331",
  "guilds": [
    {}
  ],
  "supportServer": "",
  "emailContact": "",
  "createdAt": {
    "$date": "2024-03-08T19:32:48.272Z"
  },
  "updatedAt": {
    "$date": "2024-03-09T03:59:25.028Z"
  }
 }
 }
}
```

</details>

#### `POST /aplications/register/:id`

<details>

<summary>Aplicacion creada exitosamente</summary>

* `200`: La aplicación se creo de manera exitosa

```json
{
 status: true,
 message: "Aplication create successfully",
 data: {
    {
  "_id": {
    "$oid": "65eb67e0c7eaf6bf7153cb67"
  },
  "name": "API Manager",
  "id": "1210159566180978688",
  "description": "Soy un bot de discord llamado API Manager y estoy registrado en MultiBotHub",
  "licence": "MIT",
  "avatarURL": "https://cdn.discordapp.com/attachments/1209282955998920755/1221169100177539194/background.jpg?ex=66119959&is=65ff2459&hm=215279dc8505e3193226d8f6e9e2fbd0598b2e967e7594d715ab6731162ee6b8&",
  "ownerId": "679560282929889331",
  "guilds": [
    {}
  ],
  "supportServer": "",
  "emailContact": "",
  "createdAt": {
    "$date": "2024-03-08T19:32:48.272Z"
  },
  "updatedAt": {
    "$date": "2024-03-09T03:59:25.028Z"
  }
 }
 }
}
```

</details>

#### `GET /products`

<details>

<summary>Lista de productos guardados dentro de la base de datos</summary>

* `200`: Productos obtenidos dentro de la lista

```json
{
 status: true,
 message: "Products retrieved successfully",
 elements: 10,
 data: [
  {
  "_id": {
    "$oid": "65dd78a38447ac9adbea59e9"
  },
  "name": "Product 1",
  "id": "f67a203a-2855-4d3b-bd70-4433b8834f5a",
  "description": "Product 1 description here",
  "price": 100,
  "downloadLink": "http://www.example.com/download-link",
  "category": "Category 1",
  "supportEnabled": false,
  "createdAt": {
    "$date": "2024-02-27T05:52:35.716Z"
  },
  "updatedAt": {
    "$date": "2024-02-27T05:52:35.716Z"
  },
  "imageURL": "https://cdn.discordapp.com/attachments/1209282955998920755/1219163586879033474/imagenes-de-animes-para-fondos11-e1662485577778.jpg?ex=660a4d92&is=65f7d892&hm=14b8911764270b7e7136fa1192d3dcacb11964ad92575500759214136319bda9&"
}
 ]
}
```

</details>

#### `GET /products/:id`

<details>

<summary>Información del producto mediante de la ID</summary>

* `200`: Producto obtenido por medio de su id

```json
{
 status: true,
 message: "Product found in the database",
 data: {
  {
  "_id": {
    "$oid": "65dd78a38447ac9adbea59e9"
  },
  "name": "Product 1",
  "id": "f67a203a-2855-4d3b-bd70-4433b8834f5a",
  "description": "Product 1 description here",
  "price": 100,
  "downloadLink": "http://www.example.com/download-link",
  "category": "Category 1",
  "supportEnabled": false,
  "createdAt": {
    "$date": "2024-02-27T05:52:35.716Z"
  },
  "updatedAt": {
    "$date": "2024-02-27T05:52:35.716Z"
  },
  "imageURL": "https://cdn.discordapp.com/attachments/1209282955998920755/1219163586879033474/imagenes-de-animes-para-fondos11-e1662485577778.jpg?ex=660a4d92&is=65f7d892&hm=14b8911764270b7e7136fa1192d3dcacb11964ad92575500759214136319bda9&"
}
 }
}
```

</details>

### Privados

{% hint style="warning" %}
En construcción `Marzo 28, 2024` puedes visitar el siguiente link [Doc EndPoints](broken-reference)
{% endhint %}
