function getKeys(obj, prefix = '') {
  const keys = [];
  Object.keys(obj).forEach(key => {
    const prefixAndKey = (prefix !== '')
      ? prefix + '.' + key
      : key;
    if (obj[key] instanceof Array) {
      let index = 0;
      for (let item of obj[key]) {
        const itemPrefixAndKey = `${prefixAndKey}[${index}]`;
        keys.push(itemPrefixAndKey, ...getKeys(item, itemPrefixAndKey));
        index++;
      }
    } else if (typeof obj[key] === 'object') {
      keys.push(prefixAndKey, ...getKeys(obj[key], prefixAndKey));
    } else {
      keys.push(prefixAndKey);
    }
  });
  return keys;
}

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


console.log(JSON.stringify(obj, null, 2));
console.log(getKeys(obj));
