import axios from 'axios'
import meta from 'api/meta';

const axiosInstance = axios.create(meta);

export default axiosInstance