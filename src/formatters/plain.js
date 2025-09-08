import _ from 'lodash';

const checkOfValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return value;
};

const plain = (dataOfObjects) => {
  const result = (diff, path = '') => diff.map((obj) => {
    const fullPath = path ? `${path}.${obj.key}` : `${obj.key}`;
    switch (obj.type) {
      case 'added':
        return `Property '${fullPath}' was added with value: ${checkOfValue(obj.value)}\n`;
      case 'deleted':
        return `Property '${fullPath}' was removed\n`;
      case 'changed':
        return `Property '${fullPath}' was updated. From ${checkOfValue(obj.value1)} to ${checkOfValue(obj.value2)}\n`;
      case 'nested':
        return result(obj.value, fullPath);
      case 'unchanged':
        return '';
      default:
        throw new Error('Something wrong');
    }
  }).join('');
  return result(dataOfObjects).trim();
};

export default plain;
