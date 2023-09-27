import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const tmp = [];
  const tmp1 = signUpUser(firstName, lastName)
    .then((response) => tmp.push({ status: 'success', value: response }))
    .catch((error) => tmp.push({ status: 'error', value: error }));

  const tmp2 = uploadPhoto(fileName)
    .then((response) => tmp.push({ status: 'success', value: response }))
    .catch((error) => tmp.push({ status: 'error', value: error }));

  return Promise.all([tmp1, tmp2]).finally(() => tmp);
}
