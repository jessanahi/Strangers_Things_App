import { URL } from './constants.js';

export const getPosts = async () => {
    try {
        const response = await fetch(URL.postsURL);
        const json = await response.json();
    } catch (e) {
        console.log('Failed to fetch the strange posts.');
        console.error(e);
    }
}; 