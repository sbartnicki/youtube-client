import axios from 'axios';
// Api key removed before pushing to git, update for app to work
const KEY = 'edited';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
