import { Link } from 'react-router';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-space-grotesk font-bold text-xl text-white">
                CURELYSTICS
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-md">
              Empowering Healthcare With Data Intelligence. Early-stage startup building innovative AI-driven solutions for hospitals and clinics.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium">
                Early-stage Startup
              </span>
              <span className="px-3 py-1 bg-teal-600/20 text-teal-400 rounded-full text-xs font-medium">
                Prototype in Progress
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="hover:text-blue-400 transition-colors">Solutions</Link></li>
              <li><Link to="/use-cases" className="hover:text-blue-400 transition-colors">Use Cases</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>curelystics.official@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>India</span>
              </li>
            </ul>
            <div className="flex items-center space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2025 CURELYSTICS Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
