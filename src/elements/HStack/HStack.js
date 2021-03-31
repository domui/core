import attachCommonModifiers from '../../modifiers/common';

const HStack = (children) => ({
  children,
  tag: 'div',
  ...attachCommonModifiers(),
  render(nodes) {
    this.element.style.display = 'flex';
    this.element.style.justifyContent = 'space-between';
    children.map((v) => this.element.appendChild(v.render(nodes)));
    return this.element;
  },
});

export default HStack;
