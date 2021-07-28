// var result = fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=>{return response.json();} )
// .then(user_data=>{console.log(user_data)});

// console.log(result);

async function login(username,password){
    await fetch('http://localhost:3000/login/user',{
        method:"POST",
        body:JSON.stringify({username:username,password:password}),
        headers:{
            "Content-Type" : "application/json;charset =UTF-8"
        }
    })
    .then(res=>console.log(res));
}
function performlogin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    //console.log(username,password);
    login(username,password);
    
}












// var req = new XMLHttpRequest();
// req.open('GET','https://jsonplaceholder.typicode.com/users');
// req.send();
// req.onload = ()=>{
//     console.log(req);
//     if(req.status===200){
//         //document.getElementsByClassName('json-data').innerHTML = req.response;
//         let data = JSON.parse(req.response);
//         console.log(data);
//         var todo = document.getElementById('json-data');
//         for(let i=0;i<data.length;i++){
//             let ele = document.createElement('li');
//             let text = document.createTextNode(`${data[i].name}`);
//             ele.appendChild(text); 
//             todo.appendChild(ele);
//         }
//     }
//     else{
//         // document.getElementsByClassName('json-data').innerHTML = `${req.status}`;
//         console.log(`error ${req.status} ${req.statusText}`);
//     }
// }