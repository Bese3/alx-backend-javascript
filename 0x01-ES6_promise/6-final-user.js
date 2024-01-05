import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((res) => {
      const array = [];
      for (const it of res) {
        array.push({
          status: it.status,
          value: it.value || it.reason,
        });
      }
      return array;
    });
}
