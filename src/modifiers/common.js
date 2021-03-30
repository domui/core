const properties = window.getComputedStyle(document.createElement('div'));
const commonModifiers = (cb) => {
  const props = {};
  Object.keys(properties).forEach((key) => {
    function styleSetter(prop) {
      return cb.call(this, prop, key);
    }
    props[key] = styleSetter;
  });
  return props;
};

const attachCommonModifiers = () => {
  function callback(value, prop) {
    this.element.style[prop] = value;
    return this;
  }
  return commonModifiers(callback);
};

export default attachCommonModifiers;
