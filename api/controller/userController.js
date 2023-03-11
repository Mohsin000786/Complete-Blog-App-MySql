const jwt = require('jsonwebtoken');
const db = require('../db')
const addUser = (req, res) => {
    res.json("From User Controller")
}

const UpdateUser = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated")

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");
        const q = "UPDATE users SET `username` =?, `email` =?, `image` =?  WHERE id = ? "
        
        const postId = req.params.id;
        const values = [
            req.body.username,
            req.body.email,
            req.body.image
        ]

        db.query(q, [...values, postId], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User updated sucessfully !")
        })
    });
}

module.exports = {addUser, UpdateUser}