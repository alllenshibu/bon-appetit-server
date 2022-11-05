const express = require('express')
const router = express.Router()


const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
    secretAccessKey: process.env.ACCESS_SECRET,
    accessKeyId: process.env.ACCESS_KEY,
    region: process.env.REGION,

});
const BUCKET = process.env.BUCKET
const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: "public-read",
        bucket: BUCKET,
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname)
        }
    })
})

const deleteFile = async (filename) => {
    try {
        console.log(filename)
        const delParams = { Bucket: BUCKET, Key: filename }
        let flag = await s3.deleteObject(delParams, (err, data) => {
            if (err) {
                console.log(err, err.stack);
                return false;
            }
            else {
                return true;
            }
        }).promise();
        return flag;

    } catch (error) {
        console.log(error)
    }

}

// router.post('/upload', upload.single('file'), async function (req, res, next) {

//     try {
//         console.log(req.file)
//         res.send('Successfully uploaded ' + req.file.location + ' location!')
//     } catch (error) {
//         res.status(400).json({ error: error })
//     }


// })

// router.get("/list", async (req, res) => {

//     let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
//     let x = r.Contents.map(item => item.Key);
//     res.send(x)
// })


// router.get("/download/:filename", async (req, res) => {
//     const filename = req.params.filename
//     let x = await s3.getObject({ Bucket: BUCKET, Key: filename }).promise();
//     res.send(x.Body)
// })

// router.delete("/delete/:filename", async (req, res) => {
//     const filename = req.params.filename
//     await s3.deleteObject({ Bucket: BUCKET, Key: filename }).promise();
//     res.send("File Deleted Successfully")
// })

module.exports = { upload }