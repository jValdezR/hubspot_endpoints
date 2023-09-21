const requiredEnvVariables = [
    'SERVER_PORT',
    // 'SOCKET_PORT',
    // 'HOSTDB',
    // 'USERDB',
    // 'PASSWORDDB',
    // 'DATABASEDB',
    // 'PORTDB',
    // 'SECRET_KEY',
    // 'JWT_EXPIRATION',
    'API_KEY_VALUE',
    'API_KEY_NAME'
  ];
  
  const checkEnvVariables = () => {
    requiredEnvVariables.forEach((rev) => {
      if (process.env[rev] === undefined) {
        throw new Error(`Missing required environment variable ${rev}`);
      }
    });
  };
  
  module.exports = checkEnvVariables;