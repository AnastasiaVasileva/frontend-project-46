import _ from 'lodash'

const buildData = (data1, data2) => {
  const keys1 = Object.keys(data1)
  const keys2 = Object.keys(data2)
  const keys = _.union(keys1, keys2).sort() 

  return keys.map((key) => { 
    const value1 = data1[key] 
    const value2 = data2[key] 

    if (!Object.hasOwn(data1, key)) {
      return { type: 'added', key, value: data2[key] }
    }
    if (!Object.hasOwn(data2, key)) {
      return { type: 'deleted', key, value: data1[key] }
    }
    if (value1 === value2) {
      return { type: 'unchanged', key, value: data1[key] }
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { type: 'nested', key, value: buildData(value1, value2) }
    } 
    return {
      type: 'changed', key, value1: data1[key], value2: data2[key],
    }
  })
}

export default buildData
