import axios from 'axios';
import baseUrl from '../../config';

export const loginService = (email, password) => axios.post(`${baseUrl}/api/v1/login`, { email, password });

export const registerService = (user) => axios.post(`${baseUrl}/api/v1/register`, user);   
