export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">About</h2>
            <p className="text-sm">
              Vedic Priest, Astrologer & Vastu Consultant offering traditional
              guidance for spiritual harmony and well-being.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">About Me</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p className="text-sm">📍 City, State</p>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">✉️ info@example.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Shri Gopal Krishna Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
