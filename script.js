var fs=require('fs');
var yaml = require('js-yaml');

try{
    var datos=yaml.load(fs.readFileSync('web/datos.yaml','utf-8'));
    console.log(datos);
}catch(err){
    console.log('Error: ' + err);
}