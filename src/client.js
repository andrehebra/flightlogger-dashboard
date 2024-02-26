import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'https://api.flightlogger.net/graphql',

    fetchParams({ session }) {
        return {
            headers: {
                Authorization: `Bearer `,
            },
        }
    },
})
