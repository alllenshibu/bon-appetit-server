const pool = require('../../db-configure');
const { deleteFile } = require('../../utils/s3');

// @desc  Delete a Specific Products
// @route GET /api/products/:id
// @access Admin 

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const file = await pool.query(`SELECT images from products where id='${id}' `)
        const fileName = file.rows[0].images[0];
        const product = await pool.query(`DELETE from products where id='${id}' `)
        await deleteFile(fileName.split('/').pop());

        if (product.rowCount == 0) {
            return res.status(404).json({ error: "No Product found" })
        }

        res.status(200).json({ message: "Deleted the Product", data: product.rows[0] })

    } catch (err) {
        res.status(500).json({ message: err.message, error: "Something went wrong" })
    }

}


module.exports = { deleteProduct }
