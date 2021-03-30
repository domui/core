import { ForEach, Text, HStack, Button, VStack, render } from '../src/index';

const t0 = performance.now();

const component = {
  state: {
    pokemon: 'pikachu',
    count: 1,
    data: ['siema', 'lol'],
  },
  onAppear(state) {
    state.count = 69;
  },
  onStateChange(prop, prev, next) {
    return next;
  },
  body: (state) => [
    HStack([
      VStack([
        Text(state.pokemon),
        Text('Lol').padding('15px').backgroundColor('blue'),
        Text('Hehe'),
      ]).width('150px'),

      Text('Lol'),
      Text(state.count),
      Text(state.pokemon),

      ForEach(state.data, (item) => [
        Text(item),
        Button('Click me', () => {
          state.pokemon = 'dupa';
          state.count += 2;
        })
          .backgroundColor('red')
          .padding('12px'),
      ]).backgroundColor('gray'),

      Text(state.count),
      Button(state.pokemon, () => {
        state.pokemon = 'dupa';
        state.count += 2;
        state.data = [...state.data];
      }),
    ]),
  ],
};

render(component);
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`); // eslint-disable-line
