const promise = new Promise(function(resolve, reject){
   reject("실패")
    
});

promise
    .then(function(data){
    console.log(data);

})
.catch(function(error){
    console.log(error);
});