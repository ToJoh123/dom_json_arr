function createNode(element) {
   return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);}

const ul = document.querySelector('#todos');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.users);
        console.log("Visa första i json-objektet: " + data.users[0].userName);
        let users = data.users;

        // Returnerar json-bjekten genom att skapa en ny array med map()
        return users.map(function(user) {
            let li = createNode('li');
            li.innerHTML = user.userName + " " + user.userPassword;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

  
