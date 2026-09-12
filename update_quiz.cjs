const fs = require('fs');

const constantsContent = fs.readFileSync('./src/constants.ts', 'utf8');

const newQuestions = `  {
    id: 'pdf-q1',
    question: 'Năm 1306, Châu Ô trở thành lãnh thổ Đại Việt gắn liền với sự kiện nào?',
    options: ['A. Vua Lý Thái Tổ dời đô về Thăng Long.', 'B. Công chúa Huyền Trân kết duyên cùng Vua Chăm-pa Chế Mân.', 'C. Nguyễn Hoàng vào trấn thủ Thuận Hóa.', 'D. Vua Hàm Nghi ra Dụ Cần vương.'],
    correctAnswer: 1,
    explanation: 'Năm 1306, Vua Chăm-pa là Chế Mân dâng Châu Ô (bao gồm Triệu Phong, Hải Lăng, TX Quảng Trị) làm sính lễ cưới Công chúa Huyền Trân.',
    category: 'sites'
  },
  {
    id: 'pdf-q2',
    question: 'Chúa Nguyễn Hoàng đã đặt thủ phủ đầu tiên tại đâu khi vào trấn thủ Thuận Hóa năm 1558?',
    options: ['A. Dinh Cát.', 'B. Dinh Trà Bát.', 'C. Dinh Ái Tử.', 'D. Thành Cổ Quảng Trị.'],
    correctAnswer: 2,
    explanation: 'Năm 1558, Nguyễn Hoàng vào trấn thủ Thuận Hóa. Ông đặt thủ phủ đầu tiên tại Dinh Ái Tử (1558 – 1570).',
    category: 'sites'
  },
  {
    id: 'pdf-q3',
    question: 'Tên gọi chính thức "Dinh Quảng Trị" bắt đầu xuất hiện từ năm nào?',
    options: ['A. 1306.', 'B. 1558.', 'C. 1801.', 'D. 1885.'],
    correctAnswer: 2,
    explanation: 'Năm 1801, nhà Nguyễn lập Dinh Quảng Trị (tên gọi Quảng Trị chính thức xuất hiện).',
    category: 'sites'
  },
  {
    id: 'pdf-q4',
    question: 'Dụ Cần vương do Vua Hàm Nghi ban hành ngày 13/7/1885 tại căn cứ lịch sử nào?',
    options: ['A. Căn cứ Ba Lòng.', 'B. Căn cứ Tân Sở.', 'C. Căn cứ Đakrông.', 'D. Căn cứ Khe Sanh.'],
    correctAnswer: 1,
    explanation: 'Ngày 13/7/1885, vua Hàm Nghi hạ Dụ Cần vương tại Căn cứ Tân Sở kêu gọi sĩ phu và nhân dân giúp vua cứu nước.',
    category: 'sites'
  },
  {
    id: 'pdf-q5',
    question: 'Tỉnh Quảng Trị được hoàn toàn giải phóng vào mốc thời gian nào trong năm 1972?',
    options: ['A. Ngày 30/3/1972.', 'B. Ngày 1/5/1972.', 'C. Ngày 28/6/1972.', 'D. Ngày 16/9/1972.'],
    correctAnswer: 1,
    explanation: 'Ngày 1/5/1972: Quân và dân ta đập tan tuyến phòng thủ đập vỡ "con đê ngăn chặn" của Mỹ - Ngụy, giải phóng hoàn toàn tỉnh Quảng Trị.',
    category: 'battles'
  },
  {
    id: 'pdf-q6',
    question: 'Việc Nguyễn Hoàng chọn Quảng Trị làm nơi đóng Dinh phủ đầu tiên thể hiện tầm nhìn chiến lược nào?',
    options: ['A. Tránh sự nhòm ngó của Chúa Trịnh, dựa vào địa thế núi sông để xây dựng lực lượng.', 'B. Muốn nhanh chóng tiến quân ra Bắc đánh chiếm Thăng Long.', 'C. Tập trung phát triển kinh tế biển mà không quan tâm phòng thủ.', 'D. Rút lui hoàn toàn khỏi đời sống chính trị Đại Việt.'],
    correctAnswer: 0,
    explanation: 'Quảng Trị là nơi đứng chân ban đầu, giúp Nguyễn Hoàng thực hiện sách lược "tự cường", dựa vào địa thế núi sông hiểm trở và giao thông thuận lợi.',
    category: 'figures'
  },
  {
    id: 'pdf-q7',
    question: 'Lý do quan trọng nhất phe chủ chiến chọn Tân Sở làm "Kinh đô dã chiến" năm 1885 là gì?',
    options: ['A. Nằm ở trung tâm thành phố lớn.', 'B. Địa hình gò đồi hiểm trở, có đường thượng đạo lên Lao Bảo sang Lào hoặc ra Bắc.', 'C. Đã có sẵn thành đao kiên cố bằng bê tông cốt thép.', 'D. Gần các căn cứ quân sự của Pháp để dễ đàm phán.'],
    correctAnswer: 1,
    explanation: 'Tân Sở có vị trí hiểm yếu, địa hình gò đồi, đường thượng đạo thuận tiện thoái lui và hậu cần tốt nên được chọn làm Kinh đô dã chiến.',
    category: 'sites'
  },
  {
    id: 'pdf-q8',
    question: 'Cuộc chiến đấu 81 ngày đêm bảo vệ Thành cổ Quảng Trị (1972) có tác động ngoại giao trực tiếp nào?',
    options: ['A. Buộc Pháp phải ký Hiệp định Giơ-ne-vơ.', 'B. Giữ vững thế chủ động, kìm chân lực lượng cơ động địch, tạo lợi thế quyết định trên bàn đàm phán Paris.', 'C. Kết thúc hoàn toàn cuộc kháng chiến chống Mỹ ngay trong năm 1972.', 'D. Đưa Quảng Trị trở thành thủ đô tạm thời của thế giới.'],
    correctAnswer: 1,
    explanation: 'Ta bảo vệ vùng giải phóng, kìm chân lực lượng cơ động chiến lược của địch, tạo thế tựa vững chắc cho đàm phán Paris đi đến ký kết năm 1973.',
    category: 'battles'
  },
  {
    id: 'pdf-q9',
    question: 'Ý nghĩa lịch sử lớn nhất của việc giải phóng Quảng Trị ngày 1/5/1972 là gì?',
    options: ['A. Đập tan "con đê ngăn chặn" vững chắc nhất của Mỹ - Ngụy, giải phóng tỉnh đầu tiên ở miền Nam.', 'B. Mở ra cơ hội giao lưu thương mại quốc tế ngay lập tức.', 'C. Chấm dứt hoàn toàn sự chia cắt hai miền Nam - Bắc.', 'D. Làm cho thực dân Pháp phải rút quân về nước.'],
    correctAnswer: 0,
    explanation: 'Sự kiện 1/5/1972 đã đập tan tuyến phòng thủ mạnh nhất của địch, đưa Quảng Trị trở thành tỉnh đầu tiên ở miền Nam được giải phóng hoàn toàn.',
    category: 'battles'
  },
  {
    id: 'pdf-q10',
    question: 'Truyền thống hiếu học của Quảng Trị được minh chứng rõ nhất qua sự kiện phong kiến nào?',
    options: ['A. Bùi Dục Tài đỗ Tiến sĩ năm 1502 - Mở đầu danh hiệu Tiến sĩ cho cả vùng Đàng Trong.', 'B. Việc xây dựng hệ thống trường công lập thời Bắc thuộc.', 'C. Việc tất cả nhân dân đều được đi học tự do dưới thời Pháp thuộc.', 'D. Sự ra đời của các trò chuyện Trạng Vĩnh Hoàng.'],
    correctAnswer: 0,
    explanation: 'Bùi Dục Tài (quê Hải Lăng) đỗ Đệ nhất giáp Tiến sĩ cập đệ năm 1502, là vị Tiến sĩ đầu tiên của xứ Đàng Trong, mở đầu truyền thống hiếu học rực rỡ.',
    category: 'figures'
  },`;

const updatedContent = constantsContent.replace(
  'export const QUIZ_QUESTIONS: QuizQuestion[] = [',
  `export const QUIZ_QUESTIONS: QuizQuestion[] = [\n${newQuestions}`
);

fs.writeFileSync('./src/constants.ts', updatedContent);
