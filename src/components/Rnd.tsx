import { motion } from 'motion/react';
import { ArrowRight, Microscope } from 'lucide-react';

export default function Rnd() {
  return (
    <section id="rnd" className="relative py-40 px-4 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Lab background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6 text-[#4ade80] font-bold tracking-wider uppercase">
            <Microscope className="w-6 h-6" />
            <span>R&D Center</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-[1.1] tracking-tight">
            <span className="text-[#4ade80]">오엔뷰!</span><br/>
            다수 화장품 브랜드와 협력 중
          </h2>
          <p className="text-xl md:text-2xl font-light text-[#4ade80] mb-8">
            (주)오앤뷰는 '매일' 연구합니다.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-xl">
            제품의 경쟁력은 결국 사용 경험에서 결정됩니다.
            소비자는 패키지 디자인뿐 아니라 효능과 안전성까지 세심하게 살펴봅니다.
            트렌드를 반영한 제형 개발과 브랜드 콘셉트에 맞춘 성분 설계가 가능할 때
            차별화된 제품 완성이 가능해지고, 이는 시장에서의 지속적인 성장 기반이 됩니다.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#176B36' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#176B36] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-[#176B36]/50 transition-all border border-[#176B36]"
            >
              연구소 소개 보기 <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 border border-white/30 hover:border-white transition-all backdrop-blur-sm"
            >
              보유 처방 리스트
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Cards Effect */}
        <div className="hidden lg:flex flex-col gap-6">
          {[
            { title: "다수의 코스메틱 레시피 개발", desc: "피부과 및 기능성 제품 노하우를 바탕으로 다양한 레시피를 보유하고 있습니다." },
            { title: "다수의 코스메틱 브랜드, 디자인 개발", desc: "브랜드 콘셉트에 맞는 패키지 디자인부터 용기 제안까지 함께합니다." },
            { title: "다수의 브랜드 회사와의 협력 및 제조", desc: "소량 샘플도 신속 대응, 개발 기간 최소화로 빠르게 시장에 진출합니다." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 hover:bg-white/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-[#4ade80] mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
