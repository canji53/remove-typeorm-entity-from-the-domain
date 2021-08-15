import "reflect-metadata";

import { connect } from "./infrastructure/orm/typeorm/typeorm";

export const start = async (): Promise<void> => {
  await connect();
  console.log("DB connected.");

  // 以下、express等でエンドポイントを設定してください :man-bowing:
};

start()
  .then()
  .catch((err) => {
    console.log(err);
  });
