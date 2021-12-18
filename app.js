import express from 'express'

const app = express()
const PORT = 5000

const blog = { id: 1, title: "Blog title", description: "Blog description" }

app.get('/' , (req, res) => {
    res.send(blog)
})