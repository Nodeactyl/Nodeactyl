const app = require('./application/index.js');

function login(HOST, KEY) {

}

module.exports = {
    Application: app
}

app.login("http://serverhouse.now.im:100", "RXecFteTovz9XE1CeMWHiVfKQ0cJEqMSJE3V1Mp0O9mWKpkc", (bool)=> {
    console.log(bool);
});

app.deleteUser("3").then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
})