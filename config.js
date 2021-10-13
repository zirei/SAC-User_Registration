
const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://zirei:Kobahi5*@userscluster.uf6mm.mongodb.net/UsersCluster?retryWrites=true&w=majority',
    port: process.env.PORT || 3001,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;