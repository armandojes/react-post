const runtime = {
  production: 'production',
  development: 'development',
  developmentOnline: 'developmentOnline',
};

const apiUrlList = {
  [runtime.development]: LOCAL_API_URL,
  [runtime.production]: '',
  [runtime.developmentOnline]: '',
};

export const apiUrl = apiUrlList[ENV];

export default {
  apiUrl,
};
