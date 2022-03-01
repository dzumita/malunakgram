const fetchImages = async () => {
  const response = await fetch('https://unsplash.it/list');
  const images = await response.json();

  return images;
};

const getImageFromId = (id: number) =>
  `https://unsplash.it/${600}/${600}?image=${id}`;

export {fetchImages, getImageFromId};
