import handleProfileSignup from './6-final-user';

const main = async () => {
  const qeue = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
  console.log(qeue);
};

main();
