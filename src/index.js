import path from 'path';
import fs from 'fs';
import process from 'process';
import parser from './parser.js';
import buildData from './compare.js';
import format from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parser(fs.readFileSync(getFullPath(filepath), 'utf-8'), extractFormat(filepath));

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);
  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  const dataForFormatter = buildData(data1, data2);
  const formattedData = format(dataForFormatter, formatName);
  return formattedData;
};

export default gendiff;
