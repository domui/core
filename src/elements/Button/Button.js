export const Button = (...props) => ({
  props,
  body([label, action]) {
    const element = document.createElement('button');
    element.innerText = label.textContent;
    element.addEventListener('click', action);
    return element;
  },
});

export default Button;
