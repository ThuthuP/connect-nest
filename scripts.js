const friends = [
    { name: "Anele", profilePic: "https://via.placeholder.com/40" },
    { name: "Ben", profilePic: "https://via.placeholder.com/40" },
    { name: "Anne", profilePic: "https://via.placeholder.com/40" },
    { name: "Kat", profilePic: "https://via.placeholder.com/40" },
    { name: "Minnie", profilePic: "https://via.placeholder.com/40" }
];

function login() {
    const username = document.getElementById('usernameInput').value;
    if (username.trim() === '') {
        alert("Please enter your name.");
        return;
    }
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('userName').textContent = username;
    document.getElementById('profileName').textContent = username;
    displayFriends();
}

function logout() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
}

function updateProfilePic() {
    const fileInput = document.getElementById('profilePicInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePic').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function updateStatus() {
    const status = document.getElementById('statusInput').value;
    if (status.trim() === '') {
        alert("Please enter a status.");
        return;
    }
    const statusList = document.getElementById('statusList');
    const statusItem = document.createElement('div');
    statusItem.textContent = status;
    statusList.appendChild(statusItem);
    document.getElementById('statusInput').value = '';
    document.getElementById('statusFeedback').textContent = 'Status updated successfully!';
    setTimeout(() => {
        document.getElementById('statusFeedback').textContent = '';
    }, 2000);
}

function displayFriends() {
    const friendsList = document.getElementById('friendsList');
    friendsList.innerHTML = '';
    friends.forEach(friend => {
        const friendItem = document.createElement('li');
        friendItem.innerHTML = `<img src="${friend.profilePic}" alt="${friend.name}"> ${friend.name}`;
        friendItem.onclick = () => selectFriend(friend.name);
        friendsList.appendChild(friendItem);
    });
}

function selectFriend(friendName) {
    document.getElementById('messageList').innerHTML = `<p>Selected friend: ${friendName}</p>`;
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput').value;
    if (messageInput.trim() === '') {
        alert("Please enter a message.");
        return;
    }
    const messageList = document.getElementById('messageList');
    const messageItem = document.createElement('p');
    messageItem.textContent = messageInput;
    messageList.appendChild(messageItem);
    document.getElementById('messageInput').value = '';
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open');
}

