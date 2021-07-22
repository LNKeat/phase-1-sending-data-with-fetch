// Add your code here
function submitData(name, email){
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name, 
      email
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    addUsers(object);
  })
  .catch(function(error) {
    addMessage(error)
  });
}

function addUsers(usersObj){
  let body = document.querySelector('body')
  body.innerHTML = usersObj.id
}


function addMessage(error){
  let body = document.querySelector('body')
  body.innerHTML = error;
  // let alert = document.createElement('p');
  // alert.innerText = error;
  // document.querySelector('body').appendChild(alert)
}

