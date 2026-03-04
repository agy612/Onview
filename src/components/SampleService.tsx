import { motion } from 'motion/react';

const sampleImages = [
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1556228552-e166d78c898f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=400&q=80",
];

export default function SampleService() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 shrink-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">
              생산 들어가기 전<br/>
              샘플 확인은 필수!
            </h2>
            <div className="text-xl text-gray-600 mb-4 leading-relaxed">
              <p>처음부터 큰 물량을 생산하는 방식은 현실적으로 위험 부담이 큽니다.</p>
              <p className="mt-2"><span className="text-[#176B36] font-bold">빠른 시장 테스트용 샘플 대응이 가능</span>하여</p>
              <p>시장 반응을 확인할 수 있는 소량 생산 환경을 지원합니다.</p>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              *유연한 생산 시스템은 비용 관리뿐 아니라 브랜드 운영 안정성에도 긍정적인 영향을 줍니다.
            </p>
          </div>

          <div className="lg:w-2/3 w-full overflow-hidden relative">
             {/* Gradient Masks for fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <motion.div 
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 20 
              }}
              style={{ width: "max-content" }}
            >
              {[...sampleImages, ...sampleImages].map((src, index) => (
                <div key={index} className="shrink-0 w-72 h-72 bg-gray-50 rounded-[2rem] p-8 flex items-center justify-center">
                  <img 
                    src={src} 
                    alt="Sample Product" 
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
