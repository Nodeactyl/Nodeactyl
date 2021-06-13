// Nodeactyl client.js typings
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

// Nodeactyl application.js typings
declare class Application {
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

  getAllUsers(): Promise<unknown>;

  getUserDetails(userId: any): Promise<unknown>;

  getUserByUsername(username: any): Promise<unknown>;

  getUserByEmail(email: any): Promise<unknown>;

  getUserPage(pageNum: any): Promise<unknown>;

  createUser(
    Email: any,
    Username: any,
    FirstName: any,
    LastName: any
  ): Promise<unknown>;

  updateUserDetails(
    userId: any,
    Email: any,
    Username: any,
    FirstName: any,
    LastName: any,
    Language: any,
    Password: any
  ): Promise<unknown>;

  createServer(
    Version: any,
    NameOfServer: any,
    OwnerID: any,
    EggID: any,
    DockerImage: any,
    StartupCmd: any,
    RAM: any,
    Swap: any,
    Disk: any,
    IO: any,
    CPU: any,
    AmountOfDatabases: any,
    AmountOfBackups: any,
    AmountOfAllocations: any
  ): Promise<unknown>;

  createSimpleServer(
    OwnerID: any,
    EggID: any,
    RAM: any,
    Disk: any,
    CPU: any,
    AmountOfDatabases: any,
    AmountOfBackups: any,
    AmountOfAllocations: any
  ): Promise<unknown>;

  getAllServers(): Promise<unknown>;

  getServerPage(pageNum: any): Promise<unknown>;

  getServerDetails(serverId: any): Promise<unknown>;

  deleteUser(userId: any): Promise<unknown>;

  suspendServer(serverId: any): Promise<unknown>;

  unsuspendServer(serverId: any): Promise<unknown>;

  reinstallServer(serverId: any): Promise<unknown>;

  updateServerDetails(
    serverId: any,
    Name: any,
    userId: any,
    externalId: any,
    Description: any
  ): Promise<unknown>;

  updateServerBuild(
    serverId: any,
    AllocationID: any,
    RAM: any,
    Swap: any,
    IO: any,
    CPU: any,
    Disk: any,
    Threads: any,
    AmountOfDatabases: any,
    AmountOfBackups: any,
    AmountOfAllocations: any
  ): Promise<unknown>;

  updateServerStartup(
    serverId: any,
    StartupCmd: any,
    Environment: any,
    Egg: any,
    DockerImage: any,
    SkipScripts: any
  ): Promise<unknown>;

  deleteServer(serverId: any): Promise<unknown>;

  getNestDetails(nestId: any): Promise<unknown>;
}
