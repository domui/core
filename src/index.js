export const render = (schema, target = document.body) => {
  const nodes = {};
  let compiled = false;

  const createState = (initialState) =>
    Proxy.revocable(initialState, {
      get: (store, name) => {
        const value = store[name].value || store[name];
        return compiled ? value : { name, value };
      },
      set: (store, prop, value) => {
        if (compiled) {
          nodes[prop].forEach((elem) => {
            elem.textContent = value;
          });
        }
        return Reflect.set(store, prop, value);
      },
    }).proxy;

  const mapProps = (props) =>
    props.map((prop) => {
      if (typeof prop === 'function') {
        return prop;
      }
      if (prop.value !== undefined) {
        const textNode = document.createTextNode(prop.value);
        if (nodes[prop.name]?.length) {
          nodes[prop.name].push(textNode);
        } else {
          nodes[prop.name] = [textNode];
        }

        return textNode;
      }

      return document.createTextNode(prop);
    });

  const renderCycle = (internalSchema) => {
    internalSchema.forEach((element) => {
      if (element.body) {
        const body = element.body(mapProps(element.props));
        target.appendChild(body);
      } else {
        renderCycle(
          element.render(element.state ? createState(element.state) : {}),
        );
      }
    });
  };

  renderCycle(schema.render(schema.state ? createState(schema.state) : {}));
  compiled = true;
};

export { default as Text } from './elements/Text/Text';
export { default as Button } from './elements/Button/Button';
