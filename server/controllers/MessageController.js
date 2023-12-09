const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getMessages = async (req, res) => {
    try {
        const response = await prisma.message.findMany();
        return res.status(200).json({msg:'success', data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


const getMessageById = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await prisma.message.findFirst({ where: { id: Number(id) }});
        if (!response) return res.status(404).json({msg: "Message not found"});
        return res.status(200).json({msg:'success', data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


const createMessage = async (req, res) => {
    try {
        const {email, subject, message} = req.body;

        const response = await prisma.message.create({
            data: {
                email       : email,
                subject     : subject,
                message     : message
            }
        })

        return res.status(200).json({msg:'success', data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


const deleteMessage = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await prisma.message.delete({ where: { id: Number(id) }});
        if (!response) return res.status(404).json({msg: "Message not found"});
        return res.status(200).json({msg: "Message deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


module.exports = {
    getMessages,
    createMessage,
    getMessageById,
    deleteMessage
}