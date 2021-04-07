const Text = (...props) => ({
  props,
  body([label]) {
    const element = document.createElement('span');
    return element.appendChild(label);
  },
});

export default Text;
