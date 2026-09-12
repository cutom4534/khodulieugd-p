const fs = require('fs');

let content = fs.readFileSync('./src/components/TimelineSection.tsx', 'utf8');

// Remove Section VI completely
// I will just locate "VI. ĐỀ XUẤT BẢN ĐỒ" and remove up to "VII. GIẢI THÍCH KHÁI NIỆM"
const startOfVI = content.indexOf('{/* VI. ĐỀ XUẤT BẢN ĐỒ');
const endOfVI = content.indexOf('{/* VII. GIẢI THÍCH KHÁI NIỆM');
if (startOfVI !== -1 && endOfVI !== -1) {
  content = content.substring(0, startOfVI) + content.substring(endOfVI);
}

// Now let's completely replace Section VIII with the new layout
const startOfVIII = content.indexOf('{/* VIII. SƠ ĐỒ TƯ DUY');
const endOfVIII = content.indexOf('{/* IX. 8 ĐIỀU NHẤT ĐỊNH PHẢI NHỚ');

const newVIII = `{/* VIII. SƠ ĐỒ TƯ DUY */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h2 className="text-2xl font-bold text-[#8F1919] mb-6">VIII. SƠ ĐỒ TƯ DUY TIẾN TRÌNH LỊCH SỬ (MIND MAP)</h2>
        <div className="bg-[#FAF6EC] p-6 md:p-8 rounded-lg border border-[#EADCB9] overflow-x-auto text-sm shadow-inner">
          <div className="min-w-[800px] flex flex-col items-center w-full">
            
            {/* TÊN ROOT */}
            <div className="bg-gradient-to-r from-[#8F1919] to-[#5C1010] text-[#FCFAF5] font-bold py-3 px-8 rounded-full shadow-lg border-2 border-[#EADCB9] z-10 text-center tracking-wider text-base">
              TIẾN TRÌNH LỊCH SỬ QUẢNG BÌNH – QUẢNG TRỊ
            </div>
            
            {/* ĐƯỜNG DỌC TỪ ROOT XUỐNG */}
            <div className="w-1 h-8 bg-gradient-to-b from-[#8F1919] to-[#B38634]" />
            
            {/* HÀNG 1: 3 CỘT ĐẦU */}
            <div className="w-full relative flex justify-center">
              {/* ĐƯỜNG NGANG CHO HÀNG 1 */}
              <div className="absolute top-0 left-[16.666%] right-[16.666%] h-1 bg-[#B38634]"></div>
              
              <div className="flex w-full justify-between relative">
                {/* 1. BỐI CẢNH */}
                <div className="flex flex-col items-center w-1/3 px-3">
                  <div className="w-1 h-6 bg-[#B38634]"></div>
                  <div className="bg-[#FCFAF5] border border-[#B38634]/50 rounded-xl p-5 shadow-md w-full h-full transform hover:-translate-y-1 transition-transform">
                    <h4 className="font-bold text-[#8F1919] text-center mb-4 uppercase tracking-wide">Bối cảnh địa chiến lược</h4>
                    <ul className="text-sm space-y-3 text-[#5C4A3C]">
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> Khúc ruột miền Trung</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> Điểm thắt hẹp nhất lãnh thổ</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> Ranh giới quân sự qua các thời</li>
                    </ul>
                  </div>
                </div>

                {/* 2. CÁC MỐC CHỦ QUYỀN (GIỮA - CÓ ĐƯỜNG XUYÊN XUỐNG) */}
                <div className="flex flex-col items-center w-1/3 px-3 relative">
                  <div className="w-1 h-6 bg-[#B38634]"></div>
                  <div className="bg-[#FCFAF5] border border-[#B38634]/50 rounded-xl p-5 shadow-md w-full h-full transform hover:-translate-y-1 transition-transform relative z-10">
                    <h4 className="font-bold text-[#8F1919] text-center mb-4 uppercase tracking-wide">Các mốc chủ quyền lớn</h4>
                    <ul className="text-sm space-y-3 text-[#5C4A3C]">
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 1069: Nhập Bố Chính, Địa Lý, Ma Linh</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 1306: Nhập Châu Ô (Sính lễ Chế Mân)</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 1558: Nguyễn Hoàng lập thủ phủ</li>
                    </ul>
                  </div>
                  {/* Đường dọc kéo dài xuống hàng 2 */}
                  <div className="absolute top-0 bottom-[-32px] left-1/2 w-1 bg-[#B38634] -translate-x-1/2 z-0"></div>
                </div>

                {/* 3. TÊN GỌI & SÁP NHẬP */}
                <div className="flex flex-col items-center w-1/3 px-3">
                  <div className="w-1 h-6 bg-[#B38634]"></div>
                  <div className="bg-[#FCFAF5] border border-[#B38634]/50 rounded-xl p-5 shadow-md w-full h-full transform hover:-translate-y-1 transition-transform">
                    <h4 className="font-bold text-[#8F1919] text-center mb-4 uppercase tracking-wide">Tên gọi & sáp nhập</h4>
                    <ul className="text-sm space-y-3 text-[#5C4A3C]">
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 1604: Tên gọi Quảng Bình</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 1801: Tên gọi Quảng Trị</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 1976 - 1989: Tỉnh Bình Trị Thiên</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 1/7/2025: Hợp nhất Quảng Bình - Quảng Trị</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* KHOẢNG CÁCH XUỐNG HÀNG 2 */}
            <div className="w-1 h-8 bg-transparent"></div>

            {/* HÀNG 2: 2 CỘT CÒN LẠI */}
            <div className="w-full max-w-3xl relative flex justify-center mt-2">
              {/* ĐƯỜNG NGANG CHO HÀNG 2 */}
              <div className="absolute top-0 left-[25%] right-[25%] h-1 bg-[#B38634]"></div>

              <div className="flex w-full justify-center">
                {/* 4. KHÁNG CHIẾN */}
                <div className="flex flex-col items-center w-1/2 px-4">
                  <div className="w-1 h-6 bg-[#B38634]"></div>
                  <div className="bg-[#FCFAF5] border border-[#B38634]/50 rounded-xl p-5 shadow-md w-full h-full transform hover:-translate-y-1 transition-transform">
                    <h4 className="font-bold text-[#8F1919] text-center mb-4 uppercase tracking-wide">Kháng chiến & Chiến công</h4>
                    <ul className="text-sm space-y-3 text-[#5C4A3C]">
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 1885: Dụ Cần vương Tân Sở</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 1972: Giải phóng Q.Trị</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> 81 ngày đêm Thành cổ</li>
                    </ul>
                  </div>
                </div>

                {/* 5. DANH NHÂN */}
                <div className="flex flex-col items-center w-1/2 px-4">
                  <div className="w-1 h-6 bg-[#B38634]"></div>
                  <div className="bg-[#FCFAF5] border border-[#B38634]/50 rounded-xl p-5 shadow-md w-full h-full transform hover:-translate-y-1 transition-transform">
                    <h4 className="font-bold text-[#8F1919] text-center mb-4 uppercase tracking-wide">Danh nhân & Phẩm chất</h4>
                    <ul className="text-sm space-y-3 text-[#5C4A3C]">
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> Võ Nguyên Giáp, Lê Duẩn</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> Bùi Dục Tài, Dương Văn An</li>
                      <li className="flex items-start"><span className="mr-2 text-[#B38634] font-bold">▪</span> Yêu nước, kiên trung, hiếu học</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      `;

if (startOfVIII !== -1 && endOfVIII !== -1) {
  content = content.substring(0, startOfVIII) + newVIII + content.substring(endOfVIII);
}

fs.writeFileSync('./src/components/TimelineSection.tsx', content);
