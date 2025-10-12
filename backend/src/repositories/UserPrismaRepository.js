const{ prisma } = require("../lib/prisma")

class UserPrismaRepository{
    async save(data){
        const user = await prisma.user.create({
            data,
        });
        return user
    }
    async findByEmail(email){
        const user = await user.findUnique({
            where: {
                email,
            },
            select: {
                name: true,
                email: true,
                password: true,
            },
        });
        return user;
    }
}

class UserPrismaFactory{
    createRepository(){
        return new UserPrismaRepository();
    }
}

module.exports = {
    UserPrismaFactory,
};