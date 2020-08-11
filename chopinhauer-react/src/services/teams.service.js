import { api } from '../helpers';

const basePath = 'team';

function getAll() {
    return api.get(`${basePath}/all`);
}

function show(teamId) {
    return api.get(`${basePath}/?id=${teamId}`)
}

function create(data) {
    return api.post(`${basePath}/`, data);
}

const teamsService = {
    getAll,
    show,
    create,
};

export default teamsService;
