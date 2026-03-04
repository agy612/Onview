import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const historyData = [
  {
    year: "2020",
    desc: [
      "클린케어 소독티슈 제품 개발 및 제조",
      "파우더 비타 콜라겐 앰플 제품 개발",
      "알로페론 성분 함유된 치약 개발",
      "클린케어플러스 손소독제 개발 및 제조"
    ]
  },
  {
    year: "2023",
    desc: [
      "면역 펩타이드를 이용한 순하고 착한",
      "자연유래 성분 어린이용 핸드워시 개발"
    ]
  }
];

export default function History() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % historyData.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + historyData.length) % historyData.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section>
      {/* Green Stats Section */}
      <div className="bg-[#176B36] text-white py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
                {/* SINCE 2006 Block */}
                <div className="relative shrink-0 mb-8 xl:mb-0">
                    <h2 className="text-[120px] md:text-[180px] leading-none font-black text-white/10 select-none absolute -top-10 -left-4 md:-left-10 z-0">
                        SINCE
                    </h2>
                    <div className="relative z-10 pl-4 md:pl-8 pt-8">
                        <span className="text-6xl md:text-8xl font-bold tracking-tighter">2006~</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full xl:w-auto">
                    <div className="flex flex-col md:border-l border-white/30 md:pl-8 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">2대째</h3>
                        <p className="text-lg opacity-90 leading-snug">제약바이오<br/>회사 운영</p>
                    </div>
                    <div className="flex flex-col md:border-l border-white/30 md:pl-8 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">화장품,의약외품</h3>
                        <p className="text-lg opacity-90 leading-snug">제조를 통해<br/>전세계에 수출</p>
                    </div>
                    <div className="flex flex-col md:border-l border-white/30 md:pl-8 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">한분야에서</h3>
                        <p className="text-lg opacity-90 leading-snug">수출을 <span className="font-bold border-b border-white">국내 3위까지</span> 하는<br/>큰 업적달성</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Timeline Slider Section */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative min-h-[250px] flex items-center justify-center">
                {/* Navigation Buttons */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-0 z-20 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors hidden md:block"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                
                <button 
                    onClick={nextSlide}
                    className="absolute right-0 z-20 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors hidden md:block"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                <div className="w-full max-w-3xl mx-auto overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                        >
                            {/* Year Circle */}
                            <div className="shrink-0">
                                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#176B36] text-white flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg">
                                    {historyData[currentIndex].year}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="text-center md:text-left">
                                <ul className="space-y-4">
                                    {historyData[currentIndex].desc.map((item, i) => (
                                        <li key={i} className="text-xl text-gray-700 leading-relaxed font-medium">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
                {historyData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            idx === currentIndex ? 'bg-[#176B36] w-8' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
      </div>

      {/* Image Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Handshake" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end container mx-auto px-4 max-w-6xl text-right text-white">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">제조를 넘어</h2>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">파트너십으로!</h2>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">브랜드의 성장을</h2>
            <h2 className="text-4xl md:text-6xl font-bold">함께 설계합니다.</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
