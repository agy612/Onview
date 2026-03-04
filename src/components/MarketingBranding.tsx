import { motion } from 'motion/react';
import { Palette, Package, Lightbulb } from 'lucide-react';

export default function MarketingBranding() {
  return (
    <section className="py-32 bg-[#f9f9f9] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
              오엔뷰는 브랜드의<br/>
              <span className="text-[#176B36]">성장을 함께 설계합니다.</span>
            </h2>
            <div className="text-5xl font-black text-[#176B36] my-8 animate-bounce">:</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-600 max-w-3xl mx-auto leading-relaxed">
              고객의 아이디어를 시장에서 통하는 브랜드로 완성시키는<br/>
              컨설팅형 화장품 제조 파트너입니다.
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-500 mb-2 font-medium uppercase tracking-wider">Success Know-how</p>
            <p className="text-5xl md:text-6xl font-black text-[#176B36]">20<span className="text-3xl text-gray-400 ml-1">years+</span></p>
          </motion.div>
          <div className="w-px bg-gray-200 hidden md:block"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-500 mb-2 font-medium uppercase tracking-wider">Professional Marketers</p>
            <p className="text-5xl md:text-6xl font-black text-[#176B36]">40<span className="text-3xl text-gray-400 ml-1">people+</span></p>
          </motion.div>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-2xl border border-gray-100 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#176B36]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="lg:w-1/2 relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-[1.1] text-gray-900">
              단순히 예쁜 브랜딩이 아닌<br/>
              <span className="text-[#176B36] decoration-4 underline decoration-[#176B36]/20 underline-offset-4">'팔리는' 제품을 만듭니다.</span>
            </h3>

            <div className="space-y-8 mt-12">
              {[
                { icon: Palette, title: "① 브랜드 맞춤 기획력", desc: "시장 분석 + 소비자 타깃 설정 + 콘셉트 기획, 제품 네이밍, 용기 추천, 디자인 방향성까지 제안" },
                { icon: Package, title: "② 전문 R&D + 빠른 대응력", desc: "피부과 및 기능성 제품 노하우, 소량 샘플도 신속 대응, 개발 기간 최소화" },
                { icon: Lightbulb, title: "③ 기획-생산-유통까지 ONE-LINE", desc: "제조 후 즉시 유통 연동 (이퓨어 등), 브랜드 성장을 위한 셀러 협업 / 수출 지원" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-[#176B36] transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 group-hover:text-[#176B36] transition-colors">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=800&q=80" 
                alt="Product Branding" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-lg">Total Branding Solution</p>
                <p className="text-sm opacity-80">From Concept to Launch</p>
              </div>
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-[#176B36] rounded-full flex items-center justify-center text-white font-bold text-sm text-center p-4 shadow-xl border-4 border-white z-20 hidden md:flex"
            >
              Premium<br/>Quality<br/>Design
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
