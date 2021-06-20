const env = {
  NODE_ENV: "production",
  NEXT_PUBLIC_PORT: 8000,
};

module.exports = {
  apps: [
    {
      name: "ADLIVE_FE",
      script: "server.js",
      env,
    },
  ],
};
