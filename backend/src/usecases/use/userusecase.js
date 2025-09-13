const {InMemoryFactory} = require('../../repositories/inmemoryuserrepository.js')

class UserUseCase {
    async execute(data) {
        const inMemory = new InMemoryFactory();
        const user = inMemory.userRepository().save(data);

        return user;
    }
};

module.exports = {UserUseCase}