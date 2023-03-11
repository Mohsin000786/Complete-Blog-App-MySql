const express = require('express');
const postRoutes = require('./routes/posts.js')
const userRoutes = require('./routes/users.js')
const authRoutes = require('./routes/auth.js')
const uploadRoutes = require('./routes/upload.js')
const cookieParser = require('cookie-parser');
const cors = require('cors')


const app = express();
const port = 8800;

app.use(express.json());
app.use(cors())
app.use(cookieParser())


app.use('/upload', uploadRoutes)
app.use('/posts', postRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRoutes)


app.listen(port, () => console.log(`server running at port ${port}`))