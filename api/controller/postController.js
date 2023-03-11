const db = require('../db');
const jwt = require('jsonwebtoken')


const getPosts = (req, res) => {
    const q = req.query.cat ? `select * from posts where cat = ? ` : `select * from posts`;

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
}
const getPost = (req, res) => {
    const q = "SELECT p.id, u.username, p.name, p.description, p.image, p.cat, p.date FROM users u INNER JOIN posts p ON u.id = p.u_id WHERE p.id = ? "
    
    const postId = req.params.id;

    db.query(q, [postId], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) return res.status(201).json("No post found")
        return res.status(200).json(data[0])
    })
}
const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated")

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");
        const q = "INSERT INTO posts(`name`, `description`, `image`,`u_id`, `cat`, `date`) values(?)"

        const values = [
            req.body.name,
            req.body.description,
            req.body.image,
            userInfo.id,
            req.body.cat,
            req.body.date
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Post created sucessfully !")
        })
    });

}
const updatePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated")

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");
        const q = "UPDATE posts SET `name` =?, `description` =?, `image` =? , `cat` =?, `date` =? WHERE id = ? AND u_id = ? "
        
        const postId = req.params.id;
        const values = [
            req.body.name,
            req.body.description,
            req.body.image,
            req.body.cat,
            req.body.date
        ]

        db.query(q, [...values, postId, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Post updated sucessfully !")
        })
    });
}
const deletePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated")

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");

        const q = "DELETE FROM users WHERE `id` = ? AND `u_id` = ?"
        db.query(q, [req.params.id, userInfo.id], (err, data) => {
            if (err) return res.status(403).json("You can only delete your own post only");
            return res.status(200).json("Post deleted sucessfully")

        })
    })

}

module.exports = { getPosts, getPost, addPost, updatePost, deletePost }