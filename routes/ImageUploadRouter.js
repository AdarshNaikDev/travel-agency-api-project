// routes.js
const express = require('express');
//const uploadImage = require('./uploadImage');
const { upload } = require('../middleware/multer');
const uploadImage = require('../UploadImage');

const router = express.Router();

router.post('/api/imageUpload', upload, async (req, res) => {
    const file = {
        type: req.file.mimetype,
        buffer: req.file.buffer
    };
    try {
        const { fileName, downloadURL } = await uploadImage(file, 'single');
        res.send({
            status: "SUCCESS",
            imageName: fileName,
            imageURL: downloadURL 
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "FAILED", error: "Failed to upload image" });
    }
});

module.exports = router;
