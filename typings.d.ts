// There is no interger in Typescript so it has been classed as a number but the interger is still expected.
type interger = number;

declare module "nodeactyl" {
  export class Client {
    hostUrl: string;
    apiKey: string;

    /**
     * Main client class constructor
     * @param host Where your panel is hosted EG: ("https://yourpanel.host.net/");
     * @param key Client API Key. EG: ("yourClientApiKey");
     *
     * Host and key are both needed.
     *
     * EG: ("https://yourpanel.host.net/", "YourClientApiKey");
     */
    constructor(host: string, key: string);
    /**
     * Gets the account details associated with hostUrl and hostKey.
     *
     * WARN: MUST USE ClientAPI Key. Application API Keys no longer work with ANY Pterodactyl V1 & above.
     *
     */
    getAccountDetails(): Promise<Object>;
    /**
     * Gets the permissions that this associated host and key have.
     *
     * WARN: MUST USE ClientAPI Key. Application API Keys no longer work with ANY Pterodactyl V1 & above.
     */
    getAccountPermissions(): Promise<unknown>;
    /**
     * Gets a Server's information.
     *
     * NOTE: This does not return any live resource usages such as CPU, memory or RAM, but it will show the max limits of these values
     *
     * WARN: MUST USE ClientAPI Key. Application API Keys no longer work with ANY Pterodactyl V1 & above.
     *
     * @param serverId ID of the server you would like to retrieve infomation from.
     *
     */
    getServerDetails(serverId: interger): Promise<unknown>;
    /**
     * Gets a server's status, so whether it is running, starting or powered off.
     *
     * @param serverId ID of the server you would like to retrieve infomation from.
     */
    getServerStatus(serverId: interger): Promise<unknown>;
    /**
     * Gets a list of servers from your panel, currently this only get the first page but support will be added soon for grabbing ALL pages with this method.
     */
    getAllServers(): Promise<unknown>;
    /**
     * Gets a server by a specified page number.
     *
     * WARN: MUST USE ClientAPI Key. Application API Keys no longer work with ANY Pterodactyl V1 & above.
     *
     * This will return an empty array if the specified page was invalid.
     *
     * @param pageNum Number of the page you would to use to get server.
     *
     */
    getServerPage(pageNum: interger): Promise<unknown>;
    /**
     * Starts a server if the host and api key have permission.
     *
     * By default Pterodactyl API returns a empty string on success (""), The response is altered to make it a boolean value of "true".
     *
     * @param serverId ID of the server you would like to start.
     */
    startServer(serverId: interger): Promise<Boolean>;
    /**
     * Stops a server if the host and api key have permission.
     *
     * By default Pterodactyl API returns a empty string on success (""), The response is altered to make it a boolean value of "true".
     *
     * @param serverId ID of the server you would like to stop.
     */
    stopServer(serverId: interger): Promise<Boolean>;
    /**
     * Restarts a server if the host and api key have permission.
     *
     * By default Pterodactyl API returns a empty string on success (""), The response is altered to make it a boolean value of "true".
     *
     * @param serverId ID of the server you would like to restart.
     */
    restartServer(serverId: interger): Promise<Boolean>;
    /**
     * Kills a server if the host and api key have permission.
     *
     * By default Pterodactyl API returns a empty string on success (""), The response is altered to make it a boolean value of "true".
     *
     * @param serverId ID of the server you would like to kill.
     */
    killServer(serverId: interger): Promise<Boolean>;
    /**
     * Sends a command to a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), The response is altered to make it a boolean value of "true".
     *
     * @param serverId ID of the server you would like to send a command.
     * @param command The command you are sending to target server.
     */
    sendServerCommand(serverId: interger, command: any): Promise<Boolean>;
    /**
     * gets a servers current memory/cpu/disk usages as bytes
     *
     * @param serverId ID of the server that you would like to get usages.
     */
    getServerUsages(serverId: interger): Promise<unknown>;
    /**
     * Gets the Console WebSocket instance for a server
     * you will need to establish your own socket connection for now
     * (try socket.io)
     *
     * @param serverId ID of the server that you would like to get websocket.
     */
    getConsoleWebSocket(serverId: interger): Promise<unknown>;
    /**
     * Renames the target server
     *
     * @param serverId ID of the server that you would like to rename.
     * @param newName The new name of the target server.
     */
    renameServer(serverId: interger, newName: string): Promise<Boolean>;
    /**
     * ReInstalls a target server
     *
     * @param serverId ID of the target server that you would like to reinstall.
     */
    reInstallServer(serverId: interger): Promise<Boolean>;
    /**
     * Lists what backups a server has
     *
     * @param serverId ID of the server that you would like to get a list of backups.
     */
    listServerBackups(serverId: interger): Promise<Array<any>>;
    /**
     * Creates a backup for a specified server
     *
     * This will send a error code 924 when trying to create 2 backups within a 10 minute time frame
     * Stay tuned for what error this returns when the max amount of backups have been created
     *
     * @param serverId ID of the server that you would like to create a back up.
     */
    createServerBackup(serverId: interger): Promise<Object>;
    /**
     * Gets details about a specified server backups
     *
     * @param serverId ID of the server that you would like to get a specified backup.
     * @param backupId ID of the backup to get the details from.
     */
    getBackupDetails(serverId: interger, backupId: interger): Promise<Object>;
    /**
     * Gets a clickable URL to download your server backup
     *
     * @param serverId ID of the server that you would like to get a specified backup from.
     * @param backupId ID of the backup to download.
     */
    getBackupDownload(serverId: interger, backupId: interger): Promise<Object>;
    /**
     * Deletes a specified backup
     *
     * @param serverId ID of the server that you would like to delete a backup from.
     * @param backupId ID of the backup that you would like to delete.
     */
    deleteBackup(serverId: interger, backupId: interger): Promise<Boolean>;
    /**
     * Shows the sub users at the target server.
     *
     * @param serverId ID of the server you would like to retrieve sub users.
     */
    getSubUsers(serverId: interger): Promise<unknown>;
    /**
     * Creates a sub user at the target server.
     *
     * @param serverId ID of the server you would like to create a sub user.
     * @param email Email for that sub user.
     * @param permissions The permissons that the new sub user gets.
     */
    createSubUser(
      serverId: interger,
      email: string,
      permissions: any
    ): Promise<unknown>;
    /**
     * Gets a list of API keys that this assigned host and key have available to them
     *
     * WARN: MUST USE ClientAPI Key. Application API Keys no longer work with ANY Pterodactyl V1 & above.
     */
    getApiKeys(): Promise<unknown>;
    /**
     * Creates an API key with specified host and api key. tbh this feels pretty useless as the key as you receive gives off a 403.
     *
     * WARN: No support will be provided with this command.
     *
     * WARN: MUST USE ClientAPI Key. Application API Keys no longer work with ANY Pterodactyl V1 & above.
     *
     * @param description Descripton of the new API key.
     * @param allowedIps IPs that can use the API key but leave blank if you want all IPs you access.
     */
    createApiKey(description: string, allowedIps: any): Promise<unknown>;
    /**
     * Deletes a specified API key. Only use the API key identifier provided to you on the panel
     *
     * By default Pterodactyl API returns a empty string on success (""), The response is altered to make it a boolean value of "true".
     * However do not this value will NEVER be false.
     *
     * To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * WARN: MUST USE ClientAPI Key. Application API Keys no longer work with ANY Pterodactyl V1 & above.
     *
     * @param keyId The key ID that you would like to delete.
     */
    deleteApiKey(keyId: interger): Promise<Boolean>;
    /**
     * Updates the email for the specified host and API key
     *
     * By default Pterodactyl API returns a empty string on success (""), The response is altered to make it a boolean value of "true".
     *
     * WARN: MUST USE ClientAPI Key. Application API Keys no longer work with ANY Pterodactyl V1 & above.
     *
     * @param newEmail The new email that you would like to set.
     * @param currentPassword The current password that you use.
     */
    updateEmail(newEmail: string, currentPassword: string): Promise<Boolean>;
    /**
     * Updates the password for the specified host and api key
     *
     * By default Pterodactyl API returns a empty string on success (""), The response is altered to make it a boolean value of "true".
     *
     * WARN: MUST USE ClientAPI Key. Application API Keys no longer work with ANY Pterodactyl V1 & above.
     *
     * @param newPassword The new password that you would like to set.
     * @param currentPassword The current password that you use.
     */
    updatePassword(
      newPassword: string,
      currentPassword: string
    ): Promise<Boolean>;
  }
  export class Application {
    hostUrl: string;
    apiKey: string;

