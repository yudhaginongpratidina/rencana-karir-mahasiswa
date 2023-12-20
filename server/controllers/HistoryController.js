const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// MENDAPATKAN SEMUA DATA HISTORY
const getHistory = async (req, res) => {
    try {
        const response = await prisma.history.findMany();
        return res.status(200).json({msg:'success', data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

// MEMBUAT DATA HISTORY BARU
const createHistory = async (req, res) => {
    try {
        const { name, gender, bidangPekerjaan, pekerjaan} = req.body;
        const response = await prisma.history.create({
            data: {
                name: name,
                gender: gender,
                bidangPekerjaan: bidangPekerjaan,
                pekerjaan: pekerjaan
            }
        })

        return res.status(200).json({msg:'success', data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

// HAPUS HISTORY BERDASARKAN ID
const deleteHistory = async (req, res) => {
    try {
        const { id } = req.params

        const exist = await prisma.history.findFirst({ where: { id: Number(id) }});
        if (!exist) return res.status(404).json({msg: "History not found"});

        const response = await prisma.history.delete({ where: { id: Number(id) }});
        return res.status(200).json({msg: "History deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    getHistory,
    createHistory,
    deleteHistory
}