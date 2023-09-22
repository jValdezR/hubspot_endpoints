const requiredEnvVariables = [
    'SERVER_PORT',
    'API_KEY_VALUE',
    'API_KEY_NAME',
    'PIPEDRIVE_API_TOKEN',
    'SERVER_URL'
  ];
  
  const checkEnvVariables = () => {
    requiredEnvVariables.forEach((rev) => {
      if (process.env[rev] === undefined) {
        throw new Error(`Missing required environment variable ${rev}`);
      }
    });
  };
  
  module.exports = checkEnvVariables;