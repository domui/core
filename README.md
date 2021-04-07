# 🧬 DOM UI

`DOM UI` is an innovative, exceptionally simple way to build web user interfaces. With a declarative syntax that’s easy to read and natural to write create super fast and lightweight UIs. DOM UI was designed to be as fast and as small as possible - It has `zero dependencies`, bundle size is just under `1kb` and rendering 1000 row takes `~18ms`. Inspired by [Apple's SwiftUI](https://developer.apple.com/xcode/swiftui/).

Read full [Docs here](https://github.com/domui/core) or get started with README below.

## Example Component

Example **stateless** component is super easy !

```
import { Text, render } from '@domui/core';

const Component = () => ({
  render: () => [
    Text('Hello')
  ],
});

render(Component());
```

Example **stateless** component with props is super easy !

```
import { Text, render } from '@domui/core';

const Component = (name) => ({
  render: () => [
    Text(name)
  ],
});

render(Component());
```

Example **stateful** component is super easy !

```
import { Text, Button, render } from '@domui/core';

const Component = () => ({
  state: {
    pokemon: 'pikachu'
  },
  render: (state) => [
    Text('Hello: '),
    Text(state.pokemon),
    Button('Change', () => {
      state.pokemon = 'mew2'
    })
  ],
});

render(Component());
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

### `ForEach` (📝 Proposal)

Looping element which presents specified `view` for each item.

```
ForEach(state.data, (item) => [
  Text(item)
])
```

### `HStack` (📝 Proposal)

Horizontal stack element which presents `view`. Useful for presenting items side by side.

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

### `VStack` (📝 Proposal)

Vertical stack element which presents `view`. Useful for presenting items top to bottom.

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

### `onAppear()` (📝 Proposal)

Gets called after component appears inside DOM.

```
const Component = () => ({
  onAppear() {
    ...
  },
  render: () => [
    Text('Hello World'),
  ],
});
```

### `onBeforeStateChange(prop, prevValue, nextValue)` (📝 Proposal)

Gets called before component state is changed. You can `return` a new value that will overwrite `nextValue` and set it as next state.

```
const Component = () => ({
  state: {
    value: 12
  },
  onBeforeStateChange(prop, prevValue, nextValue) {
    return 69;
  },
  render: () => [
    Text('Hello World'),
  ],
});
```

### `onAfterStateChange(prop, nextValue)` (📝 Proposal)

Gets called after component state has changed.

```
const Component = () => ({
  state: {
    value: 12
  },
  onAfterStateChange(prop,nextValue) {
    ...
  },
  render: () => [
    Text('Hello World'),
  ],
});
```

# LICENSE

`DOM UI` is licensed under [MIT](https://github.com/domui/core/blob/main/LICENSE)
