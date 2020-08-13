import { api } from '../helpers';

const basePath = 'team';

function getAll() {
    return api.get(`${basePath}/all`);
}

function show(teamId) {
    return api.get(`${basePath}/byid?id=${teamId}`)
}

function create(tag,idlist) {
    return api.post(`${basePath}/add?tag=${tag}&idlist=${idlist}`)
}

function deleteTeam(id) {
    return api.post(`${basePath}/deleteTeam?id=${id}`)
}

function deleteToTeam(id,idlist) {
    return api.post(`${basePath}/deleteToTeam?id=${id}&idlist=${idlist}`)
}

function addToTeam(id,idlist) {
  return api.post(`${basePath}/addToTeam?id=${id}&idlist=${idlist}`)
}
const teamsService = {
    getAll,
    show,
    create,
    deleteTeam,
    deleteToTeam,
    addToTeam
};

export default teamsService;
