class Api {
    constructor({address, key}){
        this.address = address;
        this.key = key;
    }

    search({query}) {
        return fetch(`${this.address}/search/photos?query=${query}`, {
            headers: {
                Authorization: `Client-ID ${this.key}`
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}


const config = {
    address: 'https://api.unsplash.com',
    key: `T7A3W9wqRxj2zfF-mXkOeSDiXV266oxHqYPoJ3DUV64`
}

const api = new Api(config);

export default api;