# object-tree
A function that traverse the given object and returns the path (dot notation) for every key inside.

```javascript
const obj = {
  foo: {
    bar: {
      baz: 'Baz',
      arr: [1, 2, {
        one: 1,
        two: {
          three: 3.3,
        },
      }],
    },
    albert: 'einstein',
    leon: 'domingo',
  },
};

console.log(getKeys(obj));

[ 'foo',
  'foo.bar',
  'foo.bar.baz',
  'foo.bar.arr[0]',
  'foo.bar.arr[1]',
  'foo.bar.arr[2]',
  'foo.bar.arr[2].uno',
  'foo.bar.arr[2].dos',
  'foo.bar.arr[2].dos.tres',
  'foo.albert',
  'foo.leon' ]
```
