import axios from 'axios';
import { HEADER_IMAGE_URL } from './apiUrl';

// header images API

export const fetchHeaderData = () => {
    return axios.get(HEADER_IMAGE_URL)
};