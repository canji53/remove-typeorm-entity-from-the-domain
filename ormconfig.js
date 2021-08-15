const { DB_URL, DB_LOGGING, DB_MIGRATION, NODE_ENV } = process.env

const isDbMigration = DB_MIGRATION === 'true'
const canRunTypescript = NODE_ENV === 'test' || isDbMigration

module.exports = {
  type: 'postgres',
  url: DB_URL,
  // 開発とテスト環境はts-nodeを使うことで、typescriptが実行可能です。
  // 本番環境はトランスパイルされたjsを実行します。
  entities: canRunTypescript
    ? ['src/infrastructure/orm/typeorm/entity/**/*.ts']
    : ['dist/infrastructure/orm/typeorm/entity/**/*.js'],
  synchronize: false,
  extra: {
    ssl:
      NODE_ENV === 'production' || NODE_ENV === 'staging'
        ? {
            rejectUnauthorized: false,
          }
        : false,
  },
  logging: DB_LOGGING === 'true',
}
