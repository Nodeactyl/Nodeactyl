// There is no Interger in Typescript so it has been classed as a number but the Interger is still expected. 
type Interger = number;

declare class Application {
  hostUrl: String;
  apiKey: String;

  constructor(host: URL, key: String);
 
  getAllUsers(): Promise<unknown>;

  getUserDetails(userId: Interger): Promise<unknown>;

  getUserByUsername(username: String): Promise<unknown>;

  getUserByEmail(email: String): Promise<unknown>;

  getUserPage(pageNum: Interger): Promise<unknown>;

  createUser(
    Email: String,
    Username: String,
    FirstName: String,
    LastName: String
  ): Promise<unknown>;

  updateUserDetails(
    userId: Interger,
    Email: String,
    Username: String,
    FirstName: String,
    LastName: String,
    Language: String,
    Password: String
  ): Promise<Boolean>;

  createServer(
    Version: String,
    NameOfServer: String,
    OwnerID: Interger,
    EggID: Interger,
    DockerImage: String,
    StartupCmd: String,
    RAM: Interger,
    Swap: Interger,
    Disk: Interger,
    IO: Interger,
    CPU: Interger,
    AmountOfDatabases: Interger,
    AmountOfBackups: Interger,
    AmountOfAllocations: Interger
  ): Promise<unknown>;

  createSimpleServer(
    OwnerID: Interger,
    EggID: Interger,
    RAM: Interger,
    Disk: Interger,
    CPU: Interger,
    AmountOfDatabases: Interger,
    AmountOfBackups: Interger,
    AmountOfAllocations: Interger
  ): Promise<unknown>;

  getAllServers(): Promise<unknown>;

  getServerPage(pageNum: Interger): Promise<unknown>;

  getServerDetails(serverId: Interger): Promise<unknown>;

  deleteUser(userId: Interger): Promise<Boolean>;

  suspendServer(serverId: Interger): Promise<Boolean>;

  unsuspendServer(serverId: Interger): Promise<Boolean>;

  reinstallServer(serverId: Interger): Promise<Boolean>;

  updateServerDetails(
    serverId: Interger,
    Name: String,
    userId: Interger,
    externalId: Interger,
    Description: String
  ): Promise<Boolean>;

  updateServerBuild(
    serverId: Interger,
    AllocationID: Interger,
    RAM: Interger,
    Swap: Interger,
    IO: Interger,
    CPU: Interger,
    Disk: Interger,
    Threads: Interger,
    AmountOfDatabases: Interger,
    AmountOfBackups: Interger,
    AmountOfAllocations: Interger
  ): Promise<Boolean>;

  updateServerStartup(
    serverId: Interger,
    StartupCmd: String,
    Environment: any,
    Egg: Interger,
    DockerImage: String,
    SkipScripts: any
  ): Promise<unknown>;

  deleteServer(serverId: Interger): Promise<Boolean>;

  getNestDetails(nestId: Interger): Promise<unknown>;
}
