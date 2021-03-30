import attachCommonModifiers from '../../modifiers/common';

const VStack = (children) => ({
  children,
  type: 'vstack',
  element: document.createElement('div'),
  ...attachCommonModifiers(),
  render(nodes) {
    this.element.style.display = 'flex';
    this.element.style.flexDirection = 'column';
    this.element.style.justifyContent = 'space-between';
    children.map((v) => this.element.appendChild(v.render(nodes)));
    return this.element;
  },
});

export default VStack;
