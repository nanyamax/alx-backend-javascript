import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const tmp1 = uploadPhoto();
  const tmp2 = createUser();
  Promise.all([tmp1, tmp2])
    .then((response) =>
      console.log(
        `${response[0].body} ${response[1].firstName} ${response[1].lastName}`
      )
    )
    .catch(() => console.log('Signup system offline'));
}
