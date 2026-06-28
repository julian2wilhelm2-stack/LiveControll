function fetch_function(URL1, content, action) {
    return (Promiseconst = new Promise((resolve, reject) => {
        const request = new Request(URL1, {
            body: JSON.stringify(content),
            headers: {
                "Content-Type": "application/json", // Die Art der gesendeten Daten
            },
            method: action,
        });
        fetch(request)
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            })
            .catch((e) => reject(e));
    }));
}


document.addEventListener('DOMContentLoaded', function () {
    const nextMeetingCard = document.getElementById('ul_toDoList');

    const currentDate = new Date();
    const isoDate = currentDate.toISOString().split('T');
    let endpoint = "todolist"

    try {
        fetch_function('http://192.168.178.102:5678/webhook-test/ce2710d4-f1bb-4ce2-85f2-2d81a19c2f20', { day: isoDate, endpoint: endpoint }, 'POST')
            .then((data) => { console.log('To-Do List data:', data); 
                
            })
            .catch((error) => {
                console.error('Error fetching To-Do List:', error);
            });
    } catch (error) {
        console.error('Error:', error);
    }
});