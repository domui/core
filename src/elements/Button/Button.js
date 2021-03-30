import attachCommonModifiers from '../../modifiers/common';

const Button = (label, action) => ({
  type: 'button',
  label,
  action,
  element: document.createElement('button'),
  ...attachCommonModifiers(),
  render(nodes) {
    const textNode = document.createTextNode(label.value || label);
    this.element.appendChild(textNode);
    this.element.addEventListener('click', action.bind(window));
    if (label.name) {
      if (nodes[label.name] && nodes[label.name].length) {
        nodes[label.name].push(textNode);
      } else {
        nodes[label.name] = [textNode];
      }
    }
    return this.element;
  },
});

export default Button;
