const fs = require('fs');
let types = fs.readFileSync('./src/types.ts', 'utf8');
types = types.replace(
  '  details: string;',
  '  details: string;\n  imageUrl?: string;'
);
fs.writeFileSync('./src/types.ts', types);
