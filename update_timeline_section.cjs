const fs = require('fs');

const timelineContent = `import React from 'react';
import { motion } from 'motion/react';
import { TIMELINE_EVENTS } from '../constants';
import { BookOpen, Map, Clock, AlertTriangle, Lightbulb, CheckCircle2, Navigation } from 'lucide-react';

export default function TimelineSection() {
  return (
    <div className="max-w-5xl mx-auto w-full pb-16 space-y-12 text-[#261A12]">
      
      {/* HEADER & LỜI MỞ ĐẦU */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#FCFAF5] p-8 md:p-12 rounded-lg border border-[#EADCB9] shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <BookOpen size={120} />
        </div>
        <div className="text-center mb-10 relative z-10">
          <span className="text-[#B38634] text-xs md:text-sm font-bold tracking-[0.3em] uppercase font-serif block mb-3">Tài liệu học tập lịch sử địa phương lớp 10</span>
          <h1 className="serif text-3xl md:text-5xl font-bold text-[#8F1919] mb-6 leading-tight">
            Tiến Trình Lịch Sử Vùng Đất <br/> Quảng Bình – Quảng Trị
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#B38634] to-transparent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto font-serif text-[#5C4A3C] leading-relaxed space-y-4 text-base md:text-lg">
          <p className="italic text-center font-medium text-xl mb-6">
            "Trên cái giang sơn dằng dặc như chiếc võng này, có một điểm chùng quằn xuống, thắt lại, mừng như là hội tụ, đau như là chia li..."
          </p>
          <p className="text-justify">
            Vùng đất Quảng Bình – Quảng Trị là chứng nhân lịch sử đặc biệt của dân tộc Việt Nam. Nơi đây từng là ranh giới phân chia Đàng Trong – Đàng Ngoài thời Trịnh – Nguyễn phân tranh (lấy sông Gianh làm ranh giới), là ranh giới chia cắt hai miền Nam – Bắc thời kỳ chống Mỹ (lấy sông Bến Hải – vĩ tuyến 17 làm ranh giới), đồng thời cũng là nơi thể hiện tinh thần đoàn kết, gắn bó keo sơn qua các thời kỳ hợp nhất và phát triển.
          </p>
        </div>
      </motion.div>

      {/* BỐI CẢNH VÀ VỊ THẾ CHIẾN LƯỢC */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-[#FAF6EC] p-8 rounded-lg border border-[#EADCB9] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Map className="text-[#B38634]" size={28} />
            <h2 className="serif text-2xl font-bold text-[#261A12]">Vị trí địa - chính trị xung yếu</h2>
          </div>
          <ul className="space-y-4 font-serif text-[#5C4A3C]">
            <li className="flex gap-3"><span className="text-[#8F1919] mt-1">❖</span> <strong>Điểm thắt hẹp nhất lãnh thổ:</strong> Nằm ở phần hẹp nhất của bản đồ Việt Nam, phía Tây dựa vào dãy Trường Sơn, phía Đông hướng ra Biển Đông.</li>
            <li className="flex gap-3"><span className="text-[#8F1919] mt-1">❖</span> <strong>Hành lang giao thương và quân sự:</strong> Nơi có các cửa sông quan trọng (sông Gianh, sông Bến Hải, sông Thạch Hãn, Cửa Việt, Cửa Tùng) và các cửa khẩu quốc tế (Lao Bảo, Cha Lo), kết nối hành lang kinh tế Đông – Tây.</li>
          </ul>
        </div>

        <div className="bg-[#FAF6EC] p-8 rounded-lg border border-[#EADCB9] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Navigation className="text-[#B38634]" size={28} />
            <h2 className="serif text-2xl font-bold text-[#261A12]">Ranh giới lịch sử qua các thời kỳ</h2>
          </div>
          <ul className="space-y-4 font-serif text-[#5C4A3C]">
            <li className="flex gap-3"><span className="text-[#8F1919] mt-1">❖</span> <strong>Ranh giới Chăm-pa – Đại Việt:</strong> Trước thế kỷ XI – XIV, vùng đất này là nơi tiếp giáp văn hóa và lãnh thổ giữa Đại Việt và Vương quốc Chăm-pa.</li>
            <li className="flex gap-3"><span className="text-[#8F1919] mt-1">❖</span> <strong>Ranh giới Trịnh – Nguyễn:</strong> Trong thế kỷ XVII – XVIII, sông Gianh trở thành ranh giới phân chia Bắc Bố Chính và Nam Bố Chính.</li>
            <li className="flex gap-3"><span className="text-[#8F1919] mt-1">❖</span> <strong>Ranh giới Nam – Bắc (1954 – 1975):</strong> Sông Bến Hải (vĩ tuyến 17) trở thành giới tuyến quân sự tạm thời chia cắt hai miền Tổ quốc.</li>
          </ul>
        </div>
      </motion.div>

      {/* TIMELINE */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-8"
      >
        <div className="text-center mb-12">
          <h2 className="serif text-3xl font-bold text-[#8F1919] mb-4">Diễn Biến Lịch Sử Theo Dòng Thời Gian</h2>
          <div className="w-16 h-1 bg-[#B38634] mx-auto" />
        </div>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#B38634]/50 via-[#B38634]/30 to-transparent -translate-x-1/2" />
          
          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={event.id} className={\`relative flex items-start gap-6 md:gap-0 \${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}\`}>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#FAF6EC] border-[3px] border-[#8F1919] shadow-sm transform -translate-x-1/2 mt-1.5 z-10" />
                
                <div className={\`flex-1 pl-12 md:pl-0 \${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}\`}>
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-[#FCFAF5] p-6 rounded-md border border-[#EADCB9] shadow-sm relative group overflow-hidden"
                  >
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#B38634]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="inline-block px-3 py-1 bg-[#FAF6EC] border border-[#EADCB9] text-[#B38634] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4 font-serif">
                      {event.time}
                    </span>
                    <h3 className="serif text-xl md:text-2xl font-bold text-[#261A12] mb-3 group-hover:text-[#8F1919] transition-colors">{event.title}</h3>
                    <p className="text-sm font-bold text-[#8C7A6B] uppercase tracking-wide mb-3 font-serif">{event.description}</p>
                    <p className="text-sm text-[#5C4A3C] leading-relaxed italic font-serif opacity-90 text-left mb-4">{event.details}</p>
                    {event.imageUrl && (
                      <div className="mt-4 rounded border border-[#EADCB9]/50 overflow-hidden shadow-inner">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title}
                          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* BẢNG SO SÁNH */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-12"
      >
        <div className="text-center mb-8">
          <h2 className="serif text-3xl font-bold text-[#8F1919] mb-4">Các Mốc Thay Đổi Đơn Vị Hành Chính</h2>
          <div className="w-16 h-1 bg-[#B38634] mx-auto" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-serif border-collapse">
            <thead>
              <tr className="bg-[#EADCB9]/40 text-[#261A12]">
                <th className="p-4 border border-[#EADCB9] whitespace-nowrap font-bold">Thời kỳ</th>
                <th className="p-4 border border-[#EADCB9] font-bold w-1/4">Quảng Bình</th>
                <th className="p-4 border border-[#EADCB9] font-bold w-1/4">Quảng Trị</th>
                <th className="p-4 border border-[#EADCB9] font-bold w-1/3">Ý nghĩa lịch sử / Đặc điểm</th>
              </tr>
            </thead>
            <tbody className="bg-[#FCFAF5]">
              <tr>
                <td className="p-4 border border-[#EADCB9] font-bold text-[#8F1919]">Thời Lý <br/><span className="text-sm font-normal text-[#5C4A3C]">(1069 - 1075)</span></td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Châu Bố Chính, Châu Địa Lý</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Châu Ma Linh</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Bước đầu chính thức nhập vào lãnh thổ Đại Việt.</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#EADCB9] font-bold text-[#8F1919]">Thời Trần - Lê sơ</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Châu Lâm Bình ➔ Phủ Tân Bình / Tiên Bình</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Châu Minh Linh, Châu Ô</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Mở rộng đất đai về phía Nam qua cuộc hôn nhân Chế Mân - Huyền Trân (1306).</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#EADCB9] font-bold text-[#8F1919]">Thời Chúa Nguyễn <br/><span className="text-sm font-normal text-[#5C4A3C]">(1604 / 1801)</span></td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Phủ Quảng Bình <br/><span className="italic text-xs">(Xuất hiện 1604)</span></td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Dinh Ái Tử / Dinh Quảng Trị <br/><span className="italic text-xs">(Xuất hiện 1801)</span></td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Trung tâm mở cõi Đàng Trong của Chúa Nguyễn Hoàng.</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#EADCB9] font-bold text-[#8F1919]">Giai đoạn 1976 – 1989</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Thuộc tỉnh Bình Trị Thiên</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Thuộc tỉnh Bình Trị Thiên</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Hợp nhất sức mạnh phục hồi kinh tế sau chiến tranh.</td>
              </tr>
              <tr>
                <td className="p-4 border border-[#EADCB9] font-bold text-[#8F1919]">Từ ngày 1/7/2025</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Hợp nhất thành tỉnh Quảng Trị</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Hợp nhất thành tỉnh Quảng Trị</td>
                <td className="p-4 border border-[#EADCB9] text-[#5C4A3C]">Sáp nhập theo Nghị quyết số 202/2025/QH15 để phát triển không gian kinh tế mới.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* KHÁI NIỆM & 8 ĐIỀU */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12">
        
        {/* Khái niệm */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FAF6EC] p-8 rounded-lg border border-[#EADCB9] shadow-sm flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-[#EADCB9] pb-4">
            <AlertTriangle className="text-[#8F1919]" size={24} />
            <h2 className="serif text-xl font-bold text-[#261A12]">Giải Thích Khái Niệm Dễ Nhầm Lẫn</h2>
          </div>
          <div className="space-y-6 font-serif text-[#5C4A3C] flex-1">
            <div>
              <h3 className="font-bold text-[#8F1919] mb-2 text-lg">1. Phân biệt "Nội Bố Chính" và "Ngoại Bố Chính"</h3>
              <p className="text-sm leading-relaxed mb-4">
                Trong thời kỳ Trịnh – Nguyễn phân tranh, đất Bố Chính (Quảng Bình) bị chia làm hai phần lấy sông Gianh làm ranh giới: <strong>Bắc Bố Chính (Ngoại Bố Chính)</strong> do Chúa Trịnh quản lý; <strong>Nam Bố Chính (Nội Bố Chính)</strong> do Chúa Nguyễn quản lý.
              </p>
              <div className="rounded border border-[#EADCB9]/50 overflow-hidden shadow-inner">
                <img 
                  src="/src/assets/images/song_gianh_trinh_nguyen_1789204016385.jpg" 
                  alt="Sông Gianh thời kỳ Trịnh – Nguyễn phân tranh"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="pt-4 border-t border-[#EADCB9]/50">
              <h3 className="font-bold text-[#8F1919] mb-2 text-lg">2. Ý nghĩa tên gọi "Quảng Bình" và "Quảng Trị"</h3>
              <p className="text-sm leading-relaxed mb-2">
                <strong>Quảng Bình (1604):</strong> "Quảng" có nghĩa là rộng lớn; "Bình" có nghĩa là bình yên, thanh bình.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Quảng Trị (1801):</strong> "Quảng" nghĩa là rộng lớn; "Trị" nghĩa là cai trị tốt đẹp, ổn định, vững bền.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 8 Điều cần nhớ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FCFAF5] p-8 rounded-lg border border-[#B38634]/30 shadow-sm relative h-full"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-[#EADCB9] pb-4">
            <CheckCircle2 className="text-[#B38634]" size={24} />
            <h2 className="serif text-xl font-bold text-[#261A12]">8 Điều Nhất Định Phải Nhớ</h2>
          </div>
          <ul className="space-y-4 font-serif text-[#5C4A3C] text-sm">
            <li className="flex items-start gap-3"><span className="text-[#B38634] font-bold text-lg mt-[-2px]">1.</span> <strong>Là vùng đất cổ:</strong> Có lịch sử lâu đời từ thời Tiền - Sơ sử và thuộc bộ Việt Thường thời Văn Lang - Âu Lạc.</li>
            <li className="flex items-start gap-3"><span className="text-[#B38634] font-bold text-lg mt-[-2px]">2.</span> <strong>Nhập vào Đại Việt năm 1069 và 1306:</strong> Lần lượt qua các mốc nhận Châu Bố Chính, Địa Lý, Ma Linh (1069) và Châu Ô (1306).</li>
            <li className="flex items-start gap-3"><span className="text-[#B38634] font-bold text-lg mt-[-2px]">3.</span> <strong>Nơi phát tích cơ nghiệp Chúa Nguyễn:</strong> Nguyễn Hoàng trấn thủ Thuận Hóa năm 1558, chọn Ái Tử - Trà Bát - Dinh Cát làm thủ phủ trong 68 năm.</li>
            <li className="flex items-start gap-3"><span className="text-[#B38634] font-bold text-lg mt-[-2px]">4.</span> <strong>Tên gọi "Quảng Bình" ra đời năm 1604:</strong> Do Chúa Nguyễn Hoàng đổi tên từ phủ Tiên Bình.</li>
            <li className="flex items-start gap-3"><span className="text-[#B38634] font-bold text-lg mt-[-2px]">5.</span> <strong>Tên gọi "Quảng Trị" ra đời năm 1801:</strong> Do nhà Nguyễn thành lập Dinh Quảng Trị.</li>
            <li className="flex items-start gap-3"><span className="text-[#B38634] font-bold text-lg mt-[-2px]">6.</span> <strong>Là ranh giới chiến lược:</strong> Sông Gianh (Trịnh - Nguyễn) và sông Bến Hải (vĩ tuyến 17).</li>
            <li className="flex items-start gap-3"><span className="text-[#B38634] font-bold text-lg mt-[-2px]">7.</span> <strong>Chiến công anh hùng:</strong> Giải phóng Quảng Trị ngày 1/5/1972 và 81 ngày đêm bảo vệ Thành cổ.</li>
            <li className="flex items-start gap-3"><span className="text-[#B38634] font-bold text-lg mt-[-2px]">8.</span> <strong>Mốc sáp nhập hiện đại:</strong> Tháng 4/1976 hợp nhất thành tỉnh Bình Trị Thiên; ngày 1/7/2025 hợp nhất Quảng Bình và Quảng Trị thành tỉnh Quảng Trị.</li>
          </ul>
        </motion.div>

      </div>

      {/* GÓC SUY NGHĨ */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-12"
      >
        <div className="bg-gradient-to-br from-[#8F1919] to-[#5C1010] text-[#FCFAF5] p-8 md:p-12 rounded-lg shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Lightbulb size={120} />
          </div>
          
          <div className="relative z-10">
            <h2 className="serif text-3xl font-bold mb-8 flex items-center gap-3">
              <Lightbulb className="text-[#B38634]" size={32} />
              Góc Suy Nghĩ & Bài Học Lịch Sử
            </h2>
            
            <div className="space-y-8 font-serif">
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#EADCB9]">1. Bài học về tinh thần đại đoàn kết</h3>
                <p className="text-[#FCFAF5]/80 leading-relaxed pl-4 border-l-2 border-[#B38634]/50">
                  Dù trải qua nhiều giai đoạn bị chia cắt bởi chiến tranh hay ranh giới hành chính, nhân dân hai vùng đất Quảng Trị vẫn luôn giữ trọn tình nghĩa đồng bào và lòng yêu nước kiên trung.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#EADCB9]">2. Trách nhiệm của học sinh hôm nay</h3>
                <p className="text-[#FCFAF5]/80 leading-relaxed pl-4 border-l-2 border-[#B38634]/50">
                  Tìm hiểu và trân trọng lịch sử quê hương, nỗ lực học tập để đóng góp vào sự phát triển toàn diện của tỉnh nhà trong thời kỳ hội nhập mới.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
`;

fs.writeFileSync('./src/components/TimelineSection.tsx', timelineContent);
