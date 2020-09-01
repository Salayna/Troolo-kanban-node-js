var express = require('express');
var ejs = require("ejs");
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('board', {title: 'Troolo', items:["Salayna", "Ibrahim", "Samba", "Bakary", "Lassana", "Deguene", "Abdoulaye"]})
})
app.listen(3000, () => {
  console.log("App running on Port 3000")
});
