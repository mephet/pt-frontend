import Constants from "../constants";

const ConfigurationController = {
    updateConfigurations(json) {
        console.log(JSON.stringify(json));
        fetch(Constants.ENDPOINT_UPDATE_PATH, {
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
    }
}

export default ConfigurationController;