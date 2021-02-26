import {createConnection} from "typeorm";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mongodb',
      url: 'mongodb+srv://olson:1981@cluster0.fhagr.mongodb.net/accounts?retryWrites=true&w=majority',
      logging: true,
      synchronize: true,
      ssl: true,
      useUnifiedTopology: true,
      entities: ['dist/domain/entity/*.js']
    })
  }
]