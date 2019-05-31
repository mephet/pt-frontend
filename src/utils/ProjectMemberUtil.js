import ApiHandler from "../api/ApiHandler";

const ProjectMembershipUtil = {

    async getStoryOwner(projectId, memberId) {
        let members = await ApiHandler.getProjectMembers(projectId);
        let m = members.filter(member => {
            return member.person.id === memberId;
        })

        console.log(m);
    },

    async getAllStoryOwnersInSprint(projectId, sprintNo) {
        const { stories } = await ApiHandler.getStoriesBySprintAndUser(projectId, sprintNo);
        console.log(stories);
    }
}

export default ProjectMembershipUtil;