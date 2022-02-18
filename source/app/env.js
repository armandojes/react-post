const runtime = {
  production: 'production',
  development: 'development',
  developmentOnline: 'developmentOnline',
};

const apiUrlList = {
  [runtime.development]: 'http://localhost:3001',
  [runtime.production]: '',
  [runtime.developmentOnline]: '',
};

export const apiUrl = apiUrlList[ENV];

export default {
  apiUrl,
};
