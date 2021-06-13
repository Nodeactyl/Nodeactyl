// There is no Interger in Typescript so it has been classed as a number but the Interger is still expected. 
type Interger = number;

declare class Client {
  hostUrl: any;
  apiKey: any;

  constructor(host: URL, key: String);
  processError(err: { status: undefined; statusCode: undefined }):
    | number
    | {
        status: undefined;
        statusCode: undefined;
      }
    | undefined;

  getErrorCode(err: {
    status?: undefined;
    statusCode?: undefined;
    message?: any;
    charAt?: any;
    length?: any;
  }): number | undefined;

  getAccountDetails(): Promise<Object>;

  getAccountPermissions(): Promise<unknown>;

  getServerDetails(serverId: Interger): Promise<unknown>;

  getServerStatus(serverId: Interger): Promise<unknown>;

  getAllServers(): Promise<unknown>;

  getServerPage(pageNum: Intergery): Promise<unknown>;

  startServer(serverId: Interger): Promise<Boolean>;

  stopServer(serverId: Interger): Promise<Boolean>;

  restartServer(serverId: Interger): Promise<Boolean>;

  killServer(serverId: Interger): Promise<Boolean>;

  sendServerCommand(serverId: Interger, command: any): Promise<Boolean>;

  getServerUsages(serverId: Interger): Promise<unknown>;

  getConsoleWebSocket(serverId: Interger): Promise<unknown>;

  renameServer(serverId: Interger, newName: String): Promise<Boolean>;

  reInstallServer(serverId: Interger): Promise<Boolean>;

  listServerBackups(serverId: Interger): Promise<Array>;

  createServerBackup(serverId: Interger): Promise<Object>;

  getBackupDetails(serverId: Interger, backupId: Interger): Promise<Object>;

  getBackupDownload(serverId: Interger, backupId: Interger): Promise<Object>;

  deleteBackup(serverId: Interger, backupId: Interger): Promise<Boolean>;

  getSubUsers(serverId: Interger): Promise<unknown>;

  createSubUser(serverId: Interger, email: String, permissions: any): Promise<unknown>;

  getApiKeys(): Promise<unknown>;

  createApiKey(
    description: String,
    allowedIps: any
  ): Promise<unknown>;

  deleteApiKey(keyId: Interger): Promise<Boolean>;

  updateEmail(newEmail: String, currentPassword: String): Promise<Boolean>;

  updatePassword(newPassword: String, currentPassword: String): Promise<Boolean>;
}
