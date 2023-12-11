const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getKriteria = async (req, res) => {
    try {
        const response = await prisma.kriteria.findMany();
        return res.status(200).json({msg:'Data kriteria berhasil ditampilkan', data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

const getKriteriaByKode = async (req, res) => {
    try {
        const kode = req.params.kode;
        const response = await prisma.kriteria.findFirst({ where: { kode: kode }});
        res.status(200).json({msg:`Data kriteria dengan kode ${kode} ditemukan`, data: response});    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}


const createKriteria = async (req, res) => {
    try {
        const { name } = req.body;

        const nameExist = await prisma.kriteria.findFirst({ where: { name: name } });
        if (nameExist) {
            return res.status(400).json({ msg: `${name} sudah pernah diinput pada kode ${nameExist.kode}` });
        }

        // Mendapatkan id terakhir dari record
        const lastRecord = await prisma.kriteria.findFirst({
            orderBy: {
                id: "desc",
            },
        });

        // Menghitung nomor untuk digunakan pada kode berikutnya
        const nextNumber = lastRecord ? parseInt(lastRecord.kode.slice(1), 10) + 1 : 1;

        // Membuat kode dengan format "KXX"
        const nextCode = `K${nextNumber.toString().padStart(2, '0')}`;

        const response = await prisma.kriteria.create({
            data: {
                kode: nextCode,
                name: name
            }
        })

        return res.status(200).json({msg:`Data kriteria baru berhasil ditambahkan dengan kode ${nextCode}`, data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


const updateKriteria = async (req, res) => {
    try {
        const kode = req.params.kode;
        const { name } = req.body;

        const nameExist = await prisma.kriteria.findFirst({ where: { name: name } });
        if (nameExist) {
            return res.status(400).json({ msg: `${name} sudah pernah diinput pada kode ${nameExist.kode}` });
        }

        const response = await prisma.kriteria.update({
            where: { kode: kode },
            data: {
                name        : name
            }
        })

        return res.status(200).json({msg:`Data kriteria dengan kode ${kode} berhasil diupdate`, data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


const deleteKriteria = async (req, res) => {
    try {
        const kode = req.params.kode;
        const exist = await prisma.kriteria.findFirst({ where: { kode: kode }});
        if (!exist) return res.status(404).json({msg: `Data Kriteria dengan kode ${kode} tidak ditemukan`});
        const response = await prisma.kriteria.delete({ where: { kode: kode }});
        return res.status(200).json({msg: `Data Kriteria ${kode} Berhasil Dihapus`, data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


module.exports = {
    getKriteria,
    getKriteriaByKode,
    createKriteria,
    updateKriteria,
    deleteKriteria
}