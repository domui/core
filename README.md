# 🧬 DOM UI

DOM UI is an innovative, exceptionally simple way to build web user interfaces. With a declarative syntax that’s easy to read and natural to write create super fast and lightweight UIs.

Read full [Docs here](https://github.com/domui/core) or get started with README below.

## Example Component

Example **stateless** component is super easy !

```
const component = {
  body: () => [
    Text('Hello World'),
  ],
};

render(component);
```

Example **stateful** component is super easy !

```
const component = {
  state: {
    pokemon: 'pikachu'
  },
  body: (state) => [
    Text('Hello: '),
    Text(state.pokemon),
    Button('Change', () => {
        state.pokemon = 'mew2'
    })
  ],
};

render(component);
```

# Getting started

Install `DOM UI` with:

```
npm i @domui/core
```

and use it:

```
import { Text, render } from '@domui/core';
```

# API

## Elements

### `Button`

Clickable button with label and action.

```
Button('Click me', () => {
    state.variable = true;
})
```

### `ForEach`

Looping element with `view` presentation.

```
ForEach(state.data, (item) => [
    Text(item)
])
```

### `HStack`

Horizontal stack view with `view` presentation. Useful for presenting items one under another.

```
HStack([
    Text('Hello'),
    Text('World')
])
```

### `Text`

Basic text component which renders string or value.

```
Text('string'),
Text(state.value)
```

### `VStack`

Vertical stack view with `view` presentation. Useful for presenting items side by side.

```
VStack([
    Text('Hello'),
    Text('World')
])
```

## Modifiers

You can change the styles of each element by using modifiers. You can set [all available CSS properties](https://www.w3schools.com/cssref/) to each element and even chain them. You can also use `theme` properties here.

```
Text('Hello')
    .padding(1)
    .backgroundColor('primary')
```

## Lifecycle hooks

Every `DOM UI` component has its own lifecycle. You can use lifecycle hooks to get inside each lifecycle stage.

### `onAppear`

Gets called after component appears inside DOM.

```
const component = {
  onAppear() {
    ...
  },
  body: () => [
    Text('Hello World'),
  ],
};
```

### `onStateChange`

Gets called before component state is going to be changed.

```
const component = {
  state: {
    value: 12
  },
  onStateChange(prop, prevValue, nextValue) {
    ...
  },
  body: () => [
    Text('Hello World'),
  ],
};
```
