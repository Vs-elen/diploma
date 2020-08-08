export default class GithubApi {
    constructor() {

    }

    getCommits = () => {
        return fetch('https://api.github.com/repos/Vs-elen/diploma/commits', {
            headers: {
                authorization: '8555799e57c7eb3f34e8a57efc0ab80084c86bb0'
            },
            per_page: 20
        })
        .then(res => {
            if (res.ok) {
                return res.json();

            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}