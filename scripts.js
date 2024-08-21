document.addEventListener('DOMContentLoaded', () => {
    const profilePicForm = document.getElementById('profile-pic-form');
    const profilePicUpload = document.getElementById('profile-pic-upload');
    
    // Handle profile picture upload
    if (profilePicForm) {
        profilePicForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const file = profilePicUpload.files[0];
            if (file) {
                // Implement file upload logic here
                console.log('Profile picture uploaded:', file.name);
                // Update profile picture
                document.getElementById('profile-pic').src = URL.createObjectURL(file);
            }
        });
    }

    // Handle status form submission
    const statusForm = document.getElementById('status-form');
    if (statusForm) {
        statusForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusText = statusForm.querySelector('textarea').value;
            if (statusText) {
                // Implement status update logic here
                console.log('Status updated:', statusText);
                // Display the status on the home page (or wherever needed)
                const statusDisplay = document.getElementById('status-display');
                if (statusDisplay) {
                    statusDisplay.textContent = statusText;
                }
            }
        });
    }

    // Simulated notifications handling
    const notificationButton = document.getElementById('notification-button');
    if (notificationButton) {
        notificationButton.addEventListener('click', () => {
            // Implement notification retrieval logic here
            alert('You have new notifications!');
        });
    }

    // Simulated inbox access
    const inboxButton = document.getElementById('inbox-button');
    if (inboxButton) {
        inboxButton.addEventListener('click', () => {
            // Implement inbox retrieval logic here
            alert('Opening your inbox...');
        });
    }

    // Handle logout
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Implement logout logic here
            alert('Logging out...');
            window.location.href = 'login.html'; // Redirect to login page
        });
    }
});

