function getResponseFromAPI() {
    const apiCall = new Promise((resolve, reject) => {
	const success = true;

            if (success) {
                resolve('Data received successfully');
            } else {
                reject('Error: Unable to fetch data');
            }
    }
    return apiCall;
}
export default getResponseFromAPI;
