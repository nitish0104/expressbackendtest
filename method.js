const express = require("express")
const app = express()
app.listen(3000, () => {
	console.log("method page");
})
const cookieParser = require("cookie-parser")

const bodyparser = require("body-parser");
const userRouter = require('../router/userRouter')
// const authRouter = require('../router/authRouter')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

// let users = [
// 	{
// 		"id": 1,
// 		"name": "Nitish"
// 	},
// 	{
// 		"id": 2,
// 		"name": "Shradha"
// 	},
// 	{
// 		"id": 3,
// 		"name": "Sanket"
// 	},
// ]

app.use('/user', userRouter)

// app.use('/auth', authRouter)




// //Recieved Data
// app.get('/user', (req, res) => {
// 	console.log(req.query);
// 	res.send(users)
// })

// //Send Data
// app.post('/user', (req, res) => {
// 	console.log("data added", req.body);
// 	users = req.body
// 	res.json({
// 		message: "data added sucessfully",
// 		user: req.body
// 	})
// })

// //Update Data
// app.patch('/user', (req, res) => {
// 	console.log("DAta updated sucessfully", req.body);
// 	let dataToBeUpdated = req.body
// 	for (key in dataToBeUpdated) {
// 		users[key] = dataToBeUpdated[key]
// 	}
// 	res.json({
// 		alert: "update sucessfuly"
// 	})
// })

// //Delete Data
// app.delete('/user', (req, res) => {
// 	users = {}
// 	res.json({
// 		message: "Data deleted sucessfully"
// 	})
// })

// //params
// app.get("/user/:userName", (req, res) => {
// 	console.log(req.params.userName);
// 	console.log(req.params);
// 	res.send("this is params concepy")
// })

// //port


//Mounting In Express







