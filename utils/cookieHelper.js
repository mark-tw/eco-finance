import cookie from 'js-cookie';
import cookieParser from 'cookieparser';

export function setCookie(name, value, options = {}) {
  if (process.client) {
    cookie.set(name, value, options);
  }
}

export function getCookie(name, req) {
  if (process.client) {
    return cookie.get(name);
  } else if (process.server && req && req.headers.cookie) {
    const parsedCookies = cookieParser.parse(req.headers.cookie);
    return parsedCookies[name];
  }
  return null;
}

export function eraseCookie(name) {
  if (process.client) {
    cookie.remove(name);
  }
}
