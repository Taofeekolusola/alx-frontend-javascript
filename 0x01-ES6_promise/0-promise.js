function getResponseFromAPI() {
    const apiCall = new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve('Data received successfully');
            } else {
                reject('Error: Unable to fetch data');
            }
        }, 2000);
    });

    return apiCall;
}
