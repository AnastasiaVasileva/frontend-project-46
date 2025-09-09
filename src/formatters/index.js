import plain from './plain.js'
import stylish from './stylish.js'
import json from './json.js'

const format = (data, typeOfFormatters) => {
  const formatters = {
    stylish,
    plain,
    json,
  }
  return formatters[typeOfFormatters](data)
}

export default format
