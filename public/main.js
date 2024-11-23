let elm = document.querySelector('.p');

async function getCurrentUser() {
    return fetch('localhost:3000/api/current_user')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch user information');
            }
            return response.json();
        })
        .then((data) => {
            console.log('User information: ', data);
        })
        .catch((error) => {
            console.error('Error fetching user information: ', error);
            throw error;
        })
}

function addCurrentUser() {
    getCurrentUser()
        .then((data) => {
            const username = data.username;
            const elm = document.querySelector('.p');
            elm.textContent = 'Username: ' + username;
        })
        .catch((error) => {
            console.error('Error adding user: ', error);
        });
}

addCurrentUser();