import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="font-bold text-2xl tracking-tight text-white flex items-center gap-2">
             <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
             </div>
             EnviroCorp
          </Link>
          <p className="text-sm text-slate-400">
            Oizom is an Environmental IoT company providing data-driven solutions for better decision-making. We monitor various environmental parameters to offer actionable insights.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></Link>
            <Link href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">Smart Cities</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Industrial Monitoring</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Mining & Construction</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Wastewater Treatment</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
           <h3 className="font-semibold text-white mb-4">Contact Us</h3>
           <ul className="space-y-2 text-sm text-slate-400">
             <li>123 Innovation Drive</li>
             <li>Tech Valley, CA 94043</li>
             <li>USA</li>
             <li className="pt-2">+1 (555) 123-4567</li>
             <li>info@envirocorp.com</li>
           </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} EnviroCorp. All rights reserved.
      </div>
    </footer>
  );
}
