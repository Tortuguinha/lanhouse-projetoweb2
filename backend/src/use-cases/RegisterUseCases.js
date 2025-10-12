class RegisterUseCase {
    constructor(_userRepository){

    }

    async exec(data){
        const emailAlreadyExists = new _userRepository.findByEmail(data.email);

        if(emailAlreadyExists){
            throw new Error("Usuário já existe!");
        }

        const user = await _userRepository.save(data);

        return {user};
    }
}

module.exports = {RegisterUseCase};