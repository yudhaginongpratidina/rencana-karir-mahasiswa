const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');


const getUsers = async (req, res) => {
    try {
        const response = await prisma.user.findMany();
        res.status(200).json({msg:'success', data: response});    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}


const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await prisma.user.findFirst({ where: { id: Number(id) }});
        if (!response) return res.status(404).json({msg: "User not found"});
        res.status(200).json({msg:'success', data: response});    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        const {name, email, password, re_password} = req.body;

        const EmailExist = await prisma.user.findFirst({ where: { email: email }});
        if (EmailExist) return res.status(400).json({msg: "Email already exist"});

        if (password !== re_password) return res.status(400).json({msg: "Password doesn't match"});
        const hashPassword = await bcrypt.hash(password, 10);

        const seed = Date.now();
        const characterResponse = await fetch(`https://robohash.org/${seed}.png`);
        const characterUrl = characterResponse.url;

        const response = await prisma.user.create({
            data: {
                name        : name,
                email       : email,
                password    : hashPassword,
                profile     : characterUrl
            }
        })

        return res.status(200).json({msg: "User created successfully", data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}


const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const {name, password, re_password} = req.body;

        if (password !== re_password) return res.status(400).json({msg: "Password doesn't match"});
        const hashPassword = await bcrypt.hash(password, 10);

        const response = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                name        : name,
                password    : hashPassword
            }
        })

        return res.status(200).json({msg: "User updated successfully", data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const exist = await prisma.user.findFirst({ where: { id: Number(id) }});
        if (!exist) return res.status(404).json({msg: "User not found"});

        const response = await prisma.user.delete({ where: { id: Number(id) }});
        return res.status(200).json({msg: "User deleted successfully", data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const response = await prisma.user.findFirst({ where: { email: email }});
        if (!response) return res.status(404).json({msg: "User not found"});

        const isMatch = await bcrypt.compare(password, response.password);
        if (!isMatch) return res.status(400).json({msg: "Wrong password"});

        return res.status(200).json({msg: "Login successful", data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login
}