const express = require('express')
const path = require('path')
const lineReader = require('line-reader')
const PORT = process.env.PORT || 5000

var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/cost', determineCost);
        
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

function determineCost(req, res) {
    var type = req.query.letter;
    var weight = req.query.weigh;

    calculateRate(res, type, weight, this);
}

function calculateRate(res, type, weight) {

    let result = 0.0;

    switch (type) {
        case "stamped":
            if (weight <= 1.0)
                result = .55;
            else if (weight <= 2.0)
                result = .7;
            else if (weight <= 3.0)
                result = .85;
            else 
                result = 1.00;
            break;
        case "metered":
            if (weight <= 1.0)
                result = .5;
            else if (weight <= 2.0)
                result = .65;
            else if (weight <= 3.0)
                result = .8;
            else
                result = .95;
            break;
        case "flats":
            if (weight <= 1.0)
                result = 1.0;
            else if (weight <= 2.0)
                result = 1.15;
            else if (weight <= 3.0)
                result = 1.30;
            else if (weight <= 4.0)
                result = 1.45;
            else if (weight <= 5.0)
                result = 1.60;
            else if (weight <= 6.0)
                result = 1.75;
            else if (weight <= 7.0)
                result = 1.90;
            else if (weight <= 8.0)
                result = 2.05;
            else if (weight <= 9.0)
                result = 2.20;
            else if (weight <= 10.0)
                result = 2.35;
            else if (weight <= 11.0)
                result = 2.5;
            else if (weight <= 12.0)
                result = 2.65;
            else
                result = 2.80;
            break;
        case "retail":
            //result = calculateZone(type, weight);
            if (weight <= 1.0)
                result = 3.66;
            else if (weight <= 4.0)
                result = 3.66;
            else if (weight <= 8.0)
                result = 4.39;
            else if (weight <= 6.0)
                result = .85;
            else if (weight <= 12.0)
                result = 5.19;
            else
                result = 5.71;
            break;

    }
    res.render('pages/viewcost', { result: result } );
}

function calculateZone(type, weigh) {
    var zones = document.getElementById('zone').value;

    lineReader.eachLine('/retail.txt', function (line, last) {
        if (line.startsWith(weigh)) {
            var price = line.split('$');
            return price[parseInt(zones) - 2];
        }
    });
}