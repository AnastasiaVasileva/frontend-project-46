import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (fixtureFilename) => path.join(__dirname, '..', '__fixtures__', fixtureFilename);
const readFile = (fixtureFilename) => fs.readFileSync(getFixturePath(fixtureFilename), 'utf-8');

test('Сomparison of two files, format - stylish', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(readFile('test-stylish.txt'));
  expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'stylish')).toEqual(readFile('test-stylish.txt'));
});

test('Сomparison of two files, format - plain', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFile('test-plain.txt'));
  expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain')).toEqual(readFile('test-plain.txt'));
});

test('Сomparison of two files, format - json', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toEqual(readFile('test-json.txt'));
  expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'json')).toEqual(readFile('test-json.txt'));
});
