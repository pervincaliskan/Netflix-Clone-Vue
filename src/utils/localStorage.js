import * as CryptoJS from 'crypto-js';

const SECRET = 'Secret Passphrase';

export const setUserToLocalStorage = (user) => {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(user), SECRET).toString();
  localStorage.setItem('user', encrypted);
};

export const getUserFromLocalStorage = () => {
  const encrypted = localStorage.getItem('user');
  const bytes = CryptoJS.AES.decrypt(encrypted, SECRET);
  const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decrypted;
};
