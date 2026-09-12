const fs = require('fs');

const constantsContent = fs.readFileSync('./src/constants.ts', 'utf8');

const newTimelineEvents = `export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'stage-1',
    time: 'Từ hàng nghìn năm TCN đến thế kỷ X',
    title: 'Thời Tiền – Sơ sử và Thời Hùng Vương – Bắc thuộc',
    description: 'Dấu vết cư dân cổ và sự sáp nhập tự nhiên',
    details: 'Thời Tiền – Sơ sử: Dấu vết cư dân cổ xuất hiện tại Khe Sanh, Cù Bai (Hướng Hóa), Cồn Tiên (Gio Linh), Trà Lộc (Hải Lăng), Minh Hóa, Quảng Ninh. Thời Hùng Vương – Âu Lạc: Vùng đất này thuộc bộ Việt Thường. Thời Bắc thuộc – Lâm Ấp: Từ năm 179 TCN – 192, thuộc quận Nhật Nam. Từ năm 192, thuộc Châu Ma Linh và Châu Ô của Vương quốc Chăm-pa.'
  },
  {
    id: 'stage-2',
    time: 'Năm 1069 – 1361',
    title: 'Tiến trình nhập vào lãnh thổ Đại Việt (Thời Lý – Trần – Lê)',
    description: 'Quá trình sáp nhập các Châu vào Đại Việt',
    details: 'Năm 1069: Vua Lý Thánh Tông thu nhận Châu Bố Chính, Địa Lý và Ma Linh. Năm 1075: Vua Lý Nhân Tông đổi tên các châu. Năm 1306: Vua Chăm-pa Chế Mân dâng Châu Ô làm sính lễ cưới Công chúa Huyền Trân. Năm 1361: Nhà Trần đổi châu Lâm Bình thành phủ Tân Bình; đến thời vua Lê Kính Tông đổi thành phủ Tiên Bình.'
  },
  {
    id: 'stage-3',
    time: '1558 – 1801',
    title: 'Thủ phủ Chúa Nguyễn, sự ra đời tên gọi Quảng Bình, Quảng Trị',
    description: 'Sự ra đời chính thức của hai tên gọi',
    details: 'Năm 1558: Nguyễn Hoàng đặt thủ phủ tại Dinh Ái Tử, Trà Bát và Dinh Cát. Năm 1604: Chúa Nguyễn Hoàng đổi tên phủ Tiên Bình thành phủ Quảng Bình. Thời Trịnh – Nguyễn phân tranh: Lấy sông Gianh làm ranh giới. Năm 1801: Triều Nguyễn thành lập Dinh Quảng Trị, tên gọi Quảng Trị chính thức xuất hiện.',
    imageUrl: '/src/assets/images/quang_binh_1604_1789203993005.jpg'
  },
  {
    id: 'stage-4',
    time: '1885 – 1975',
    title: 'Phong trào Cần vương và Kháng chiến chống Pháp, Mỹ',
    description: 'Chứng nhân của chia cắt và tinh thần quật cường',
    details: 'Ngày 13/7/1885: Vua Hàm Nghi ra Dụ Cần vương tại Căn cứ Tân Sở. Giai đoạn 1954 – 1975: Sông Bến Hải (vĩ tuyến 17) trở thành ranh giới quân sự tạm thời. Ngày 1/5/1972: Giải phóng hoàn toàn tỉnh Quảng Trị. 28/6 – 16/9/1972 (81 ngày đêm): Cuộc chiến đấu bảo vệ Thành cổ Quảng Trị kiên cường.',
    imageUrl: '/src/assets/images/cau_hien_luong_new_1789204036709.jpg'
  },
  {
    id: 'stage-5',
    time: 'Tháng 4/1976 – 1/7/2025',
    title: 'Hợp nhất, tái lập và phát triển hiện đại',
    description: 'Hợp nhất sức mạnh phát triển kinh tế mới',
    details: 'Tháng 4/1976: Quảng Bình, Vĩnh Linh, Quảng Trị, Thừa Thiên hợp nhất thành tỉnh Bình Trị Thiên. Ngày 1/7/1989: Chia tách tỉnh, tái lập Quảng Bình, Quảng Trị và Thừa Thiên Huế. Ngày 1/7/2025: Tỉnh Quảng Bình và Quảng Trị được hợp nhất thành tỉnh Quảng Trị theo Nghị quyết số 202/2025/QH15 của Quốc hội.'
  }
];`

const startIndex = constantsContent.indexOf('export const TIMELINE_EVENTS');
if (startIndex !== -1) {
  const updatedContent = constantsContent.substring(0, startIndex) + newTimelineEvents + '\n';
  fs.writeFileSync('./src/constants.ts', updatedContent);
}

