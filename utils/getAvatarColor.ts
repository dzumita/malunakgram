const getAvatarColor = (name: string) => {
  const hexCode = name
    .split('')
    .reduce((acc, char) => (acc * char.charCodeAt(0)) % 0xffffff, 1)
    .toString(16);

  return `#${'0'.repeat(6 - hexCode.length) + hexCode}`;
};

export default getAvatarColor;
