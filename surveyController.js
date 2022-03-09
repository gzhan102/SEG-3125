var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

function readData(fileName){
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

function writeData(info, fileName){
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

function combineCounts(name, value){
    info = readData(name);
    var found = 0;
    for (var i=0; i<info.length; i++){
        if (info[i][name] === value){
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0){
        info.push({[name] : value, count: 1});
    }
    writeData(info, name);
}

module.exports = function(app){
    app.get('/analysis', function(req, res){
        var color = readData("color");
        var margin = readData("margin");
        var model = readData("model");
        var position = readData("position");
        res.render(__dirname+'/lab1/showResults', {results: [color, margin, model, position]});
    });

    app.get('/niceSurvey', function(req, res){
        res.sendFile(__dirname+'/lab1/index.html');
    });

    app.post('/niceSurvey', urlencodedParser, function(req, res){
        console.log(req.body);
        var json = req.body;
        for (var key in json){
            console.log(key + ": " + json[key]);
            // if ((key === "color") && (json[key].length === 2)){
            //     for (var item in json[key]){
            //         combineCounts(key, json[key][item]);
            //     }
            // }
            // else {
                combineCounts(key, json[key]);
            // }
        }
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        res.sendFile(__dirname + "/lab1/index.html");
    });
};