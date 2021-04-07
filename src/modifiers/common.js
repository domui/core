const properties = window.getComputedStyle(document.createElement('div'));

const attachCommonModifiers = () =>
  Object.keys(properties).reduce((result, key) => {
    result[key] = function styleModifier() {
      this.className = key;
      return this;
    };
    return result;
  }, {});

export default attachCommonModifiers;
