import attachCommonModifiers from '../../modifiers/common';

export const Button = (...props) => ({
  props,
  element: document.createElement('button'),
  ...attachCommonModifiers(),
  body([label, action]) {
    this.element.appendChild(label);
    this.element.addEventListener('click', action);
    return this.element;
  },
});

export default Button;
