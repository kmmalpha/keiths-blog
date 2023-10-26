const express = require('express')
const app = express();
const path = require('path')

const port = process.env.PORT || 5000

// Server static assest (e.g. React build) if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
    
// Define API routes
app.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example of API route.' })
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})