const express = require('express');
const firmController = require('../controllers/firmController');
const verifyToken = require('../middlewares/verifyToken');
const productController = require('../controllers/productController');
const router = express.Router()

router.post('/add-firm', verifyToken, firmController.addFirm);
router.get('/uploads/:imageName', (req, res)=>{
    const imageName = req.params.imageName;
    req.headersSent('Content-Type','image/jpeg');
    res.sendFile(path.join(_dirname, '..', 'uploads', imageName));
});
router.delete('/:firmId', firmController.deleteFirmById);
module.exports = router;