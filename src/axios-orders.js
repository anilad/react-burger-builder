import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-3b1b6.firebaseio.com/'
});

export default instance;