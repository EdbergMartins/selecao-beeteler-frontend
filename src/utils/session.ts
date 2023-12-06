import Cookies from 'js-cookie';
import api from 'services/api';
import authApi from 'services/authApi';

const getEnvironment = (domain: string) => {
  if (domain.includes('local') || domain.includes('dev')) {
    return 'dev';
  }
  if (domain.includes('stg')) {
    return 'stg';
  }
  return '';
};

const getCookiePropName = (domain: string, prop: string) => {
  const envName = getEnvironment(domain);

  if (envName) {
    return `gria_${envName}_${prop}`;
  }
  return `gria_${prop}`;
};

export const setCookieSessionToken = (token: string | null) => {
  const domain = process.env.REACT_APP_DOMAIN || '';
  const tokenPropName = getCookiePropName(domain, 'token');
  const userTypePropName = getCookiePropName(domain, 'userType');

  if (token) {
    Cookies.set(tokenPropName, token, { domain, secure: true });
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.clear();
    Cookies.remove(tokenPropName, { domain, secure: true });
    Cookies.remove(userTypePropName, { domain });
    delete api.defaults.headers.common.Authorization;
    delete authApi.defaults.headers.common.Authorization;
  }
};

export const getCookieSessionToken = () => {
  const domain = process.env.REACT_APP_DOMAIN || '';
  const tokenPropName = getCookiePropName(domain, 'token');
  const token = Cookies.get(tokenPropName);

  return token;
};
