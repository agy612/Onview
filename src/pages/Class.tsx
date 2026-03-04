import { motion } from 'motion/react';
import { Play, Clock, Tag } from 'lucide-react';
import { useState } from 'react';

const categories = ["전체", "창업", "마케팅", "제조", "트렌드", "인증", "수출"];

const classes = [
  {
    id: 1,
    title: "화장품 창업 A to Z: 기획부터 출시까지",
    description: "화장품 브랜드를 런칭하고 싶은 예비 창업자를 위한 필수 가이드. 기획 단계에서 놓치지 말아야 할 핵심 포인트를 짚어드립니다.",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com",
    duration: "15:30",
    category: "창업"
  },
  {
    id: 2,
    title: "성공하는 브랜드의 마케팅 전략",
    description: "제품만 좋으면 팔릴까요? 소비자의 마음을 사로잡는 마케팅 전략과 브랜딩 노하우를 공개합니다.",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com",
    duration: "22:45",
    category: "마케팅"
  },
  {
    id: 3,
    title: "OEM/ODM 제조사 선정 기준",
    description: "좋은 파트너를 만나는 것이 성공의 절반입니다. 제조사 선정 시 반드시 체크해야 할 리스트를 알려드립니다.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com",
    duration: "18:20",
    category: "제조"
  },
  {
    id: 4,
    title: "2024 화장품 트렌드 분석",
    description: "급변하는 뷰티 시장, 2024년을 주도할 키워드는 무엇일까요? 트렌드를 읽고 앞서가는 제품을 기획하세요.",
    thumbnail: "https://images.unsplash.com/photo-1612817288484-92913477d819?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com",
    duration: "25:10",
    category: "트렌드"
  },
  {
    id: 5,
    title: "비건 & 클린뷰티 인증의 모든 것",
    description: "필수가 된 비건 인증, 어떻게 준비해야 할까요? 인증 절차부터 비용, 기간까지 상세하게 알아봅니다.",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com",
    duration: "20:00",
    category: "인증"
  },
  {
    id: 6,
    title: "해외 수출을 위한 인허가 가이드",
    description: "글로벌 시장 진출을 꿈꾸시나요? 국가별 인허가 규정과 수출 절차를 알기 쉽게 정리해 드립니다.",
    thumbnail: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com",
    duration: "30:15",
    category: "수출"
  }
];

export default function Class() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredClasses = selectedCategory === "전체" 
    ? classes 
    : classes.filter(c => c.category === selectedCategory);

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-[#176B36] font-bold tracking-widest text-sm uppercase mb-4 block">Academy</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 tracking-tighter">CLASS</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            화장품 창업부터 마케팅, 트렌드까지.<br/>
            (주)오앤뷰가 전하는 생생한 실무 노하우를 영상으로 만나보세요.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#176B36] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredClasses.map((item) => (
            <motion.a
              layout
              key={item.id}
              href={item.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-video mb-6 shadow-lg">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50">
                    <Play className="w-8 h-8 fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {item.duration}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#176B36] mb-3">
                  <Tag className="w-4 h-4" />
                  <span>{item.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#176B36] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
