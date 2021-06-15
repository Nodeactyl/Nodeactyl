// There is no interger in Typescript so it has been classed as a number but the interger is still expected.
type interger = number;

declare class Client {
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
