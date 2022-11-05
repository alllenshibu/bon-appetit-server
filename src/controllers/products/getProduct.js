const pool = require('../../db-configure')
// @desc Get a Specific Products
// @route GET /api/products/:id
// @access Admin and Users

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await pool.query(`SELECT * FROM products where id='${id}' `)

        if (product.rowCount == 0) {
            return res.status(404).json({ error: "No Product found" })
        }

        res.status(200).json({ message: "Success", data: product.rows[0] })

    } catch (err) {
        res.status(500).json({ message: err.message, error: "Something went wrong" })
    }

}


module.exports = { getProduct }
