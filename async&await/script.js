function myfunction(){
    var start = new Promise(function(resolve , reject){
        a = 5;
        if ( a == 5) {
            resolve();
        }else{
            reject();
        }
    });
    start.then(function(){
        console.log("Success, No error found");
    }).catch(function(){
        console.log("Error, some error found");
    });
}
myfunction();