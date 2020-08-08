import { api } from '../helpers';

const basePath = 'pservice';

function getAll() {
    return api.get(`${basePath}/all`);
}

function show(pserviceId) {
    return api.get(`${basePath}/?id=${pserviceId}`)
}

function create(data) {
    return api.post(`${basePath}/`, data);
}

const addpserviceService = {
    getAll,
    show,
    create,
};

export default addpserviceService;
