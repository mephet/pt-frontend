import Constants from "../constants/constants";

const ConfigurationController = {
    updateConfigurations(json) {
        let url = Constants.ENDPOINT;
        url += '/updateconfig';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        })
    },

    getConfiguration(projectId) {
        let url = Constants.ENDPOINT;
        url += `/config/project/${projectId}`;
        console.log(url);
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            return json;
        });
    },

    getLatestSprint(projectId) {
        let url = Constants.ENDPOINT;
        url += `/getsprint/project/${projectId}/`;
        console.log(url);
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(json => {
            return json;
        });
    },

    getSprintBySprintNo(projectId, sprintNo) {
        let url = Constants.ENDPOINT;
        url += `/getsprint/project/${projectId}/sprint/${sprintNo}`;
        console.log(url);
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(json => {
            return json;
        });
    }
}

export default ConfigurationController;