const fs = require('fs');

const content = fs.readFileSync('./src/components/TimelineSection.tsx', 'utf8');

const section6 = `
      {/* VI. ĐỀ XUẤT BẢN ĐỒ, HÌNH ẢNH */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-[#8F1919] mb-6">VI. ĐỀ XUẤT BẢN ĐỒ, HÌNH ẢNH VÀ PROMPT TẠO ẢNH MINH HỌA</h2>
        <div className="space-y-6">
          <div className="bg-[#FCFAF5] p-6 rounded-lg border border-[#EADCB9]">
            <h3 className="font-bold text-[#261A12] mb-2">1. Hình 1: Nguyễn Hoàng đổi tên Phủ Tiên Bình thành Phủ Quảng Bình (1604)</h3>
            <p className="text-[#5C4A3C] italic text-sm pl-4 border-l-2 border-[#B38634] mb-4">
              <strong>Prompt:</strong> A detailed historical digital painting set in 1604 Vietnam. Lord Nguyen Hoang dressed in golden silk mandarin robes, surrounded by advisors and scribes inside an open wooden pavilion. A large calligraphic scroll with Chinese characters for 'Quang Binh' is being officially signed. Sunlight streaming through wooden blinds, traditional Vietnamese architecture, historical accuracy, educational book illustration --ar 16:9
            </p>
            <img src="/src/assets/images/quang_binh_1604_1789203993005.jpg" className="w-full rounded shadow-sm max-w-2xl mx-auto" alt="Nguyễn Hoàng đổi tên phủ Quảng Bình" />
          </div>

          <div className="bg-[#FCFAF5] p-6 rounded-lg border border-[#EADCB9]">
            <h3 className="font-bold text-[#261A12] mb-2">2. Hình 2: Sông Gianh thời kỳ Trịnh – Nguyễn phân tranh</h3>
            <p className="text-[#5C4A3C] italic text-sm pl-4 border-l-2 border-[#B38634] mb-4">
              <strong>Prompt:</strong> An artistic historical painting of the Gianh River in central Vietnam during the 17th century. On the north bank, Trinh soldiers in traditional red and black uniforms; on the south bank, Nguyen soldiers in yellow and green uniforms. Old wooden war boats floating on the river, mist over the green limestone mountains in the background, realistic style for high school history textbook --ar 16:9
            </p>
            <img src="/src/assets/images/song_gianh_trinh_nguyen_1789204016385.jpg" className="w-full rounded shadow-sm max-w-2xl mx-auto" alt="Sông Gianh Trịnh Nguyễn" />
          </div>

          <div className="bg-[#FCFAF5] p-6 rounded-lg border border-[#EADCB9]">
            <h3 className="font-bold text-[#261A12] mb-2">3. Hình 3: Cầu Hiền Lương - Sông Bến Hải vĩ tuyến 17</h3>
            <p className="text-[#5C4A3C] italic text-sm pl-4 border-l-2 border-[#B38634] mb-4">
              <strong>Prompt:</strong> Historical photo-style illustration of the Hien Luong Bridge over the Ben Hai River at the 17th Parallel in Quang Tri during the 1960s. The iron bridge is painted in two distinct colors divided in the middle. Peaceful blue water below, green banks, dramatic cloudy sky symbolizing division and unity hope --ar 16:9
            </p>
            <img src="/src/assets/images/cau_hien_luong_new_1789204036709.jpg" className="w-full rounded shadow-sm max-w-2xl mx-auto" alt="Cầu Hiền Lương vĩ tuyến 17" />
          </div>
        </div>
      </motion.div>
`;

const updatedContent = content.replace(
  '{/* VII. GIẢI THÍCH KHÁI NIỆM */}',
  `${section6}\n      {/* VII. GIẢI THÍCH KHÁI NIỆM */}`
);

fs.writeFileSync('./src/components/TimelineSection.tsx', updatedContent);
