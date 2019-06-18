import Constants from "../constants/constants";

const ApiHandler = {
    async getProjectDetails(projectId) {
        let url = Constants.PT_ENDPOINT;
        url += `/${projectId}`;
        return fetch(url, {
            method: 'GET',
            headers: {
                'X-TrackerToken': Constants.PT_API_TOKEN,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            return json
        });
    },

    async getStoriesBySprintAndUser(projectId, sprintNo, ownerName) {

        let url = Constants.PT_ENDPOINT;
        url += `/${projectId}/search?query=label:sprint${sprintNo}
                +AND+owner:${ownerName}`;
        return fetch(url, {
            method: "GET",
            headers: {
                'X-TrackerToken': Constants.PT_API_TOKEN,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            return json
        });
    },

    async getStoriesBySprint(projectId, sprintNo) {
        let url = Constants.PT_ENDPOINT;
        url += `/${projectId}/search?query=label:sprint${sprintNo}
                +AND+includedone:true`;
        return fetch(url, {
            method: "GET",
            headers: {
                'X-TrackerToken': Constants.PT_API_TOKEN,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            return json
        });
    },

    async getProjectMembers(projectId) {
        let url = Constants.PT_ENDPOINT;
        url += `/${projectId}/memberships`;
        console.log(url);
        return fetch(url, {
            method: "GET",
            headers: {
                'X-TrackerToken': Constants.PT_API_TOKEN,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            return json
        });
    }
}

export default ApiHandler;