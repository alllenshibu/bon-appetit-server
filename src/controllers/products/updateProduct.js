const pool = require('../../db-configure')
// @desc Update a Specific Products
// @route GET /api/products/:id
// @access Admin 

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description, price } = req.body
        const product = await pool.query(`UPDATE products SET name = '${name}' , description = '${description}', price = '${price}'  WHERE id='${id}' RETURNING* `)

        if (product.rowCount == 0) {
            return res.status(404).json({ error: "No Product found" })
        }

        res.status(200).json({ message: "Updated the Product", data: product.rows[0] })

    } catch (err) {
        res.status(500).json({ message: err.message, error: "Something went wrong" })
    }

}


module.exports = { updateProduct }
