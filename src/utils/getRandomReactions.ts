const getRandomReactions = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min) + min);

export const generateRandomReactions = () => ({
  thumbsUp: {count: getRandomReactions(), likes: []},
  thumbsDown: {count: getRandomReactions(), likes: []},
  hooray: {count: getRandomReactions(), likes: []},
  heart: {count: getRandomReactions(), likes: []},
  rocket: {count: getRandomReactions(), likes: []},
  eyes: {count: getRandomReactions(), likes: []},
});
