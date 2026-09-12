const fs = require('fs');
let content = fs.readFileSync('./src/constants.ts', 'utf8');

// Stage 3
content = content.replace(
  "id: 'stage-3',\n    time: '1558 – 1801',",
  "id: 'stage-3',\n    time: '1558 – 1801',\n    imageUrl: '/src/assets/images/chua_nguyen_hoang_1789201533507.jpg',"
);

// Stage 4
content = content.replace(
  "id: 'stage-4',\n    time: '1883 – 1888',",
  "id: 'stage-4',\n    time: '1883 – 1888',\n    imageUrl: '/src/assets/images/can_vuong_tan_so_1789201554291.jpg',"
);

// Stage 5
content = content.replace(
  "id: 'stage-5',\n    time: '1954 – 1975',",
  "id: 'stage-5',\n    time: '1954 – 1975',\n    imageUrl: '/src/assets/images/thanh_co_1972_1789201570919.jpg',"
);

fs.writeFileSync('./src/constants.ts', content);
