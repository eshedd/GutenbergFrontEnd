var chatLogs  = document.getElementById("chatLogs");
class user {
    constructor(img,name,date){
     this.img = img;
     this.name = name;
     this.date = date;
    }
}

var Chad = new user('https://upload.wikimedia.org/wikipedia/commons/9/9c/BobbyBraun.jpg','Chad','6:00PM');
var Trent = new user('https://upload.wikimedia.org/wikipedia/commons/8/87/Johnny_Nguyen_22072007_BKKIFF.jpg','Trent','7:20AM');
var Fred = new user('https://upload.wikimedia.org/wikipedia/commons/7/7d/Koo.jpg','Fred','Yesterday');

var friends = [Chad, Trent, Fred];


function revealFriends(arr){
var things ="";
for (index in arr){
var stuff = `
<div class="container">
            <img src="${arr[index].img}" alt="Avatar">
            <span class="nametext">${arr[index].name}</span>
            <span class="time-right">${arr[index].date}</span>
          </div>`;

things += stuff;


}
return things;
}

chatLogs.innerHTML = revealFriends(friends);