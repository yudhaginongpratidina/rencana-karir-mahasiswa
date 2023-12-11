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


const getPekerjaanByKode = async (req, res) => {
    try {
        const kode = req.params.kode;
        const response = await prisma.pekerjaan.findFirst({ where: { kode: kode }});
        if (!response) return res.status(404).json({msg: `Data Pekerjaan dengan kode ${kode} sudah pernah tditemukan`});
        res.status(200).json({msg:'success', data: response});    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

const createPekerjaan = async (req, res) => {
    try {
        const { name, description } = req.body;

        const nameExist = await prisma.pekerjaan.findFirst({ where: { name: name } });
        if (nameExist) {
            return res.status(400).json({ msg: `${name} sudah pernah diinput pada kode ${nameExist.kode}` });
        }

        if (name === "" || description === "") {
            return res.status(400).json({ msg: "Please fill in all fields" });
        }

        // Mendapatkan id terakhir dari record
        const lastRecord = await prisma.pekerjaan.findFirst({
            orderBy: {
                id: "desc",
            },
        });

        // Menghitung nomor untuk digunakan pada kode berikutnya
        const nextNumber = lastRecord ? parseInt(lastRecord.kode.slice(1), 10) + 1 : 1;

        // Membuat kode dengan format "PXX"
        const nextCode = `P${nextNumber.toString().padStart(2, '0')}`;

        const response = await prisma.pekerjaan.create({
            data: {
                kode: nextCode,
                name: name,
                description: description,
            },
        });

        return res.status(201).json({ msg: `Data Pekerjaan ${name} Berhasil Ditambah`, data: response });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
};


const updatePekerjaan = async (req, res) => {
    try {
        const kode = req.params.kode;
        const { name, description } = req.body;

        if (name === "" || description === "") return res.status(400).json({msg: "Please fill in all fields"});
        const response = await prisma.pekerjaan.update({
            where: { kode: kode },
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
        const kode = req.params.kode;
        const exist = await prisma.pekerjaan.findFirst({ where: { kode: kode }});
        if (!exist) return res.status(404).json({msg: `Data Pekerjaan dengan kode ${kode} tidak ditemukan`});
        const response = await prisma.pekerjaan.delete({ where: { kode: kode }});
        return res.status(200).json({msg: `Data Pekerjaan ${kode} Berhasil Dihapus`, data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


module.exports = {
    getPekerjaan,
    getPekerjaanByKode,
    createPekerjaan,
    updatePekerjaan,
    deletePekerjaan
}