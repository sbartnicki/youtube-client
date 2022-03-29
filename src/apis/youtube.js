import axios from 'axios';
// Api key removed before pushing to git, update for app to work
const KEY = 'AIzaSyC67EuzWy8bLKy5CHDu_JxjUgV1EiagEtA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
