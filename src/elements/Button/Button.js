import attachCommonModifiers from '../../modifiers/common';

export const Button = (...props) => ({
  props,
  ...attachCommonModifiers(),
  element: document.createElement('button'),
  body([label, action]) {
    this.element.appendChild(label);
    this.element.addEventListener('click', action);
    return this.element;
  },
});

export default Button;
