const express = require('express');
const app = express();
const port= 3000;

function sum(a, b) {
return a + b;
}
app.get('/',(req,res)=>{
    res.send('hola desde mi pipeline');
});
if (require.main === module){
    app.listen(port,()=>{
        console.log('corriendo en el puerto ${port}');
    });
}
module.exports = { sum };
