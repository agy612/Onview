import { motion } from 'motion/react';

const partnerBrands = [
  "naysom", "NOVeLia", "Recien", "O-hada", "DENTIS",
  "CELLINKEY", "ESSEREVE", "청아다향", "MAVANT", "fyucell",
  "MAISON JUAIRE", "vivera", "HENON", "Marelle", "Mariposa",
  "CELLUMÉRY", "DEAR BIRD",
];

export default function Clients() {
  return (
    <section className="py-32 bg-white text-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-[#176B36] font-bold tracking-wider text-sm uppercase mb-4 block">Partner Brands</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            오엔뷰는 다양한<br/>뷰티 브랜드와 함께합니다
          </h2>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto mb-4">
            오엔뷰는 다수의 코스메틱 브랜드와 협력 중이며,<br/>
            실제 시장에서 통하는 제품 기획 노하우를 축적해왔습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            18시간! 코스메틱 일하는 <span className="text-[#176B36]">노하우</span>와 <span className="text-[#176B36]">열정</span>으로<br/>
            <span className="text-[#176B36]">오엔뷰! 대표가 든든한 본사</span>가 되어<br/>
            <span className="text-[#176B36] font-black">창업 성공을 지원</span>합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block bg-[#176B36] text-white px-8 py-3 rounded-full font-bold text-lg mb-10">
            오엔뷰 협력 및 창업중인 브랜드
          </div>
        </motion.div>

        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Marquee Container */}
          <div className="flex overflow-hidden gap-8 py-4">
            <motion.div
              className="flex gap-6 shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {[...partnerBrands, ...partnerBrands, ...partnerBrands].map((brand, i) => (
                <div key={i} className="w-48 h-24 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 font-bold border border-gray-100 hover:border-[#176B36]/30 hover:bg-white hover:text-[#176B36] hover:shadow-lg transition-all cursor-pointer shrink-0">
                  <span className="text-lg tracking-tight">{brand}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
