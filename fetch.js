let endpoint = `https://api.github.com/users`;
let options = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    },
};

// ================ consume data with Promise =================

let demoUl = document.querySelector('#users ul');

fetch(endpoint, options)
    .then((response) => response.json())
    .then((results) => {
        console.log(results);
        results.forEach((result) => {
            const li = document.createElement('li');
            const text = document.createTextNode(result.login);

            li.appendChild(text);

            demoUl.appendChild(li);
        });
    })
    .catch((error) => console.log(error));

// ============= consume data with async await =================
async function getUsersData() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();

        results.forEach((result) => {
            const li = document.createElement('li');
            const text = document.createTextNode(result.login);

            li.appendChild(text);
            demoUl.appendChild(li);
        });
    } catch (error) {
        console.log(error);
    }
}

getUsersData();
