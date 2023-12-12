const express = require('express');
const router = express.Router();

const ruleController = require('../controllers/RuleController');

router.get('/api/rules', ruleController.getRules);
router.get('/api/rules/:kode', ruleController.getRuleByCode);

router.post('/api/rules', ruleController.createRule);
router.post('/api/rules/check', ruleController.getRuleByKriteria);
router.patch('/api/rules/:kode', ruleController.updateRule);

router.delete('/api/rules/:kode', ruleController.deleteRule);

module.exports = router