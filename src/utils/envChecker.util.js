const requiredEnvVariables = [
    'HUBSPOT_API_TOKEN',
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