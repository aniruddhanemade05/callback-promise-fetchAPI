function racePromises(promises) {
    return Promise.race(promises);
}

const p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'First'));
const p2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Second'));
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 300, 'Third'));

racePromises([p1, p2, p3])
    .then(result => console.log('Resolved with:', result))
    .catch(error => console.log('Rejected with:', error));
