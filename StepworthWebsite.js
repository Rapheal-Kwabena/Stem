import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";

export default function StepworthWebsite() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/mnt/data/465066b2-2bd7-4ab3-a302-d3714b944fe4.png" alt="Stepworth Logo" className="h-12 w-auto" />
          <h1 className="text-2xl font-bold">STEPWORTH LIMITED</h1>
        </div>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800">Your Fiber Optic Expert</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Delivering cutting-edge fiber optic solutions and quality splicing equipment for seamless connectivity.
        </p>
        <Button className="mt-6 bg-gradient-to-r from-orange-400 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
          Get a Quote
        </Button>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="max-w-3xl mx-auto text-gray-700">
          Stepworth Limited is a leading expert in fiber optic technology. We specialize in installation, maintenance,
          and the sales of premium fiber optic machines including splicers, cleavers, OTDRs, and more. With industry-leading
          knowledge and unbeatable service, we ensure your networks are fast, reliable, and future-ready.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-100 py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Fiber Optic Installation</h4>
              <p>End-to-end network deployment for homes, businesses, and industrial applications.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Maintenance & Troubleshooting</h4>
              <p>Keep your network running at peak performance with our expert diagnostic services.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Training & Consultancy</h4>
              <p>We offer specialized training and consultation services for fiber optic professionals and teams.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-4 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-10">Fiber Optic Machines & Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Fusion Splicers</h4>
              <p>Top-tier OPT and other brands of splicing machines for reliable connections.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Optical Time Domain Reflectometers (OTDR)</h4>
              <p>Advanced testing tools to ensure your fiber links are flawless.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Fiber Cleavers & Accessories</h4>
              <p>All-in-one kits and essential accessories for everyday fiber jobs.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-16 px-4">
        <h3 className="text-3xl font-semibold text-center mb-10">Get in Touch</h3>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="w-5 h-5" />
              <span>info@stepworthfiber.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-5 h-5" />
              <span>+233 50 123 4567</span>
            </div>
            <Input placeholder="Your email address" />
            <Input placeholder="Your message" />
            <Button className="bg-gradient-to-r from-orange-400 to-purple-600 text-white w-full">
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Stepworth Limited. All rights reserved.
      </footer>
    </div>
  );
}
