const {z} = require('zod');
const userSchema = z.object({
    name: z.string().min(4).max(30),
    email: z.email(),
    password: z.string().min(6).max(30),
});

module.exports = {userSchema};