const jsonData = {
    "versions": [
        "v1",
        "v2",
        "v3"
    ],
    "language": "NodeJS",
    "memoryUsage": 10.29,
    "maintainer": {
        "email": "ben@benrogo.net",
        "backend_id": "bare-02-201-8082"
    },
    "project": {
        "name": "bare-server-node",
        "description": "TOMPHTTP NodeJS Bare Server",
        "repository": "https://github.com/tomphttp/bare-server-node",
        "version": "2.0.4"
    }
};

// Format and display JSON data
document.getElementById('jsonData').textContent = JSON.stringify(jsonData, null, 4);
