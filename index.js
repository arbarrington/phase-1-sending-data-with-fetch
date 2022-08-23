// Add your code here
function submitData(name, email) {
    let userObject = {name, email}
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(
            userObject
        )
    })
    .then(function(res)  
        {return res.json();})
    .then(function(object) 
        {document.body.innerHTML = object['id'];})
    .catch((err) => 
        {document.body.innerHTML = err.message})
}

// submitData();
// let userObject = {name, email}