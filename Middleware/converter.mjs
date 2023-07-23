import {readFileSync} from 'fs';
import {load} from 'js-yaml';

function parser(filepath) {
    try {
        // Ler o conteúdo do arquivo YAML
      const yamlData = readFileSync(filepath, 'utf8');
    
      // Converter o conteúdo do arquivo YAML em um array
      const Array = load(yamlData);
      return Array;
    
    } catch (error) {
        console.log(error);
    }
};

export default parser;

