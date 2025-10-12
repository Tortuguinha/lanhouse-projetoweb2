const { RegisteruseCase } = require("../RegisterUseCases");

function registerFactory(userPrismaFactory){
    const factRepos = userPrismaFactory.createrepository();
    const register = RegisteruseCase(factRepos);

    return register;
}

module.exports = {registerFactory};