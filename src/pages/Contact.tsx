import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'location'>('inquiry');

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#176B36] font-bold tracking-widest text-sm uppercase mb-4 block">Contact Us</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 tracking-tighter">CONTACT</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            성공적인 비즈니스의 시작,<br/>
            (주)오앤뷰가 함께하겠습니다.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1.5 rounded-full inline-flex shadow-inner">
            <button
              onClick={() => setActiveTab('inquiry')}
              className={`px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeTab === 'inquiry' 
                  ? 'bg-[#176B36] text-white shadow-lg' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              문의하기
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeTab === 'location' 
                  ? 'bg-[#176B36] text-white shadow-lg' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              찾아오시는 길
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {activeTab === 'inquiry' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100"
            >
              <h3 className="text-3xl font-bold mb-8 text-center">Online Inquiry</h3>
              <form className="space-y-6 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">회사명 / 담당자명 <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all bg-white" placeholder="입력해주세요" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">연락처 <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all bg-white" placeholder="010-0000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">이메일 <span className="text-red-500">*</span></label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all bg-white" placeholder="example@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">문의 유형 <span className="text-red-500">*</span></label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all appearance-none bg-white cursor-pointer">
                      <option>선택해주세요</option>
                      <option>OEM/ODM 제조 문의</option>
                      <option>제품 기획/개발 문의</option>
                      <option>용기/패키지 문의</option>
                      <option>수출/인허가 문의</option>
                      <option>기타 문의</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">문의 내용 <span className="text-red-500">*</span></label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#176B36] focus:ring-1 focus:ring-[#176B36] outline-none transition-all resize-none bg-white" placeholder="문의하실 내용을 상세히 적어주시면 빠르고 정확한 상담이 가능합니다."></textarea>
                </div>

                <div className="flex items-start gap-3 pt-4 justify-center">
                  <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-[#176B36] rounded border-gray-300 focus:ring-[#176B36]" />
                  <label htmlFor="privacy" className="text-sm text-gray-500 cursor-pointer select-none">
                    <span className="font-bold text-gray-700">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                  </label>
                </div>

                <div className="text-center pt-4">
                  <button className="w-full md:w-auto px-12 bg-[#176B36] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#125229] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                    문의하기
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                <h3 className="text-3xl font-bold mb-10 text-center">찾아오시는 길</h3>
                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 text-[#176B36] shadow-sm border border-gray-100">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2 text-lg">Address</p>
                      <p className="text-gray-600 leading-relaxed">
                        경기도 화성시 동탄첨단산업1로 27<br/>
                        금강펜테리움 IX타워 B동 1234호
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 text-[#176B36] shadow-sm border border-gray-100">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2 text-lg">Phone</p>
                      <p className="text-gray-600 text-lg">031-123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 text-[#176B36] shadow-sm border border-gray-100">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2 text-lg">Email</p>
                      <p className="text-gray-600">contact@onview.co.kr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 text-[#176B36] shadow-sm border border-gray-100">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2 text-lg">Business Hours</p>
                      <p className="text-gray-600">
                        Mon - Fri : 09:00 - 18:00<br/>
                        Lunch : 12:00 - 13:00<br/>
                        <span className="text-gray-400 text-sm">Sat, Sun, Holiday OFF</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-[500px] bg-gray-100 rounded-[3rem] overflow-hidden relative shadow-xl border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.688676648764!2d127.0937893153051!3d37.19968997986926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b45a666666667%3A0x6666666666666666!2zKGl4KXRvd2Vy!5e0!3m2!1sko!2skr!4v1620000000000!5m2!1sko!2skr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
