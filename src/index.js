export const render = ({
  state: initialState = {},
  body,
  onAppear,
  onBeforeStateChange,
  onAfterStateChange,
}) => {
  const nodes = {};
  let compiled = false;

  const state = Proxy.revocable(initialState, {
    get: (target, name) => {
      const value = target[name];
      return compiled ? value : { name, value };
    },
    set: (target, prop, value) => {
      let newValue = value;
      if (compiled) {
        if (onBeforeStateChange) {
          newValue = onBeforeStateChange(prop, target[prop], value);
        }
        if (Array.isArray(newValue)) {
          const { element } = nodes[prop];
          element.innerHTML = null;
          newValue.map((item) =>
            nodes[prop]
              .callback(item)
              .map((sv) => element.appendChild(sv.render())),
          );
        } else {
          nodes[prop].map((elem) => {
            elem.textContent = newValue;
            return elem;
          });
        }
        if (onAfterStateChange) {
          onAfterStateChange(prop, newValue);
        }
      }
      return Reflect.set(target, prop, newValue);
    },
  });

  const component = body(state.proxy);

  component.map((elem) => {
    if (elem.type) {
      const parsed = elem.render(nodes);
      return document.body.appendChild(parsed);
    }
    return null;
  });

  compiled = true;
  if (onAppear) {
    onAppear(state.proxy);
  }
};

export { default as Text } from './elements/Text/Text';
export { default as Button } from './elements/Button/Button';
export { default as Image } from './elements/Image/Image';
export { default as ForEach } from './elements/ForEach/ForEach';
export { default as HStack } from './elements/HStack/HStack';
export { default as VStack } from './elements/VStack/VStack';
