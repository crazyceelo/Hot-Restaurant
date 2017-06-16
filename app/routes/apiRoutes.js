var data = require('./../data/reservations.js');

module.exports = (app,path)=>{
    app.get("/api/tables", function(req, res){
        res.json(data.tables);
    });

    app.get("/api/waitlist", function(req, res){
        res.json(data.waitlist);
    });

    app.post("/api/tables", function(req, res){
        var newReservation = req.body;
        console.log(newReservation);
        console.log(data.tables.length);
        if(data.tables.length < 5){
            data.tables.push(newReservation);
            res.end("true");
        }
        else{
            data.waitlist.push(newReservation);
            res.end("false");
        }
        console.log(data.tables.length);
    });
        
    
};