module.exports = (app,path)=>{
    app.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'../views/index.html'));
    });

    app.get('/tables',(req,res)=>{
        res.sendFile(path.join(__dirname,'../views/tables.html'));
    });

    app.get('/reserve',(req,res)=>{
        res.sendFile(path.join(__dirname,'../views/reservation.html'));
    });
};