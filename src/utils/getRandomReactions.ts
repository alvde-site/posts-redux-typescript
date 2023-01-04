const getRandomReactions = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min) + min);

export const generateRandomReactions = () => ({
  thumbsUp: {count: getRandomReactions(), users: []},
  thumbsDown: {count: getRandomReactions(), users: []},
  hooray: {count: getRandomReactions(), users: []},
  heart: {count: getRandomReactions(), users: []},
  rocket: {count: getRandomReactions(), users: []},
  eyes: {count: getRandomReactions(), users: []},
});
