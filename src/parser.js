import yaml from 'js-yaml';

const parser = (data, format) => {
  const parsers = {
    json: JSON.parse,
    yml: yaml.load,
    yaml: yaml.load,
  };
  return parsers[format](data);
};

export default parser;