    /**
     * Main application class constructor
     * @param host Where your panel is hosted (EG: http(s)://panel.host.net/)
     * @param key
     */
    constructor(host: URL, key: string);
    /**
     * Gets a list of users from your panel
     *
     * @returns {Promise<unknown>}
     * $param {integer} Page number
     */
    getAllUsers(): Promise<unknown>;
    /**
     * Gets details of a user
     *
     * @returns {Promise<unknown>}
     * $param {integer} userId
     */
    getUserDetails(userId: interger): Promise<unknown>;
    /**
     * Gets details of a user by username
     *
     * @returns {Promise<unknown>}
     * $param {string} username
     */
    getUserByUsername(username: string): Promise<unknown>;
    /**
     * Gets details of a user
     *
     * @returns {Promise<unknown>}
     * $param {string} email
     */
    getUserByEmail(email: string): Promise<unknown>;
    /**
     * Gets users by a specified page number
     *
     * This will return an empty array if the specified page was invalid.
     *
     * @param pageNum
     * @returns {Promise<unknown>}
     */
    getUserPage(pageNum: interger): Promise<unknown>;
    /**
     * Creates a user
     *
     * @param {string} Username Users username
     * @param {string} Email Users email
     * @param {string} FirstName Users first name
     * @param {string} LastName Users last name
     * @returns {Promise<unknown>}
     */
    createUser(
      Email: string,
      Username: string,
      FirstName: string,
      LastName: string
    ): Promise<unknown>;
    /**
     * UpdateUserDetails
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param {integer} userId
     * @param {string} Email
     * @param {string} Username
     * @param {string} FirstName
     * @param {string} LastName
     * @param {string} Language
     * @param {string} Password
     * @returns {Promise<Boolean>}
     */
    updateUserDetails(
      userId: interger,
      Email: string,
      Username: string,
      FirstName: string,
      LastName: string,
      Language: string,
      Password: string
    ): Promise<Boolean>;
    /**
     * Creates a server
     *
     * @param {string} Version Version of the server to use
     * @param {string} NameOfServer Name of server to create
     * @param {integer} OwnerID User ID of who should own this server
     * @param {integer} EggID Egg ID to use when installing the server
     * @param {string} DockerImage The image to use from Docker
     * @param {string} StartupCmd The command to use when starting this server (AKA JVM Arguments)
     * @param {integer} RAM The amount of RAM the server has
     * @param {integer} Swap The amount of Swap the server has
     * @param {integer} Disk The amount of Storage the server has
     * @param {integer} IO Set this to 500 please. (Even if you know what it is leave it alone)
     * @param {integer} CPU The amount of CPU Power the server can use (100 = 1 core);
     * @param {integer} AmountOfDatabases The max amount of databases a server can use
     * @param {integer} AmountOfBackups The max backups you can hold
     * @param {integer} AmountOfAllocations The max amount of allocation(s) a server can us
     * @returns {Promise<unknown>}
     */
    createServer(
      Version: string,
      NameOfServer: string,
      OwnerID: interger,
      EggID: interger,
      DockerImage: string,
      StartupCmd: string,
      RAM: interger,
      Swap: interger,
      Disk: interger,
      IO: interger,
      CPU: interger,
      AmountOfDatabases: interger,
      AmountOfBackups: interger,
      AmountOfAllocations: interger
    ): Promise<unknown>;
    /**
     * Creates a server
     *
     * @param {integer} OwnerID User ID of who should own this server
     * @param {integer} EggID Egg ID to use when installing the server
     * @param {integer} RAM The amount of RAM the server has
     * @param {integer} Disk The amount of Storage the server has
     * @param {integer} CPU The amount of CPU Power the server can use (100 = 1 core);
     * @param {integer} AmountOfDatabases The max amount of databases a server can use
     * @param {integer} AmountOfBackups The max backups you can hold
     * @param {integer} AmountOfAllocations The max amount of allocation(s) a server can us
     * @returns {Promise<unknown>}
     */
    createSimpleServer(
      OwnerID: interger,
      EggID: interger,
      RAM: interger,
      Disk: interger,
      CPU: interger,
      AmountOfDatabases: interger,
      AmountOfBackups: interger,
      AmountOfAllocations: interger
    ): Promise<unknown>;
    /**
     * Gets a list of servers from your panel, currently this only get the first page but i will add support for grabbing ALL pages with this methods
     *
     * @returns {Promise<unknown>}
     */
    getAllServers(): Promise<unknown>;
    /**
     * Gets servers by a specified page number
     *
     * This will return an empty array if the specified page was invalid.
     *
     * @param {integer} pageNum
     * @returns {Promise<unknown>}
     */
    getServerPage(pageNum: interger): Promise<unknown>;
    /**
     * Gets a info of a server from your panel
     *
     * @param {integer} serverId
     * @returns {Promise<unknown>}
     */
    getServerDetails(serverId: interger): Promise<unknown>;
    /**
     * Deletes a specified user
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     * However do not this value will NEVER be false. To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @param userId
     * @returns {Promise<Boolean>}
     */
    deleteUser(userId: interger): Promise<Boolean>;
    /**
     * Suspend a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param {integer} serverId
     * @returns {Promise<Boolean>}
     */
    suspendServer(serverId: interger): Promise<Boolean>;
    /**
     * Unsuspend a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param {integer} serverId
     * @returns {Promise<Boolean>}
     */
    unsuspendServer(serverId: interger): Promise<Boolean>;
    /**
     * Reinstall a server if the host and api key have permission
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param {integer} serverId
     * @returns {Promise<Boolean>}
     */
    reinstallServer(serverId: interger): Promise<Boolean>;
    /**
     * UpdateServerDetails
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param {integer} serverId
     * @param {string} Name
     * @param {integer} userId
     * @param {integer} externalId
     * @param {string} Description
     * @returns {Promise<Boolean>}
     */
    updateServerDetails(
      serverId: interger,
      Name: string,
      userId: interger,
      externalId: interger,
      Description: string
    ): Promise<Boolean>;
    /**
     * UpdateServerBuild
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     *
     * @param {integer} serverId
     * @param {integer} AllocationID
     * @param {integer} RAM
     * @param {integer} Swap
     * @param {integer} IO
     * @param {integer} CPU
     * @param {integer} Disk
     * @param {integer} Threads
     * @param {integer} AmountOfDatabases
     * @param {integer} AmountOfBackups
     * @param {integer} AmountOfAllocations
     * @returns {Promise<Boolean>}
     */
    updateServerBuild(
      serverId: interger,
      AllocationID: interger,
      RAM: interger,
      Swap: interger,
      IO: interger,
      CPU: interger,
      Disk: interger,
      Threads: interger,
      AmountOfDatabases: interger,
      AmountOfBackups: interger,
      AmountOfAllocations: interger
    ): Promise<Boolean>;
    /**
     * UpdateServerStartup
     *
     * This update the startup details for a specified server
     *
     * @param serverId ID of serer
     * @param StartupCmd new startup command to use for this server
     * @param Environment The environment object for this server to use
     * @param Egg Egg ID for this serer to use
     * @param DockerImage Docker Image for this serer
     * @param SkipScripts Do you want to skip scripts? (have no idea what this is)
     * @returns {Promise<unknown>}
     */
    updateServerStartup(
      serverId: interger,
      StartupCmd: string,
      Environment: any,
      Egg: interger,
      DockerImage: string,
      SkipScripts: any
    ): Promise<unknown>;
    /**
     * Deletes a specified server
     *
     * By default Pterodactyl API returns a empty string on success (""), i altered the response to make it a boolean value of "true"
     * However do not this value will NEVER be false. To catch an error for this request you check if the caught error === 404, this will mean
     * the provided API key was non existing.
     *
     * MUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!
     *
     * @param serverId
     * @returns {Promise<Boolean>}
     */
    deleteServer(serverId: interger): Promise<Boolean>;
    /**
     * Gets details of a nest
     *
     * @returns {Promise<unknown>}
     * $param {integer} nestId
     */
    getNestDetails(nestId: interger): Promise<unknown>;
  }
}
