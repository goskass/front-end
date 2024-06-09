document.querySelector('#room-name-input').focus();
document.querySelector('#room-name-input').onkeyup = function(e) {
    if (e.keyCode === 13) {
        document.querySelector('#room-name-submit').click();
    }
};

document.querySelector('#room-name-submit').onclick = function(e) {
    var roomName = document.querySelector('#room-name-input').value;
    if (/^[a-z0-9\s]+$/i.test(roomName)) {
        window.location.pathname = '/appchat/' + roomName + '/';
    } else { alert('Wrong Room name! Latin letters, numbers and spaces only'); }
};

function roomsList(rooms) {
    if (rooms.length != 0) {
        roomsOpened = '';
        for (let r of rooms) {
            roomsOpened += `<p><a href="` + r + `/">` + r + `</a></p>`;
        }
    } else {
        roomsOpened = `Комнат еще нет. Создайте свою!`
    };
    document.getElementById("rooms-list").innerHTML = roomsOpened;
}

async function roomsLoader(callback) {
    const roomsUpload = await fetch('./roomsupdate/')
            .then(response => response.json());
    callback(roomsUpload);
};

rooms = JSON.parse(document.getElementById('rooms').textContent);
roomsList(rooms);
setTimeout(roomsLoader, 1000, roomsList);
setInterval(roomsLoader, 30000, roomsList);
