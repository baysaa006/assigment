import { join } from 'path';
import { createConnection, ConnectionOptions } from 'typeorm';
import { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DATABASE } from '@config';

export const dbConnection = async () => {
  const dbConfig: ConnectionOptions = {
    type: 'postgres',
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST,
    port: +POSTGRES_PORT,
    database: POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
    cli: {
      entitiesDir: 'src/entities',
    },
  };

  await createConnection(dbConfig);
};
