import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImages(imageName, page = 1) {
  const params = {
    key: '44394312-8b8108d4f3ae97cbc0f498bf3',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };
  try {
    const res = await axios.get('', { params });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}




