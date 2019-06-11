import Constants from "../constants/constants";

const MembershipController = {
    getMembersInProject(projectId) {
        let url = Constants.PT_ENDPOINT;
        url += `/${projectId}/memberships`;
        console.log(url);
        return fetch(url, {
            method: 'GET',
            headers: {
                'X-TrackerToken': Constants.PT_API_TOKEN,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            return json;
        });
    },

    async getPersonFromId(membershipId) {
        const members = await this.getMembersInProject(Constants.PROJECT_ID);
        return members.filter(member => {
            return member.person.id === membershipId;
        })
    }
}

export default MembershipController;