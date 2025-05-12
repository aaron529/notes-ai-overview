import "dotenv/config";

const config = {
  app: {
    port: process.env.PORT || 5000,
  },
  db: {
    uri: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "note-ai-super-secret",
    expiration: process.env.JWT_EXPIRATION || "1h",
  },
};

export { config };
