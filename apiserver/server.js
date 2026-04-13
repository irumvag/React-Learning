var express = require("express")
var cors = require('cors')
var app = express()
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var HTTP_PORT = 8000
var fs = require('fs');

let expenses = [];

loadExpenses();

function findExpenses(){
	// console.log(expenses);
	return expenses;
}

function findExpenseById(id){
	console.log(id);
	return expenses.filter( item => item.id == id);
}

function insert(data){
	item = {}
	item.id = rec[0]
	item.name = rec[1];
	item.amount = parseFloat(rec[2]);
	item.spend_date = new Date(rec[3]);
	item.category = rec[4];
    console.log(item);
	expenses.push(item);
}

function update(data){
	item = {}
	item.id = rec[0]
	item.name = rec[1];
	item.amount = parseFloat(rec[2]);
	item.spend_date = new Date(rec[3]);
	item.category = rec[4];
	
	const updatedUsers = expenses.map((expense) =>
        expense.id === rec[0] ? { item } : expense
    );
	console.log(data);
}

function remove(id){
	console.log(id);
	let newExpenses = expenses.filter(item => item.id !== id);
	expenses = newExpenses;
	
}

function loadExpenses() {
   readCsv("data.csv", function (data) {
      console.log(data);

      data.forEach(function (rec, idx) {
         item = {}
		 item.id = rec[0]
         item.name = rec[1];
         item.amount = parseFloat(rec[2]);
         item.spend_date = new Date(rec[3]);
         item.category = rec[4];

         expenses.push(item);
      })
   })
}
function readCsv(file, callback) {
   fs.readFile(file, 'utf-8', function (err, data) {
      if (err) throw err;
      var lines = data.split('\r\n');
      var result = lines.map(function (line) {
         return line.split(',');
      });
      callback(result);
   });
}

app.listen(HTTP_PORT, () => {
   console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
app.get("/", (req, res, next) => {
   res.json({ "message": "Ok" })
});
app.get("/api/expenses", (req, res, next) => {
	res.json(findExpenses());
});
app.get("/api/expense/:id", (req, res, next) => {
   var id = req.params.id;
   res.json(findExpenseById(id));
});
app.post("/api/expense/", (req, res, next) => {
   var errors = []
   if (!req.body.item) {
      errors.push("No item specified");
   }
   var data = {
	  id: req.body.id,
      name: req.body.name,
      amount: req.body.amount,
      category: req.body.category,
      spend_date: req.body.spend_date,
   }
   insert(data);
   res.json(findExpenses());
})
app.put("/api/expense/:id", (req, res, next) => {
   var id = req.params.id;
   var errors = []
   if (!req.body.item) {
      errors.push("No item specified");
   }
   var data = {
      _id: id,
      name: req.body.name,
      amount: req.body.amount,
      category: req.body.category,
      spend_date: req.body.spend_date,
   }
   update(data);
   res.json(findExpenses());
})
app.delete("/api/expense/:id", (req, res, next) => {
   var id = req.params.id;
   remove(id);
   res.json(findExpenses());
})
app.use(function (req, res) {
   res.status(404);
});