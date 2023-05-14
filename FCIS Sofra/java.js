var x = localStorage.getItem("counter");


var limit = localStorage.getItem("limit")
var error1 = document.getElementById("errors1")
var error2 = document.getElementById("errors2")
var message = document.getElementById("message")

var usernames = [limit]
var passwords = [limit]
var usernamek = [limit]
var passwordk = [limit]
var rolek = [limit]
var roles = [limit]
var idk = [limit]
var ids = [limit]


for (var u = 0; u < limit; u++) {
    usernamek[u] = "username" + (u + 1) + ":"
}
for (var u = 0; u < limit; u++) {
    passwordk[u] = "password" + (u + 1) + ":"
}
for (var u = 0; u < limit; u++) {
    rolek[u]= "role" + (u+1) + ":"
}
for (var u = 0; u < limit; u++) {
    idk[u] = "id" + (u + 1) + ":"
}