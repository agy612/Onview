import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CustomDevelopment() {
  return (
    <section className="relative py-48 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Manufacturing" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-[#4ade80] font-bold tracking-widest uppercase mb-6 block text-sm">Custom Solution</span>
          <h2 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
            창업을 매료시키다!<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#22c55e]">오엔뷰!</span><br/>
            화장품 창업 컨설팅 및<br/>
            브랜딩/마케팅 지원
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
            초기 부담을 줄이는 생산 전략부터<br/>
            소량 생산부터 대량 생산까지, 스타트업부터 대기업까지<br/>
            고객사의 상황에 최적화된 솔루션을 제안해드립니다.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 text-2xl font-bold text-white"
          >
            <span className="border-b-2 border-[#4ade80] pb-1">개발 문의하기</span>
            <div className="bg-[#4ade80] rounded-full p-2 text-black group-hover:bg-white transition-colors">
              <ArrowRight className="w-6 h-6" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
