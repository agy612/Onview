import { MapPin, Phone, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-2xl font-black tracking-tighter mb-6">ONVIEW</h2>
            <div className="space-y-2 text-sm font-light leading-relaxed">
              <p className="flex items-center gap-3">
                <span className="font-bold text-gray-500 w-24">Representative</span>
                <span className="text-gray-300">Hong Gil Dong</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-bold text-gray-500 w-24">Business License</span>
                <span className="text-gray-300">123-45-67890</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-bold text-gray-500 w-24">Address</span>
                <span className="text-gray-300">경기도 화성시 향남읍 발안공단로 2길 51</span>
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="text-left md:text-right space-y-2 text-sm font-light">
            <p className="flex items-center md:justify-end gap-3">
              <span className="font-bold text-gray-500 md:order-2">Tel</span>
              <span className="text-gray-300 md:order-1">031-123-4567</span>
            </p>
            <p className="flex items-center md:justify-end gap-3">
              <span className="font-bold text-gray-500 md:order-2">Fax</span>
              <span className="text-gray-300 md:order-1">031-123-4568</span>
            </p>
            <p className="flex items-center md:justify-end gap-3">
              <span className="font-bold text-gray-500 md:order-2">Email</span>
              <span className="text-gray-300 md:order-1">info@onview.co.kr</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>Copyright © ONVIEW All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
