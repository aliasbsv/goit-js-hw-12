//Function for HTTP requests

export function getImages(imageName) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams(
        {
        key: '44394312-8b8108d4f3ae97cbc0f498bf3',
        q: imageName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        }
    );
    const url = `${BASE_URL}${END_POINT}?${params}`;
    return fetch(url).then(res => res.json());
}