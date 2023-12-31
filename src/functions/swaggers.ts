import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Api Manager - Night',
    description: [
      `Hello, I am a rest api configured to control users, products, states and previous generation of registered links, currently my developer is Hanzel 悟 we are in version 0.0.1 but we will be updating`,
      'Visita los siguientes links del creador:',
      '- [The Github Respository](https://github.com/MikaboshiDev)',
      '- [Discord Server Support](http://www.night-support.xyz/)',
      '- [Documentation](https://docs.night-support.xyz/)',
    ].join('\n'),
    termsOfService: 'http://www.night-support.xyz/',
    contact: {
      email: 'kanjigostudio@gmail.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
    version: '0.0.1',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'local host personal development api',
    },
    {
      url: 'https://api.night-support.xyz',
      description: 'server production api',
    },
    {
      url: 'https://api.night-support.cloud',
      description: 'server production api private manager',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
      api_key: {
        type: 'apiKey',
        name: 'api_key',
        in: 'header',
      },
    },
    schemas: {
      api_register: {
        type: 'object',
        required: ['username', 'userid', 'email', 'products', 'warnings', 'banned', 'data_guild'],
        properties: {
          username: { type: 'string', example: 'manhwas_web' },
          userid: { type: 'number', example: 123456789 },
          email: { type: 'string', example: 'example@gmail.com' },
          products: { type: 'array', example: ['product1', 'product2'] },
          warnings: { type: 'number', example: 0 },
          banned: { type: 'boolean', example: false },
          data_guild: { type: 'array', example: ['data1', 'data2'] },
        },
      },
      api_auth: {
        type: 'object',
        required: ['name', 'password', 'email'],
        properties: {
          name: { type: 'string', example: 'manhwas_web' },
          password: { type: 'string', example: '123456789' },
          email: { type: 'string', example: 'example@gamil.com' },
          timestamp: {
            type: 'string',
            example: '2021-08-01T00:00:00.000Z',
          },
          versionKey: { type: 'boolean', example: false },
        },
      },
      api_upload: {
        type: 'object',
        required: ['fileName', 'idUser', 'path'],
        properties: {
          fileName: { type: 'string', example: 'example.png' },
          idUser: { type: 'string', example: '123456789' },
          path: {
            type: 'string',
            example: 'https://example.com/example.png',
          },
          timestamp: {
            type: 'string',
            example: '2021-08-01T00:00:00.000Z',
          },
          versionKey: { type: 'boolean', example: false },
        },
      },
      api_product: {
        type: 'object',
        required: ['name', 'id', 'price', 'description', 'image', 'category', 'quantity', 'date'],
        properties: {
          name: { type: 'string', example: 'bot_discord' },
          id: { type: 'number', example: 123456789 },
          price: { type: 'number', example: 100 },
          description: {
            type: 'string',
            example: 'example the bot discord app',
          },
          image: {
            type: 'string',
            example: 'https://example.com/example.png',
          },
          category: { type: 'string', example: 'discord' },
          quantity: { type: 'number', example: 1 },
          date: { type: 'string', example: '2021-08-01T00:00:00.000Z' },
        },
      },
      api_message: {
        type: 'object',
        required: ['username', 'userid', 'userimage', 'message', 'messageid'],
        properties: {
          username: { type: 'string', example: 'manhwas_web' },
          userid: { type: 'number', example: 123456789 },
          userimage: {
            type: 'string',
            example: 'https://example.com/example.png',
          },
          message: {
            type: 'string',
            example: 'example the bot discord app in the server discord where the bot is in terminal console',
          },
          messageid: { type: 'string', example: '123456789' },
        },
      },
      api_recommend_product: {
        type: 'object',
        required: ['name', 'description', 'image', 'category', 'user'],
        properties: {
          name: { type: 'string', example: 'bot_discord' },
          description: {
            type: 'string',
            example: 'example the bot discord app',
          },
          image: {
            type: 'string',
            example: 'https://example.com/example.png',
          },
          category: { type: 'string', example: 'discord' },
          user: { type: 'string', example: 'manhwas_web' },
        },
      },
    },
  },
  securitySchemes: {
    night_auth: {
      type: 'oauth2',
      flows: {
        implacit: {
          authorizationUrl: 'https://discord.com/api/oauth2/authorize',
          scopes: {
            identify: 'identify',
            guilds: 'guilds',
          },
        },
      },
    },
    night_api: {
      type: 'apiKey',
      flows: {
        implacit: {
          authorizationUrl: 'https://discord.com/api/oauth2/authorize',
          scopes: {
            identify: 'identify',
            guilds: 'guilds',
            token: 'token',
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./server/routes/*.ts'],
};

export default swaggerJSDoc(swaggerOptions);
