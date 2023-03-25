const express = require('express')
const app = express()
const sendemail = require('../nodemailerController/sendMail')
// let users = {}
app.get('/', (req, res) => {
	res.sendFile('./index.html', { root: __dirname })
})
app.post('/mail', sendemail)
// app.get('/about', (req, res) => {
// 	res.sendFile('./about.html', { root: __dirname })
// })
// app.get('/contact', (req, res) => {
// 	res.sendFile('./contact.html', { root: __dirname })
// })
// app.get('/contact-us', (req, res) => {
// 	res.redirect('/contact')
// })

app.listen(3000, () => {
	console.log("<h1>listning nitish dalvi </h1>")
})

