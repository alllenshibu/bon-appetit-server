const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const maxAge = 3 * 24 * 60 * 60; // 3days expire
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
}

const userLogin = async (req, res) => {

    try {
        const { username, password } = req.body
        // const user = await pool.query(`SELECT * from users where username= $1`, [username])
        const user= User.findOne({username:username})
        console.log(user)

        if (user.rowCount == 0) {
            return res.status(401).json({
                error: 'Invalid username/password'
            })
        }

        if (await bcrypt.compare(password, user.rows[0].password)) {
            const token = createToken(user.rows[0].id);

            return res.status(200).json({
                message: "Successfully Logged in",
                token: token
            })
        }
        return res.status(401).json({
            error: 'Invalid username/password'
        })
    } catch (error) {
        console.log(error)
    }
}


const userSignup = async (req, res) => {
    const { username, password } = req.body
    if (!username) {
        return res.status(400).json({ error: 'Invalid email' })
    }

    if (!password) {
        return res.status(400).json({ error: 'Invalid password' })
    }

    if (password.length < 5) {
        return res.status(400).json({
            error: 'Password must be atleast 6 characters'
        })
    }

    const encryptPassword = await bcrypt.hash(password, 10)
    try {
        let insertQuery = `insert into users(username, password) values( '${username}', '${encryptPassword}') RETURNING*`
        const response = await pool.query(insertQuery)

        console.log(response.rows[0].id)
        const token = createToken(response.rows[0].id);

        if (response) {
            res.status(201).json({
                message: "Account Created",
                username: response.rows[0].username,
                _id: response.rows[0].id,
                token: token

            })
        } else {
            return res.status(400).json({ error: "Invalid request" })
        }
    } catch (err) {
        return res.status(500).json({ error: "Something went wrong", message: err.message })
    }

}





module.exports = { userLogin, userSignup }