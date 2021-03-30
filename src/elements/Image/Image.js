const Image = (src) => ({
  type: 'image',
  src,
  render: () => {
    const imageElement = document.createElement('img');
    return imageElement;
  },
});

export default Image;
