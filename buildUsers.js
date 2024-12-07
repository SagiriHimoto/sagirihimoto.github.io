var users = [];
function randomLevel() {
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomstring = '';
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
randomstring = randomstring + '-'
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
randomstring = randomstring + '-'
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
var rnum = Math.floor(Math.random() * chars.length);
randomstring += chars.substring(rnum,rnum+1);
return randomstring;
}
function trufal() {
switch(Math.round(Math.random()*1)) {
    case 0:
        return true;
    break;
    case 1:
        return false;
    break;
    }
}

for (let i = 0; i < 55; i++) {
	users[i] = {};
    users[i].name = randomLevel();
    users[i].age = Math.floor(Math.random() * 99);
    users[i].status = trufal();
}