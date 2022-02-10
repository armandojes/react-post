/* eslint-disable import/prefer-default-export */

/**
 * create a new cookie
 * @param {String} cookieNme
 * @param {String} cookieValue
 * @param {Number} expdays - expiration cokkie in days
 */
export function setCookie(cookieName, cookieValue, expdays) {
  const date = new Date();
  date.setTime(date.getTime() + (expdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${cookieName}=${cookieValue}; ${expires}`;
}
