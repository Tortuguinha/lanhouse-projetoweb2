class InMemoryUserRepository {
    
    #users = [];

    save(data) {
        const user = {
            ...data
        };

        this.#users.push(data);

        console.log(this.#users);

        return user;
    }
};

class InMemoryFactory {
    userRepository() {
        return new InMemoryUserRepository();
    }
};

module.exports = {
    InMemoryFactory
};