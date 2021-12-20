import { discogsURL, APP_KEY, APP_SECRET } from '../config/constants.config';
import { goToRandomPage } from '../config/utils.config';

const param = '';
const credentials = `&key=${APP_KEY}&secret=${APP_SECRET}`;
const getAllUrl = `${discogsURL}/database/search?q=${param}&per_page=100${credentials}`;

export const getArtists = () => {
  return fetch(`${getAllUrl}&page=${goToRandomPage(1, 100)}`).then((res) =>
    res.json()
  );
};

export const getOne = (id) => {
  return fetch(`${discogsURL}/artists/${id}`).then((res) => res.json());
};

export const getArtistInfo = (artistName) => {
  return fetch(
    `${discogsURL}/database/search?q=${artistName}${credentials}`
  ).then((res) => res.json());
};
