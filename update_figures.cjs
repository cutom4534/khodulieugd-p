const fs = require('fs');

const constantsContent = fs.readFileSync('./src/constants.ts', 'utf8');

const newFigures = `  {
    id: 'nguyen-hoang',
    name: 'Đoan Quốc công Nguyễn Hoàng',
    birthYear: '1525',
    deathYear: '1613',
    description: 'Người mở đường cho sự nghiệp của các Chúa Nguyễn ở Đàng Trong. Chuyển đổi vùng đất địa đầu Quảng Trị thành trung tâm kinh tế - quân sự sầm uất, mở rộng lãnh thổ Việt Nam về phía Nam.',
    imageUrl: 'https://images.unsplash.com/photo-1596404764836-e82245b08df2?q=80&w=2938&auto=format&fit=crop',
    details: 'Năm 1558 xin vào trấn thủ Thuận Hóa; đặt Dinh phủ tại Ái Tử, Trà Bát, Dinh Cát; áp dụng chính sách "vỗ về dân chúng, thu dùng hào kiệt, sưu thuế nhẹ nhàng". Khi mới đến Ái Tử, Nguyễn Hoàng được nhân dân dâng tặng 7 chum nước trong. Ông coi đó là điềm lành trời cho (7 chum nước = "thất sơn hà", nghĩa là có được sông núi).',
  },
  {
    id: 'bui-duc-tai',
    name: 'Tiến sĩ Bùi Dục Tài',
    birthYear: '1477',
    deathYear: '1518',
    description: 'Danh nhân văn hóa, nhà giáo dục tiêu biểu. Đỗ Đệ nhất giáp Tiến sĩ cập thứ khoa Nhâm Tuất (1502). Là vị Tiến sĩ đầu tiên của xứ Đàng Trong.',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2787&auto=format&fit=crop',
    details: 'Quê ông ở làng Câu Nhi (xã Hải Chánh, huyện Hải Lăng). Sự đỗ đạt của ông mở đường cho truyền thống hiếu học rực rỡ của đất Quảng Trị với 14 vị Tiến sĩ khắc tên tại Văn Miếu Huế.',
  },`;

const updatedContent = constantsContent.replace(
  'export const HISTORICAL_FIGURES: HistoricalFigure[] = [',
  `export const HISTORICAL_FIGURES: HistoricalFigure[] = [\n${newFigures}`
);

fs.writeFileSync('./src/constants.ts', updatedContent);
