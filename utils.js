module.exports.random = (len) => {
  const random = Math.floor(Math.random() * len);
  return `${random}${Date.now()}`;
};
