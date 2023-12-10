const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPekerjaan = async (req, res) => {
    try {
        const response = await prisma.pekerjaan.findMany();
        res.status(200).json({msg:'success', data: response});    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}


const getPekerjaanById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await prisma.pekerjaan.findFirst({ where: { id: Number(id) }});
        if (!response) return res.status(404).json({msg: "Pekerjaan not found"});
        res.status(200).json({msg:'success', data: response});    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

const createPekerjaan = async (req, res) => {
    try {
        const { kode, name, description } = req.body;

        const nameExist = await prisma.pekerjaan.findFirst({ where: { name: name }});
        if (nameExist) return res.status(400).json({msg: `Data Pekerjaan dengan nama ${name} sudah pernah di input`});

        if (name === "" || description === "") return res.status(400).json({msg: "Please fill in all fields"});
        const response = await prisma.pekerjaan.create({
            data: {
                kode        : kode,
                name        : name,
                description : description
            }
        })

        return res.status(201).json({msg:'Data Pekerjaan Berhasil Diatambahkan', data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

const updatePekerjaan = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description } = req.body;

        if (name === "" || description === "") return res.status(400).json({msg: "Please fill in all fields"});
        const response = await prisma.pekerjaan.update({
            where: { id: Number(id) },
            data: {
                name        : name,
                description : description,
                updatedAt   : new Date()
            }
        })

        return res.status(200).json({msg:'Data Pekerjaan Berhasil Diupdate', data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}


const deletePekerjaan = async (req, res) => {
    try {
        const id = req.params.id;
        const exist = await prisma.pekerjaan.findFirst({ where: { id: Number(id) }});
        if (!exist) return res.status(404).json({msg: "Pekerjaan not found"});
        const response = await prisma.pekerjaan.delete({ where: { id: Number(id) }});
        return res.status(200).json({msg: "Pekerjaan deleted successfully", data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


module.exports = {
    getPekerjaan,
    getPekerjaanById,
    createPekerjaan,
    updatePekerjaan,
    deletePekerjaan
}