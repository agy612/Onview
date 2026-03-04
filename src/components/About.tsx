import { motion } from 'motion/react';
import { Stethoscope, FlaskConical, Settings, MessageSquare } from 'lucide-react';

export default function About() {
  const capabilities = [
    { icon: Stethoscope, title: "피부과 화장품 전문", desc: "기능성 더마 제품\n설계 및 개발" },
    { icon: FlaskConical, title: "소량 샘플 제조", desc: "빠른 시장 테스트용\n샘플 대응 가능" },
    { icon: Settings, title: "OEM / ODM", desc: "브랜드 방향성에 맞춘\n전방위 제품 기획" },
    { icon: MessageSquare, title: "맞춤형 컨설팅", desc: "패키지 디자인부터\n유통 전략까지 지원" },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-100 pb-16 mb-24 gap-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm font-bold tracking-[0.2em] uppercase shrink-0 pt-2"
          >
            About Onview
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-3/4 text-xl md:text-3xl font-medium leading-relaxed text-gray-900"
          >
            <p className="mb-8">
              <span className="text-[#176B36] font-bold">당신의 아이디어를 제품으로 완성합니다.</span><br className="hidden md:block" />
              브랜드의 시작부터 유통까지, 오엔뷰가 함께합니다.
            </p>
            <p className="text-gray-500 font-normal text-lg md:text-xl">
              오엔뷰는 화장품 제조 분야에서 다양한 고객의 니즈를 반영해<br className="hidden md:block" />
              기획부터 소량 생산 제작, 대량 생산, 디자인, 유통까지 원스톱으로 제공하는<br />
              <strong className="text-gray-900 font-bold mt-2 inline-block border-b-2 border-[#176B36]">전문 OEM·ODM 화장품 제조사</strong>입니다.
            </p>
            <p className="text-gray-500 font-normal text-lg md:text-xl mt-6">
              의료기기 및 피부과 전용 제품, 민들레씨 앙금 브랜드,<br className="hidden md:block" />
              라이브 커머스 특화 라인까지 고객 맞춤형 전략으로 접근합니다.
            </p>
          </motion.div>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:border-[#176B36]/30 hover:shadow-lg transition-all group"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:bg-[#176B36] transition-colors duration-300">
                <item.icon className="w-8 h-8 text-[#176B36] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
              <p className="text-gray-500 text-sm whitespace-pre-line leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#176B36] font-bold text-xl md:text-2xl block mb-6">(주)오앤뷰는</span>
          <div className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 text-gray-900">
            <span className="inline-block relative">
              '빠르게 변하는 시장'
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#176B36]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            <span className="text-gray-300 mx-4 font-light">에 맞춰</span>
          </div>
          <div className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-[#176B36]">
            '부지런히 성장' 했습니다.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
