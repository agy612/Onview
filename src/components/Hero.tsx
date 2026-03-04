import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    subtitle: "Visible Science. Reliable Beauty.",
    title: "화장품 제조의 모든 것\n오엔뷰에서 시작하세요",
    desc: "기획부터 생산·유통까지,\n브랜드의 시작을 함께합니다.",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=1920&q=80",
    theme: "dark"
  },
  {
    id: 2,
    subtitle: "OEM · ODM Manufacturing Partner",
    title: "당신의 화장품 브랜드\n오엔뷰에서 시작하세요",
    desc: "소량 생산부터 OEM·ODM 브랜딩·마케팅까지\n누구나 도전할 수 있는 제조 파트너",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80",
    theme: "light"
  },
  {
    id: 3,
    subtitle: "Global Standard Manufacturing",
    title: "국내를 넘어\n글로벌까지",
    desc: "싱가포르, 캐나다, 일본, 미국, 모로코 등\n해외 시장을 대상으로 한 제조 및 수출 협업을 진행하고 있습니다.",
    image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&w=1920&q=80",
    theme: "dark"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={banners[current].image} 
            alt="Banner" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl text-white"
            >
              <div className="inline-block bg-[#176B36] px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
                {banners[current].subtitle}
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-8 whitespace-pre-line">
                {banners[current].title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed whitespace-pre-line mb-12">
                {banners[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex gap-4">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  current === idx ? 'w-16 bg-[#176B36]' : 'w-8 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
