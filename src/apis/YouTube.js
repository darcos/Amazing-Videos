import axios from 'axios';

const KEY = 'AIzaSyCUknaNXzNoCf1fW0YB4Q91w-F7jVbSiRI';

export default axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
        part: 'snippet', 
        maxResults: 5,
        key: KEY 
     } 
});
