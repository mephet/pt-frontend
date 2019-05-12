import Constants from "../constants";

const ConfigurationController = {
    updateConfigurations(json) {
        console.log(Constants.ENDPOINT_UPDATE_PATH);
        console.log(JSON.stringify(json));
        fetch(Constants.ENDPOINT_UPDATE_PATH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        })
    }
}

export default ConfigurationController;