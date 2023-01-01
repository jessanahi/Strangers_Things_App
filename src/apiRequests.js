import axios from 'axios';
import { USER_URL, LOGIN_URL, REGISTER_URL } from './constants';

export async function getUser(token) {
  try {
    const response = await axios.get(USER_URL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const user = response.data.data;

    return user;
  } catch (e) {
    console.log('ERROR: Unable to get User data.');
    console.error(e);
  }
}

export async function login(username, password) {
  try {
    const response = await axios.post(LOGIN_URL, {
      user: { username, password },
    });

    const responseToken = response.data.data.token;

    return responseToken;
  } catch (e) {
    console.log('ERROR: Failed to login.');
    console.error(e);
  }
}

export async function register(username, password) {
  try {
    const response = await axios.post(REGISTER_URL, {
      user: { username, password },
    });

    const responseToken = response.data.data.token;

    return responseToken;
  } catch (e) {
    console.log('ERROR: Failed to register.');
    console.error(e);
  }
}