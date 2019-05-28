import Constants from "../constants";

const ApiHandler = {

    async getStoriesBySprintAndUser(projectId, sprintNo, username) {

        let url = Constants.PT_ENDPOINT;
        url += `/${projectId}/search?query=label:sprint${sprintNo}
                +AND+owner:${username}`;
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