import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Briefcase, Youtube } from 'lucide-react';
import { Button } from '../ui/button';


const Footer = () => {
  const quickLinks = [
    { name: 'Find Jobs', href: '#' },
    { name: 'Post a Job', href: '#' },
    { name: 'Career Advice', href: '#' },
    { name: 'For Employers', href: '#' },
  ];

  const categories = [
    { name: 'Technology', href: '#' },
    { name: 'Healthcare', href: '#' },
    { name: 'Finance', href: '#' },
    { name: 'Education', href: '#' },
  ];

  const contact = [
    { icon: Mail, text: 'support@jobquest.com' },
    { icon: Phone, text: '+91 9818084104' },
    { icon: MapPin, text: 'New Delhi, IND, 110052' },
  ];

  return (
    <footer className="bg-green border-t border-green-200">
      {/* Newsletter Section */}
      <div className="border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">Get a job faster on app</h2>
              <p className="text-xl mb-2 text-[#4E992E]">Rated on PlayStore<img className="mb-2" src="https://www.jobhai.com/static/home/rate-star-group.svg" alt="" /></p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="Mobile No."
                placeholder="Enter your Number"
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E992E] flex-1 md:w-64"
              />
              <Button className="bg-[#4E992E] hover:bg-[#4E992E]">+91</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-[#4E992E] text-2xl font-bold">Job Hai</h2>
            </div>
           
            <div className="flex space-x-4 pt-2">
              {[
                { Icon: Youtube, href: 'https://facebook.com', label: 'Youtube' },
                { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-600 hover:text-[#4E992E] transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl text-[#4E992E] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#4E992E] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h3 className="text-2xl text-[#4E992E] font-semibold mb-4">Job Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-600 hover:text-[#4E992E] transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl text-[#4E992E] font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contact.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-gray-600">
                  <Icon className="h-4 w-4" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Job Quest. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-[#4E992E] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-[#4E992E] transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-[#4E992E] transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;