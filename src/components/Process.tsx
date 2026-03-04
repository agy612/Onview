import { motion } from 'motion/react';
import { ReactNode } from 'react';

const Step = ({ num, title, desc, isLast }: { num: string, title: string, desc: ReactNode, isLast?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 md:pl-24 py-8 group"
  >
    {/* Line */}
    {!isLast && (
      <div className="absolute left-[19px] md:left-[43px] top-20 bottom-0 w-[2px] bg-white/10 group-hover:bg-white/30 transition-colors duration-500"></div>
    )}

    {/* Number Circle */}
    <div className="absolute left-0 md:left-6 top-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white/60 font-bold flex items-center justify-center group-hover:border-white group-hover:text-white group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 z-10">
      {num}
    </div>

    <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#4ade80] transition-colors">{title}</h3>
      <div className="text-white/70 leading-relaxed text-lg whitespace-pre-line">
        {desc}
      </div>
    </div>
  </motion.div>
);

export default function Process() {
  return (
    <section className="py-32 relative bg-[#1a2e1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Forest"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e1a] via-transparent to-[#1a2e1a]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#4ade80] font-bold tracking-wider text-sm uppercase mb-4 block">Production System</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            생산부터 출고까지 한 번에!
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            제조 공정 전 과정을 6단계 시스템으로 관리하여<br/>
            브랜드가 제품에만 집중할 수 있도록 돕습니다.
          </p>
        </div>

        <div className="space-y-4">
          <Step
            num="01"
            title="원료 주급 · 정제수 준비"
            desc="기능성 및 EWG Green 등급 원료를 사용하여 안전하고 효능이 검증된 원료를 준비합니다."
          />
          <Step
            num="02"
            title="내용물 제조 & 칭량"
            desc="제형 설계 및 트렌드 대응 기술을 바탕으로 내용물을 정밀하게 제조하고 칭량합니다."
          />
          <Step
            num="03"
            title="내용물 품질 검사 · 제형 테스트"
            desc="CGMP 기반 품질관리 및 안전성 확보를 위해 내용물의 품질을 엄격하게 검사합니다."
          />
          <Step
            num="04"
            title="충진 작업"
            desc="위생적 자동화 시스템을 보유한 충진 라인에서 제품을 안전하게 충진합니다."
          />
          <Step
            num="05"
            title="제조일자 인쇄 · 라벨 부착 · 반제품 검수"
            desc="제조일자 인쇄, 라벨 부착 후 반제품 검수를 통해 완제품 품질을 보장합니다."
          />
          <Step
            num="06"
            title="최종 패킹 및 출고 준비"
            desc="전국 택배 및 창고 시스템과 연동된 3PL 물류를 통해 안전하게 출고합니다."
            isLast
          />
        </div>
      </div>
    </section>
  );
}
