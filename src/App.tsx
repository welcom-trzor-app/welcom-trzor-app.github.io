import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight, Menu, X, Github, Twitter } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Shield className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Trēzor Bridge
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#install" className="hover:text-purple-400 transition-colors">Installation</a>
              <a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a>
              <motion.button
                className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden pt-4 pb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <div className="flex flex-col space-y-4">
                <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
                <a href="#install" className="hover:text-purple-400 transition-colors">Installation</a>
                <a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a>
                <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
            {...fadeIn}
          >
            Your Secure Gateway to<br />Crypto Management
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            {...fadeIn}
          >
            Connect and manage your Trēzor hardware wallet seamlessly with enhanced security and user experience.
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            {...fadeIn}
          >
            <motion.button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Now
            </motion.button>
            <motion.button
              className="px-8 py-3 rounded-full border border-purple-500 hover:bg-purple-500/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <ChevronRight className="inline-block ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            {...fadeIn}
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Security",
                description: "State-of-the-art encryption and security measures to protect your digital assets."
              },
              {
                title: "Seamless Integration",
                description: "Works flawlessly with all Trēzor hardware wallet models."
              },
              {
                title: "User-Friendly Interface",
                description: "Intuitive design makes managing your crypto assets simple and efficient."
              },
              {
                title: "Multi-Currency Support",
                description: "Support for a wide range of cryptocurrencies and tokens."
              },
              {
                title: "Real-Time Updates",
                description: "Stay informed with instant transaction notifications and market updates."
              },
              {
                title: "24/7 Support",
                description: "Access to round-the-clock customer support and comprehensive documentation."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Trēzor Bridge</h3>
              <p className="text-gray-400">Your trusted gateway to secure crypto management.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#install" className="text-gray-400 hover:text-white">Installation</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© 2024 Trēzor Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;