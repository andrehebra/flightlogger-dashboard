/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "schemaPath": "./schema.graphql",
    "watchSchema": {
        "url": "https://api.flightlogger.net/graphql",
        
    },
    "plugins": {
        "houdini-svelte": {}
    },
    
}

export default config
