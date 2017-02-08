const baseUrl = 'https://app.cybeadon.com/'

const fetchOptions = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

export const getVideoInfo = (videoUrl) => {
    const url = new URL(baseUrl + 'ytube');
    const params = { url: videoUrl, secret: 'remag' };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
    return fetch(url, fetchOptions)
        .then((res) => res.json())
        .catch((error) => console.log(error));
}