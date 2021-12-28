export const addArtist = (artistId, artistName, userId) => {
  return fetch(`/user/${userId}/add-artist/${artistId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ artistId, artistName, userId }),
  }).then((res) => res.json());
};

export const getArtist = (discogsId) => {
  return fetch(`/artist/discogs/${discogsId}`).then((res) => res.json());
};

export const getUserArtists = (userId) => {
  return fetch(`/user/${userId}/artists`).then((res) => res.json());
};
