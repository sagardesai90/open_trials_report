export default {
    getTrials: (topic, perPage) => {
        return fetch(`https://api.opentrials.net/v1/search?q=public_title:${topic}&page=1&per_page=${perPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(res => res.json())
    }
}