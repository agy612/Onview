import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

// Sample data with realistic cosmetics images
const portfolioImages = [
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556228720-198759464db4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571781926291-280553d36607?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
];

// Generate 24 items
const portfolioItems = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  brand: `BRAND ${String.fromCharCode(65 + (i % 26))}`,
  product: [
    "Hydrating Glow Serum",
    "Revitalizing Night Cream",
    "Organic Body Cleanser",
    "Daily UV Protection",
    "Intensive Hair Mask",
    "Vitamin C Ampoule",
    "Soothing Toner Pad",
    "Barrier Repair Cream"
  ][i % 8],
  description: [
    "Natural ingredients for glowing skin and healthy lifestyle.",
    "Advanced formula for deep hydration and repair.",
    "Gentle cleansing with plant-based surfactants.",
    "High performance sun care without white cast.",
    "Professional grade hair care solution.",
    "Brightening solution for dull skin tone.",
    "Calming care for sensitive skin types.",
    "Strengthening skin barrier with ceramides."
  ][i % 8],
  image: portfolioImages[i % portfolioImages.length],
  category: ["Skincare", "Body Care", "Hair Care", "Sun Care"][i % 4]
}));

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, portfolioItems.length));
  };

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <span className="text-[#176B36] font-bold tracking-widest text-sm uppercase mb-4 block">Our Works</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 tracking-tighter">PORTFOLIO</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            (주)오앤뷰와 함께 성공적인 브랜드를 런칭한<br/>
            수많은 파트너사들의 성공 사례를 확인해보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {portfolioItems.slice(0, visibleCount).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-square mb-6 bg-gray-100 shadow-sm border border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.product} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold text-gray-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    View Project
                  </div>
                </div>
              </div>
              <div className="text-left px-2">
                <p className="text-[#176B36] font-bold text-xs uppercase tracking-widest mb-2">{item.brand}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#176B36] transition-colors line-clamp-1">{item.product}</h3>
                <p className="text-gray-500 text-sm line-clamp-1 font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < portfolioItems.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 text-center"
          >
            <button 
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-[#176B36] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Plus className="w-5 h-5" />
              더 보기 ({visibleCount}/{portfolioItems.length})
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
