const{ registerFactory } = require("../../use-cases/factories/resgiterFacotory");
const{ UserPrismaFactory } = require("../../repositories/UserPrismaRepository")

async function RegisterController(req, res) {
    try {
        const {name, email, password} = req.body;
        const userRepos = new UserPrismaFactory();
        const makeRegistory = registerFactory(userRepos);
        const user = await makeRegistory.exec(name, email, password);

        res
            .status(200)
            .json({
                message: "Usuário criado com sucesso!"
            });
    } catch (err) {

    }
}

module.exports = {RegisterController};