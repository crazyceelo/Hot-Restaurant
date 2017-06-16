var data = require('./../data/reservations.js');

module.exports = (app,path)=>{
    app.get("/api/tables", function(req, res){
        res.json(data.tables);
    });

    app.get("/api/waitlist", function(req, res){
        res.json(data.waitlist);
    });

    app.post("/api/tables", function(req, res){
        var newReservation = req.params.body;
        // if(data.tables.length > 5){
            
        // }
    });
        
    
};