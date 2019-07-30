import ApiHandler from "../api/ApiHandler";

const ProjectMembershipUtil = {

    async getStoryOwner(projectId, memberId) {
        let members = await ApiHandler.getProjectMembers(projectId);
        let m = members.filter(member => {
            return member.person.id === memberId;
        })

        return m;
    },

    async getPersonsInSprint(projectId, sprintNo) {
        const { stories } = await ApiHandler.getStoriesBySprint(projectId, sprintNo);
        console.log(stories);
        let owners = stories.stories.flatMap(story => {
            return story.owner_ids
        })
        let membersPromise = owners.map(async owner => {
            return await this.getStoryOwner(projectId, owner);
        });
        let members = await Promise.all(membersPromise);
        members = members.flat();
        let personsInfo = members.map(member => {
            return {initials: member.person.initials, name: member.person.name};
        })
        personsInfo = [...new Set(personsInfo)];
        return personsInfo;
    }
}

export default ProjectMembershipUtil;