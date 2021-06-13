// Nodeactyl client typings
declare class Client {
  hostUrl: any;
  apiKey: any;

  constructor(host: any, key: any);
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

  getAccountDetails(): Promise<unknown>;

  getAccountPermissions(): Promise<unknown>;

  getServerDetails(serverId: any): Promise<unknown>;

  getServerStatus(serverId: any): Promise<unknown>;

  getAllServers(): Promise<unknown>;

  getServerPage(pageNum: any): Promise<unknown>;

  startServer(serverId: any): Promise<unknown>;

  stopServer(serverId: any): Promise<unknown>;

  restartServer(serverId: any): Promise<unknown>;

  killServer(serverId: any): Promise<unknown>;

  sendServerCommand(serverId: any, command: any): Promise<unknown>;

  getServerUsages(serverId: any): Promise<unknown>;

  getConsoleWebSocket(serverId: any): Promise<unknown>;

  renameServer(serverId: any, newName: any): Promise<unknown>;

  reInstallServer(serverId: any): Promise<unknown>;

  listServerBackups(serverId: any): Promise<unknown>;

  createServerBackup(serverId: any): Promise<unknown>;

  getBackupDetails(serverId: any, backupId: any): Promise<unknown>;

  getBackupDownload(serverId: any, backupId: any): Promise<unknown>;

  deleteBackup(serverId: any, backupId: any): Promise<unknown>;
  
  getSubUsers(serverId: any): Promise<unknown>;
  
  createSubUser(serverId: any, email: any, permissions: any): Promise<unknown>;

  getApiKeys(): Promise<unknown>;

  createApiKey(
    description: any,
    allowedIps: never[] | undefined
  ): Promise<unknown>;

  deleteApiKey(keyId: any): Promise<unknown>;

  updateEmail(newEmail: any, currentPassword: any): Promise<unknown>;

  updatePassword(newPassword: any, currentPassword: any): Promise<unknown>;
}
