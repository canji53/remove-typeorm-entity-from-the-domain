# remove-typeorm-entity-from-the-domain

## 概要

こちらの[記事](https://www.tolog.info/typeorm/remove-typeorm-from-the-daomin)をもとに、ドメインモデルから TypeORM を取り除いてインフラ層に閉じ込めた際のサンプルコードを残しておきます。
オニオンアーキテクチャを参考にしています。

完全な動作確認を行っていません :man-bowing:
typeorm をインフラ層に閉じ込めるコンセプトやディレクトリ構造が参考になれば程度です。

## 技術スタック

- JavaScript/TypeScript
- Node.js
- RDB
- TypeORM
- DDD/OnionArchtecture

## 特徴

以下は私的見解のもと、重要だと思っている特徴を示します。

- ドメイン層に TypeORM をはじめ極力ライブラリに依存したコードは書かない
- ドメインモデルと DB のエンティティのズレがあるのはどうしようもないため、ドメイン層にて集約を活用して永続化データの橋渡しをできるようにする

## リポジトリ構造

```bash
tree ./src

./src
├── application # アプリケーションサービス層
├── domain
│   ├── model # ドメイン層
│   │   ├── id.ts
│   │   └── user
│   │       ├── birthdate.ts
│   │       ├── index.ts
│   │       ├── name.ts
│   │       ├── note.ts
│   │       └── user.ts # 集約ルート
│   └── service # ドメインサービス層(ドメインが持つにはおかしい振る舞いを書く)
├── index.ts
├── infrastructure # インフラストラクチャ層
│   ├── orm
│   │   └── typeorm # typeormをここに閉じ込める
│   │       ├── entity
│   │       │   ├── index.ts
│   │       │   └── user.ts # 集約ルートのuser.tsと対になる
│   │       ├── repository # typeormのリポジトリ
│   │       │   ├── index.ts
│   │       │   └── user.ts
│   │       └── typeorm.ts
│   └── repository # リポジトリのインターフェース
│       ├── index.ts
│       └── user.ts
└── util # 抽象度の高い関数を集約、決してロジックを持たないように注意したい...できているか怪しい...
    └── validation.ts
```
