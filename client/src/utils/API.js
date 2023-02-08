import axios from 'axios';

const search = async (query) => {
  const options = {
    headers: { "X-Api-Key": "akpoUwvyp6/ajUQ13OXQDQ==QRzmUJALDEJyYMlq" },
  };
  await axios.get(
    `https://api.api-ninjas.com/v1/exercises?muscle=${query}`,
    options
  );
}
export default search;
