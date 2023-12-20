const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getRules = async (req, res) => {
    try {
        const response = await prisma.rule.findMany();
        return res.status(200).json({msg:'success', data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}


const getRuleByCode = async (req, res) => {
    try {
        const { kode } = req.params;

        const codeExist = await prisma.rule.findFirst({ where: { kode: kode } });
        if (!codeExist) return res.status(404).json({ msg: `Data rule dengan kode ${kode} tidak ditemukan` });

        const response = await prisma.rule.findFirst({ where: { kode: kode }});
        return res.status(200).json({msg:'success', data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

const getRuleByKriteria = async (req, res) => {
    try {
        const { kodeBidang, kodeKriteria } = req.body;

        // KODE KRITERIA SAMA DI RULE
        const response = await prisma.rule.findMany({ where: { kodeBidang: kodeBidang, kodeKriteria: kodeKriteria } });

        if (response === 0) {
            return res.status(404).json({ msg: `Data rule dengan kode kriteria ${kodeKriteria} tidak ditemukan` });
        }

        return res.status(200).json({ msg: 'success', data: response });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}


const createRule = async (req, res) => {
    try {
        const { kodeBidang, kodePekerjaan, kodeKriteria } = req.body;

        // KODE KRITERIA SAMA DI RULE
        const kriteriaExist = await prisma.rule.findFirst({ where: { kodeKriteria: kodeKriteria } });
        if (kriteriaExist) return res.status(400).json({ msg: `Data rule dengan kode kriteria ${kodeKriteria} sudah ada` });

        // KODE PEKERJAAN SAMA DI RULE
        // const pekerjaanExist = await prisma.rule.findFirst({ where: { kodePekerjaan: kodePekerjaan } });
        // if (pekerjaanExist) return res.status(400).json({ msg: `Data rule dengan kode pekerjaan ${kodePekerjaan} sudah ada` });

        // MENDAPATKAN ID TERAKHIR DARI RECORD
        const lastRecord = await prisma.rule.findFirst({
            orderBy: {
                id: "desc",
            },
        });

        // MENGHITUNG NOMOR UNTUK DIGUNAKAN PADA KODE BERIKUTNYA
        const nextNumber = lastRecord ? parseInt(lastRecord.kode.slice(1), 10) + 1 : 1;

        // MEMBUAT KODE DENGAN FORMAT "RXX"
        const nextCode = `R${nextNumber.toString().padStart(2, '0')}`;

        const response = await prisma.rule.create({
            data: {
                kode: nextCode,
                kodeBidang: kodeBidang,
                kodePekerjaan: kodePekerjaan,
                kodeKriteria: kodeKriteria
            }
        })

        return res.status(200).json({msg: `Data rule baru berhasil ditambahkan dengan kode ${nextCode}`, data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}


const updateRule = async (req, res) => {
    try {
        const { kode } = req.params;
        const { kodeBidang, kodePekerjaan, kodeKriteria } = req.body;

        // KODE KRITERIA SAMA DI RULE
        const kriteriaExist = await prisma.rule.findFirst({ where: { kodeKriteria: kodeKriteria } });
        if (kriteriaExist) return res.status(400).json({ msg: `Data rule dengan kode kriteria ${kodeKriteria} sudah ada` });

        // KODE PEKERJAAN SAMA DI RULE
        // const pekerjaanExist = await prisma.rule.findFirst({ where: { kodePekerjaan: kodePekerjaan } });
        // if (pekerjaanExist) return res.status(400).json({ msg: `Data rule dengan kode pekerjaan ${kodePekerjaan} sudah ada` });

        const response = await prisma.rule.update({
            where: { kode: kode },
            data: {
                kodeBidang: kodeBidang,
                kodePekerjaan: kodePekerjaan,
                kodeKriteria: kodeKriteria,
                updatedAt: new Date()
            }
        })

        return res.status(200).json({msg: `Data rule dengan kode ${kode} berhasil diupdate`, data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}


const deleteRule = async (req, res) => {
    try {
        const { kode } = req.params;
        const exist = await prisma.rule.findFirst({ where: { kode: kode }});
        if (!exist) return res.status(404).json({msg: `Data rule dengan kode ${kode} tidak ditemukan`});

        const response = await prisma.rule.delete({ where: { kode: kode }});
        return res.status(200).json({msg: `Data rule ${kode} Berhasil Dihapus`, data: response});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    getRules,
    getRuleByCode,
    getRuleByKriteria,
    createRule,
    updateRule,
    deleteRule
}