import { api } from '../helpers';

const basePath = 'pservice';

function getAll() {
    return api.get(`${basePath}/all`);
}

function show(id) {
    return api.get(`${basePath}/byid?id=${id}`);
}

function create(data) {
    return api.post(`${basePath}/add`, data);
}

function deletePServicio(id) {
  return api.post(`${basePath}/delete?id=${id}`);
}

function updatePServicio(data) {
  return api.post(`${basePath}/update`, data);
}

const addpserviceService = {
    getAll,
    show,
    create,
    deletePServicio,
    updatePServicio
};

export default addpserviceService;
