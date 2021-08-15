import { getConnectionManager, createConnection, Connection } from "typeorm";

export const connect = async (): Promise<Connection> => {
  const CONNECTION_NAME = "default";
  const connectionManager = getConnectionManager();

  if (connectionManager.has(CONNECTION_NAME)) {
    console.log(`Connection of '${CONNECTION_NAME}' is already exists`);
    const connection = connectionManager.get(CONNECTION_NAME);

    if (!connection.isConnected) {
      console.log(
        `Connection of ${CONNECTION_NAME} has NOT established and try to connect`
      );
      await connection.connect();
    }

    return connection;
  }

  return createConnection();
};
