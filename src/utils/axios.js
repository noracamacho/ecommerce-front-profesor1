import deafultAxios from 'axios';
// http://localhost:8080
const axios = () => deafultAxios.create({
    // baseURL: 'https://e-commerce-api-v2.academlo.tech/api/v1',
    // baseURL: 'http://localhost:8080',
    baseURL:'https://ecommerceapp-verv.onrender.com',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export default axios;

// Documentacion Postman
// https://documenter.getpostman.com/view/3031714/2s93saZCXG
// API render
// https://ecommerceapp-verv.onrender.com
// GitHub API
// https://github.com/noracamacho/ecommerceApp.git
// Github Front Profesor
// https://github.com/noracamacho/ecommerce-front-profesor1.git
// Front Profesor desplegado en Netlify
// ecommerce-frontend-alumnos.netlify.app
// Github Front Profesor
// https://github.com/noracamacho/ecommerce-front-profesor1.git
// Front Nora desplegado en Netlify
// 

