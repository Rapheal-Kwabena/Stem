import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight, Menu, X } from "lucide-react";

export default function StepworthWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleSubmit = () => {
    if (formData.email && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ email: '', message: '' });
    } else {
      alert('Please fill in both email and message fields.');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white p-4 md:p-6 sticky top-0 z-50 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-xl">S</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold">STEPWORTH LIMITED</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:underline transition-all">About</a>
            <a href="#services" className="hover:underline transition-all">Services</a>
            <a href="#products" className="hover:underline transition-all">Products</a>
            <a href="#contact" className="hover:underline transition-all">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#about" className="block py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="block py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#products" className="block py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="#contact" className="block py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-purple-100/20"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Fiber Optic Expert
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delivering cutting-edge fiber optic solutions and quality splicing equipment for seamless connectivity across Ghana and beyond.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-400 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all">
              View Products
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">About Stepworth Limited</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Stepworth Limited is a leading expert in fiber optic technology, serving clients across Ghana with 
                cutting-edge solutions and unmatched expertise. We specialize in installation, maintenance, and the 
                sales of premium fiber optic machines including splicers, cleavers, OTDRs, and more.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>10+ years of industry experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Certified technicians and engineers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 technical support</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-purple-100 rounded-2xl p-8">
              <h4 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h4>
              <p className="text-gray-700">
                To provide world-class fiber optic solutions that connect communities, empower businesses, 
                and drive Ghana's digital transformation forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">Our Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive fiber optic solutions tailored to meet your connectivity needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Fiber Optic Installation</h4>
                <p className="text-gray-600">End-to-end network deployment for homes, businesses, and industrial applications with precision and quality.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Maintenance & Troubleshooting</h4>
                <p className="text-gray-600">Keep your network running at peak performance with our expert diagnostic services and rapid response times.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Training & Consultancy</h4>
                <p className="text-gray-600">Specialized training and consultation services for fiber optic professionals and technical teams.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">Premium Equipment & Tools</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional-grade fiber optic equipment from trusted global brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">FS</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-800">Fusion Splicers</h4>
                  <p className="text-gray-600 mb-4">Top-tier OPT and other premium brands of splicing machines for reliable, low-loss connections.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Core alignment technology</li>
                    <li>• Automated splicing programs</li>
                    <li>• Weatherproof design</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">OR</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-800">OTDR Equipment</h4>
                  <p className="text-gray-600 mb-4">Advanced Optical Time Domain Reflectometers to ensure your fiber links are flawless and optimized.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Multi-wavelength testing</li>
                    <li>• Event analysis</li>
                    <li>• Comprehensive reporting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-400 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">FC</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-800">Cleavers & Accessories</h4>
                  <p className="text-gray-600 mb-4">Complete toolkits and essential accessories for professional fiber optic installations and maintenance.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Precision cleaving tools</li>
                    <li>• Connector kits</li>
                    <li>• Testing accessories</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">Ready to enhance your connectivity? Contact us today!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <Mail className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-800">Email Us</h5>
                  <p className="text-gray-600">info@stepworthfiber.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <Phone className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-800">Call Us</h5>
                  <p className="text-gray-600">+233 50 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-800">Visit Us</h5>
                  <p className="text-gray-600">Accra, Greater Accra, Ghana</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <Clock className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-800">Business Hours</h5>
                  <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
              <Input 
                type="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleInputChange}
                className="border-gray-300 focus:border-purple-500"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <Button onClick={handleSubmit} className="bg-gradient-to-r from-orange-400 to-purple-600 text-white w-full py-3 rounded-lg hover:shadow-lg transition-all">
                Send Message <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <h4 className="text-xl font-bold">STEPWORTH LIMITED</h4>
          </div>
          <p className="text-gray-400 mb-4">Connecting Ghana, One Fiber at a Time</p>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Stepworth Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
