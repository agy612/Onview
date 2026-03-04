import { motion } from 'motion/react';
import { Factory, Package, Zap, Lightbulb, ClipboardCheck } from 'lucide-react';

export default function FactoryInfo() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#176B36] font-bold tracking-wider text-sm uppercase mb-4 block flex items-center gap-2">
                <Factory className="w-4 h-4" /> Manufacturing
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
                <span className="text-[#176B36]">생산</span>부터 <span className="text-[#176B36]">물류</span>까지,<br/>
                <span className="text-[#176B36]">통합된 제조시스템</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                오엔뷰는 단계별 제조 공정을 체계적으로 구축하여<br/>
                브랜드가 안심하고 성장할 수 있는 환경을 제공합니다.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                {[
                  { icon: Factory, label: "원료개발", sub: "기능성 및 EWG Green 등급 원료 사용" },
                  { icon: Lightbulb, label: "연구·개발 (R&D)", sub: "제형 설계 및 트렌드 대응 기술" },
                  { icon: ClipboardCheck, label: "품질검사", sub: "CGMP 기반 품질관리 및 안전성 확보" },
                  { icon: Package, label: "충진&포장", sub: "위생적 자동화 시스템 보유" },
                  { icon: Zap, label: "출고&3PL 물류", sub: "전국 택비 및 창고 시스템 연동" }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100 hover:border-[#176B36]/30 transition-colors">
                    <item.icon className="w-8 h-8 mx-auto mb-3 text-[#176B36]" />
                    <div className="font-bold text-gray-900 text-sm mb-1">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=400&q=80", label: "본관 (1동)" },
                { src: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=400&q=80", label: "2동" },
                { src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=400&q=80", label: "3동" },
                { src: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=400&q=80", label: "4동" }
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative group rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-bold">{img.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                통합 제조 공정 시스템
                <span className="text-xs bg-[#176B36] text-white px-2 py-1 rounded-full">RUNNING</span>
              </h3>
              <div className="flex gap-3 mb-8">
                {["원료개발", "연구·개발(R&D)", "품질검사", "충진&포장", "출고&3PL"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600">#{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-[2rem] overflow-hidden shadow-2xl relative h-80 group"
              >
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" alt="Machinery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-sm font-bold text-[#176B36] shadow-lg">
                  + ONVIEW
                </div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                 <motion.img whileHover={{ scale: 1.02 }} src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=400&q=80" alt="Machine 1" className="w-full h-40 object-cover rounded-[1.5rem]" />
                 <motion.img whileHover={{ scale: 1.02 }} src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=400&q=80" alt="Machine 2" className="w-full h-40 object-cover rounded-[1.5rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
