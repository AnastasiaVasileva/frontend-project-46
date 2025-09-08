import { program } from 'commander';
import gendiff from '../index.js';

export default () => program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .version('0.8.0')
  .option('-f, --format [type]', 'Output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2, program.opts().format));
  })
  .parse();
