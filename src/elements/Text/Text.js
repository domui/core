import attachCommonModifiers from '../../modifiers/common';

const Text = (...props) => ({
  props,
  element: document.createElement('span'),
  ...attachCommonModifiers(),
  body([label]) {
    this.element.appendChild(label);
    return this.element;
  },
});

export default Text;
