module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  // 通常、エンティティを作成するごとに、そのエンティティをTypeORMの設定に追加する必要がある。
  // このプロパティをtrueにすることで、それを省略することができる。
  autoLoadEntities: true,

  // マイグレーションの設定
  // これはマイグレーションファイルを作成する際に、どのエンティティの情報を読み込むかの設定です。TypeORMの実行はコンパイル済みのJSファイルを読み込むのがデフォルトの設定になっているので、
  // コンパイル済みのdistディレクトリを指定する必要がある
  entities: ['dist/entities/*.entitiy.js'],
  // これはどのマイグレーションファイルを使用して、マイグレーションを行うかの設定です。distディレクトリを指定する必要がある。
  migrations: ['dist/migrations/*.js'],
  // これはCLIによって、エンティティやマイグレーションファイルが作成される場合の出力先となります。
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
