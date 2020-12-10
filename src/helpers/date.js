export const getCurrentTime = () => {
  const currentDate = new Date();
  const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  return currentTime;
};
