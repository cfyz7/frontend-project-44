const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max); 
  const number = Math.floor(Math.random() * (max - min + 1)) + min; 
  return number;
};

export { randomNumber };