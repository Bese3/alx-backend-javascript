import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  let u; let
    c;
  try {
    u = await uploadPhoto();
    c = await createUser();
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
  return {
    photo: u,
    user: c,
  };
};

export default asyncUploadUser;
