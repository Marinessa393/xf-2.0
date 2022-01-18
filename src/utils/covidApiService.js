import axios from 'axios';

export const getCurrentSummary = async() => {
  await axios.get('https://api.covid19api.com/summary');
};

export const getInfoByCountry = async(country) => {
  await axios.get(`https://api.covid19api.com/dayone/country/${country}`)
};

export const getStatsByCountry = async(country, from, to) => {
  await axios.get(`https://api.covid19api.com/country/${country}?from=${from}&to=${to}`)
};
