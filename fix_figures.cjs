const fs = require('fs');

const constantsContent = fs.readFileSync('./src/constants.ts', 'utf8');

let updatedContent = constantsContent.replace(
  "details: 'Năm 1558 xin vào trấn thủ Thuận Hóa; đặt Dinh phủ tại Ái Tử, Trà Bát, Dinh Cát; áp dụng chính sách \"vỗ về dân chúng, thu dùng hào kiệt, sưu thuế nhẹ nhàng\". Khi mới đến Ái Tử, Nguyễn Hoàng được nhân dân dâng tặng 7 chum nước trong. Ông coi đó là điềm lành trời cho (7 chum nước = \"thất sơn hà\", nghĩa là có được sông núi).',",
  "achievements: ['Năm 1558 xin vào trấn thủ Thuận Hóa', 'Đặt Dinh phủ tại Ái Tử, Trà Bát, Dinh Cát', 'Áp dụng chính sách vỗ về dân chúng, thu dùng hào kiệt, sưu thuế nhẹ nhàng', 'Mở mang bờ cõi về phía Nam'],"
);

updatedContent = updatedContent.replace(
  "details: 'Quê ông ở làng Câu Nhi (xã Hải Chánh, huyện Hải Lăng). Sự đỗ đạt của ông mở đường cho truyền thống hiếu học rực rỡ của đất Quảng Trị với 14 vị Tiến sĩ khắc tên tại Văn Miếu Huế.',",
  "achievements: ['Đỗ Đệ nhất giáp Tiến sĩ cập thứ (Bảng nhãn) khoa Nhâm Tuất 1502', 'Vị Tiến sĩ đầu tiên của xứ Đàng Trong', 'Mở đường cho truyền thống hiếu học của đất Quảng Trị'],"
);

fs.writeFileSync('./src/constants.ts', updatedContent);
