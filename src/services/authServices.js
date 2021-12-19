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
