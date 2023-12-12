const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getBidang = async (req, res) => {
    try {
        const response = await prisma.bidang.findMany();
        return res.status(200).json({msg:'Data bidang berhasil ditampilkan', data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

const getBidangByKode = async (req, res) => {
    try {
        const kode = req.params.kode;
        const response = await prisma.bidang.findFirst({ where: { kode: kode }});
        res.status(200).json({msg:`Data bidang dengan kode ${kode} ditemukan`, data: response});    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

const createBidang = async (req, res) => {
    try {
        const { name } = req.body;

        const nameExist = await prisma.bidang.findFirst({ where: { name: name } });
        if (nameExist) {
            return res.status(400).json({ msg: `${name} sudah pernah diinput pada kode ${nameExist.kode}` });
        }

        // Mendapatkan id terakhir dari record
        const lastRecord = await prisma.bidang.findFirst({
            orderBy: {
                id: "desc",
            },
        });

        const lastId = lastRecord ? lastRecord.id : null;

        // Menghitung nomor untuk digunakan pada kode berikutnya
        const nextNumber = lastId ? lastId + 1 : 1;

        // Membuat kode dengan format "BXX"
        const nextCode = `B${nextNumber.toString().padStart(2, '0')}`;

        const response = await prisma.bidang.create({
            data: {
                kode: nextCode,
                name: name
            }
        })

        return res.status(200).json({msg:`Data bidang ${name} berhasil ditambahkan dengan kode ${nextCode}`, data: response});
    } catch (error) {
        
    }
}


const updateBidang = async (req, res) => {
    try {
        const kode = req.params.kode;
        const { name } = req.body;

        if (name === "") return res.status(400).json({msg: "Please fill in all fields"});
        const response = await prisma.bidang.update({
            where: { kode: kode },
            data: {
                name        : name,
                updatedAt   : new Date()
            }
        })

        return res.status(200).json({msg:'Data Bidang Berhasil Diupdate', data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


const deleteBidang = async (req, res) => {
    try {
        const kode = req.params.kode;
        const exist = await prisma.bidang.findFirst({ where: { kode: kode }});
        if (!exist) return res.status(404).json({msg: `Data Bidang dengan kode ${kode} tidak ditemukan`});
        const response = await prisma.bidang.delete({ where: { kode: kode }});
        return res.status(200).json({msg: `Data Bidang ${kode} Berhasil Dihapus`, data: response});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


module.exports = {
    getBidang,
    getBidangByKode,
    createBidang,
    updateBidang,
    deleteBidang
}