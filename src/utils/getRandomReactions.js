const getRandomReactions = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min) + min);

export const generateRandomReactions = () => ({
  thumbsUp: getRandomReactions(),
  thumbsDown: getRandomReactions(),
  hooray: getRandomReactions(),
  heart: getRandomReactions(),
  rocket: getRandomReactions(),
  eyes: getRandomReactions(),
});
