export const login = (username, password) => {
  return fetch(`/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
};

export const register = (username, password, confirmPassword) => {
  return fetch(`/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, confirmPassword }),
  }).then((res) => res.json());
};

export const logoutUser = () => {
  return fetch('/user/logout').then((res) => res.json());
};

export const editUser = (id, email, location, image) => {
  return fetch(`/user/${id}/edit`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, location, image }),
  }).then((res) => res.json());
};

export const getUser = (id) => {
  return fetch(`/user/${id}`).then((res) => res.json());
};

export const getUserContacts = (id) => {
  return fetch(`/user/${id}/contacts`).then((res) => res.json());
};

export const getUserFollowers = (id) => {
  return fetch(`/user/${id}/followers`).then((res) => res.json());
};

export const getAllUsers = () => {
  return fetch(`/user`).then((res) => res.json());
};

export const followToggle = (id, contactId) => {
  return fetch(`/user/${id}/follow-user/${contactId}`).then((res) =>
    res.json()
  );
};
