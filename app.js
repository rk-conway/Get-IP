const ip_result = document.getElementById("ip_result");

window.onload = () => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ip_result.innerText = data.ip;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            ip_result.innerText = "Error fetching IP";
        });
};