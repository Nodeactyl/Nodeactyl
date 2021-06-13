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
