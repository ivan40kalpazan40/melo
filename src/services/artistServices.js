export const addArtist = (artistId, artistName, userId) => {
  return fetch(`/user/${userId}/add-artist/${artistId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ artistId, artistName, userId }),
  }).then((res) => res.json());
};
