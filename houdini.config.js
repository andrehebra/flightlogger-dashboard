/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "schemaPath": "./schema.graphql",
    "watchSchema": {
        "url": "https://api.flightlogger.net/graphql",
        headers: {
			Authorization(env) {
				return `Bearer ${env.FTP_APIKEY}`
			}
		}
    },
    "plugins": {
        "houdini-svelte": {}
    }
}

export default config
