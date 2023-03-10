import { urlFetch } from '../constants/indes'

export const getGithubUsers = async (user) => {
  const response = await fetch(`${urlFetch}${user}`, {
    method: 'GET'
  })
  const payload = response.json();

  return payload;
}