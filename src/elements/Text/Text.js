import attachCommonModifiers from '../../modifiers/common';

const Text = (text) => ({
  type: 'text',
  text,
  ...attachCommonModifiers(),
  element: document.createElement('span'),
  render(nodes) {
    const content = text.value !== undefined ? text.value : text;
    const textNode = document.createTextNode(content);
    this.element.appendChild(textNode);
    if (text.name) {
      if (nodes[text.name] && nodes[text.name].length) {
        nodes[text.name].push(textNode);
      } else {
        nodes[text.name] = [textNode];
      }
    }
    return this.element;
  },
});

export default Text;
