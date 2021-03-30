import attachCommonModifiers from '../../modifiers/common';

const ForEach = (content, callback) => ({
  type: 'foreach',
  content,
  callback,
  element: document.createElement('div'),
  ...attachCommonModifiers(),
  render(nodes) {
    content.value.map((item) => {
      const v = callback(item);
      return v.map((sv) => this.element.appendChild(sv.render(nodes)));
    });
    nodes[content.name] = {
      callback,
      element: this.element,
    };
    return this.element;
  },
});

export default ForEach;
