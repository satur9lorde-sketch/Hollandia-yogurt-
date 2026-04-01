import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ShoppingCart, MapPin, Heart, Info, Mail, 
  Instagram, Facebook, Twitter, ChevronRight, Star, 
  CheckCircle2, Droplets, Zap, Smile, Search, Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Product {
  id: string;
  name: string;
  flavor: string;
  description: string;
  benefits: string[];
  image: string;
  color: string;
  nutrition: {
    calories: string;
    protein: string;
    calcium: string;
  };
}

// --- Constants ---
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hollandia Plain Yogurt',
    flavor: 'Plain & Creamy',
    description: 'The classic, smooth, and velvety yogurt drink that started it all.',
    benefits: ['High Protein', 'No Added Sugar', 'Probiotic Rich'],
    image: 'https://picsum.photos/seed/yogurt1/600/800',
    color: 'bg-blue-500',
    nutrition: { calories: '120 kcal', protein: '8g', calcium: '25%' }
  },
  {
    id: '2',
    name: 'Hollandia Strawberry',
    flavor: 'Sweet Strawberry',
    description: 'Bursting with the natural sweetness of sun-ripened strawberries.',
    benefits: ['Vitamin C', 'Antioxidants', 'Refreshing'],
    image: 'https://picsum.photos/seed/strawberry/600/800',
    color: 'bg-pink-500',
    nutrition: { calories: '140 kcal', protein: '6g', calcium: '20%' }
  },
  {
    id: '3',
    name: 'Hollandia Exotic Fruits',
    flavor: 'Tropical Mix',
    description: 'A vibrant blend of pineapple, mango, and passion fruit.',
    benefits: ['Tropical Energy', 'Fiber Rich', 'Exotic Taste'],
    image: 'https://picsum.photos/seed/exotic/600/800',
    color: 'bg-orange-500',
    nutrition: { calories: '150 kcal', protein: '5g', calcium: '18%' }
  },
  {
    id: '4',
    name: 'Hollandia Vanilla',
    flavor: 'Smooth Vanilla',
    description: 'Elegant and aromatic vanilla bean infusion for a sophisticated treat.',
    benefits: ['Aromatic', 'Calming', 'Perfect Snack'],
    image: 'https://picsum.photos/seed/vanilla/600/800',
    color: 'bg-yellow-400',
    nutrition: { calories: '135 kcal', protein: '7g', calcium: '22%' }
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Health', path: '/health' },
    { name: 'About', path: '/about' },
    { name: 'Locator', path: '/locator' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-blue-900">HOLLANDIA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/locator" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Find Near You
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/locator" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold mt-4"
              >
                Find Near You
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-blue-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Droplets className="text-blue-900 w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">HOLLANDIA</span>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed">
            Nourishing millions with the goodness of fresh, creamy yogurt. Your daily partner for energy and wellness.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-blue-200">
            <li><Link to="/products" className="hover:text-white">Our Flavors</Link></li>
            <li><Link to="/health" className="hover:text-white">Health Benefits</Link></li>
            <li><Link to="/about" className="hover:text-white">Brand Story</Link></li>
            <li><Link to="/locator" className="hover:text-white">Store Locator</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-blue-200">
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-blue-200 mb-4">Get fresh updates and healthy tips.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-blue-800 border-none rounded-l-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-400 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} Hollandia Yogurt. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- Pages ---

const Home = ({ onOpenQuiz }: { onOpenQuiz: () => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Fresh & Nutritious
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-blue-900 leading-[0.9] mb-8 tracking-tighter">
              REFRESH <br /> YOUR DAY <br /> <span className="text-blue-600">INSTANTLY.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Experience the creamy, smooth, and revitalizing taste of Hollandia Yogurt. Packed with nutrients to keep you energized all day long.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-center">
                Get Yours Now
              </Link>
              <Link to="/locator" className="bg-white text-blue-900 border-2 border-blue-100 px-10 py-4 rounded-full font-bold text-lg hover:border-blue-600 transition-all text-center">
                Find Near You
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                <span className="text-blue-600 font-bold">10M+</span> Happy Sippers
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full transform scale-150"></div>
            <img 
              src="https://picsum.photos/seed/yogurt-hero/800/1000" 
              alt="Hollandia Yogurt Bottle" 
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-3xl"
              referrerPolicy="no-referrer"
            />
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3"
            >
              <div className="bg-green-100 p-2 rounded-full"><Heart className="text-green-600 w-5 h-5" /></div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Health</p>
                <p className="text-sm font-bold text-blue-900">High Protein</p>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-20 left-0 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3"
            >
              <div className="bg-yellow-100 p-2 rounded-full"><Star className="text-yellow-600 w-5 h-5" /></div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Taste</p>
                <p className="text-sm font-bold text-blue-900">Creamy Smooth</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['Freshness Guaranteed', '100% Natural', 'Trusted Brand', 'Eco Friendly'].map(text => (
            <div key={text} className="flex items-center space-x-2 font-bold text-blue-900">
              <CheckCircle2 className="w-5 h-5" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 tracking-tight">Why Hollandia Yogurt?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We believe in goodness that tastes great. Every sip is a promise of quality and nutrition.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="text-blue-600" />, title: 'Instant Energy', desc: 'Packed with essential nutrients to fuel your busy lifestyle.' },
            { icon: <Smile className="text-green-600" />, title: 'Gut Health', desc: 'Rich in probiotics that support a healthy digestive system.' },
            { icon: <Droplets className="text-pink-600" />, title: 'Creamy Texture', desc: 'A uniquely smooth consistency that feels like a treat.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-gray-50 border border-gray-100 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flavor Showcase */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight">Taste the Goodness</h2>
            <p className="text-gray-600 max-w-md">Explore our range of delicious flavors crafted for every palate.</p>
          </div>
          <Link to="/products" className="text-blue-600 font-bold flex items-center space-x-2 group">
            <span>View All Flavors</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 right-4 ${product.color} text-white px-4 py-1 rounded-full text-xs font-bold`}>
                  {product.flavor}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                <Link to={`/products`} className="w-full block text-center py-3 rounded-xl border-2 border-blue-50 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all">
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/life1/400/500" className="rounded-3xl mt-12" alt="Lifestyle" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/life2/400/500" className="rounded-3xl" alt="Lifestyle" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-4xl font-black mb-1">98%</p>
              <p className="text-sm font-medium opacity-80">Customer Satisfaction</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tight">Fuel Your Ambition</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're hitting the gym, heading to a meeting, or enjoying a family outing, Hollandia Yogurt is the perfect companion for your active life.
            </p>
            <ul className="space-y-4">
              {['On-the-go convenience', 'Nutritious snack for kids', 'Post-workout recovery', 'Daily wellness boost'].map(item => (
                <li key={item} className="flex items-center space-x-3 text-gray-700 font-medium">
                  <div className="bg-blue-100 p-1 rounded-full"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-all">
              Learn Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Not sure which flavor to pick?</h2>
          <p className="text-xl text-blue-100 mb-12">Take our 30-second quiz and find your perfect yogurt match!</p>
          <button 
            onClick={onOpenQuiz}
            className="bg-white text-blue-900 px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl"
          >
            Start Flavor Quiz
          </button>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-blue-900 mb-4">Loved by Millions</h2>
             <div className="flex justify-center space-x-1 text-yellow-400 mb-4">
               {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah J.', text: 'The creamiest yogurt I have ever had. It is my go-to breakfast every single morning!', role: 'Fitness Enthusiast' },
              { name: 'David K.', text: 'My kids absolutely love the strawberry flavor. It is a healthy snack I can feel good about.', role: 'Parent' },
              { name: 'Michelle O.', text: 'Perfect for my busy work days. Gives me that instant energy boost without the crash.', role: 'Marketing Executive' }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                  <div>
                    <p className="font-bold text-blue-900">{t.name}</p>
                    <p className="text-xs text-blue-600 font-bold uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Products = () => {
  const [filter, setFilter] = useState('All');
  const flavors = ['All', 'Plain', 'Strawberry', 'Exotic', 'Vanilla'];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">Our Delicious Range</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover the perfect blend of nutrition and taste in every bottle.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {flavors.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${filter === f ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-blue-50'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.filter(p => filter === 'All' || p.flavor.includes(filter)).map((product) => (
            <motion.div 
              layout
              key={product.id}
              className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <button className="bg-white text-blue-900 w-full py-4 rounded-2xl font-bold">Quick View</button>
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-blue-900">{product.name}</h3>
                  <span className="text-blue-600 font-bold text-sm">{product.nutrition.calories}</span>
                </div>
                <p className="text-gray-500 mb-8 leading-relaxed">{product.description}</p>
                
                <div className="space-y-3 mb-8">
                  {product.benefits.map(b => (
                    <div key={b} className="flex items-center space-x-2 text-sm font-bold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Protein</p>
                    <p className="font-bold text-blue-900">{product.nutrition.protein}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Calcium</p>
                    <p className="font-bold text-blue-900">{product.nutrition.calcium}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Natural</p>
                    <p className="font-bold text-blue-900">100%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Health = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Science of Goodness</span>
          <h1 className="text-5xl md:text-7xl font-black text-blue-900 mb-8 leading-tight">Why Yogurt is Your Body's Best Friend</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Hollandia Yogurt isn't just a delicious drink; it's a nutritional powerhouse designed to support your daily wellness journey.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-3xl">
              <h4 className="text-3xl font-black text-blue-600 mb-2">8g</h4>
              <p className="text-sm font-bold text-blue-900">Protein per serving</p>
            </div>
            <div className="p-6 bg-green-50 rounded-3xl">
              <h4 className="text-3xl font-black text-green-600 mb-2">25%</h4>
              <p className="text-sm font-bold text-green-900">Daily Calcium</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://picsum.photos/seed/health/800/800" className="rounded-[4rem] shadow-2xl" alt="Health" referrerPolicy="no-referrer" />
          <div className="absolute -top-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs">
            <Smile className="text-yellow-500 w-10 h-10 mb-4" />
            <p className="font-bold text-blue-900 mb-2">Happy Gut, Happy Life</p>
            <p className="text-sm text-gray-500">Our probiotics help maintain a balanced digestive system for better immunity.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 rounded-[4rem] p-12 md:p-24 text-white">
        <h2 className="text-4xl font-black mb-16 text-center">The Benefits Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: 'Digestion', desc: 'Active cultures help break down food and absorb nutrients efficiently.' },
            { title: 'Bone Health', desc: 'High calcium content strengthens bones and teeth at every age.' },
            { title: 'Muscle Recovery', desc: 'Quality protein helps repair muscle tissue after physical activity.' },
            { title: 'Immunity', desc: 'A healthy gut is the first line of defense for your immune system.' }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-blue-800 rounded-2xl flex items-center justify-center font-black text-xl">{i+1}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-24">
        <h1 className="text-6xl font-black text-blue-900 mb-8">Our Journey to Goodness</h1>
        <p className="text-2xl text-gray-600 leading-relaxed">
          For over two decades, Hollandia has been at the forefront of dairy innovation, bringing health and happiness to homes across the nation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <img src="https://picsum.photos/seed/factory/800/600" className="rounded-[3rem]" alt="Quality" referrerPolicy="no-referrer" />
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-black text-blue-900">Uncompromising Quality</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We source our milk from the finest farms and use state-of-the-art processing technology to ensure that every drop of Hollandia Yogurt is pure, safe, and delicious.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-2xl"><CheckCircle2 className="text-blue-600" /></div>
              <div>
                <h4 className="font-bold text-blue-900">Farm to Bottle</h4>
                <p className="text-sm text-gray-500">Strict quality control at every stage of production.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-2xl"><CheckCircle2 className="text-blue-600" /></div>
              <div>
                <h4 className="font-bold text-blue-900">Innovative Recipes</h4>
                <p className="text-sm text-gray-500">Constantly evolving to meet your health needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-5xl font-black text-blue-600 mb-4">20+</h3>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">Years of Excellence</p>
        </div>
        <div>
          <h3 className="text-5xl font-black text-blue-600 mb-4">50M+</h3>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">Bottles Shared</p>
        </div>
        <div>
          <h3 className="text-5xl font-black text-blue-600 mb-4">100%</h3>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">Commitment to You</p>
        </div>
      </div>
    </div>
  </div>
);

const Locator = () => (
  <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h1 className="text-5xl font-black text-blue-900">Find Us Near You</h1>
          <p className="text-gray-600">Enter your location to find the nearest retail store or supermarket stocking Hollandia Yogurt.</p>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Enter city or zip code" 
              className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:border-blue-600 outline-none transition-all shadow-sm"
            />
          </div>

          <div className="space-y-4">
            {[
              { name: 'Mega Mart Central', dist: '0.8 miles away', status: 'In Stock' },
              { name: 'Fresh Foods Market', dist: '1.2 miles away', status: 'In Stock' },
              { name: 'City Supermarket', dist: '2.5 miles away', status: 'Low Stock' }
            ].map((store, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-600 cursor-pointer transition-all shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-blue-900">{store.name}</h4>
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded ${store.status === 'In Stock' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                    {store.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{store.dist}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-gray-200 rounded-[3rem] min-h-[500px] flex items-center justify-center relative overflow-hidden">
           <img src="https://picsum.photos/seed/map/1200/800" className="w-full h-full object-cover opacity-50" alt="Map Placeholder" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-xs">
               <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-blue-900 mb-2">Interactive Map</h3>
               <p className="text-sm text-gray-500">Enable location services to see stores on the map.</p>
               <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold w-full">Enable GPS</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl font-black text-blue-900 mb-8">Let's Connect</h1>
          <p className="text-xl text-gray-600 mb-12">Have questions, feedback, or just want to say hi? We'd love to hear from you.</p>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><Mail /></div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase">Email Us</p>
                <p className="text-lg font-bold text-blue-900">hello@hollandia.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600"><Smile /></div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase">Follow Us</p>
                <p className="text-lg font-bold text-blue-900">@hollandiayogurt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Full Name</label>
                <input type="text" className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                <input type="email" className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Subject</label>
              <select className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-400 outline-none appearance-none">
                <option>General Inquiry</option>
                <option>Product Feedback</option>
                <option>Partnership</option>
                <option>Retail Request</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Message</label>
              <textarea rows={5} className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-400 outline-none resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App ---

const PromoBanner = () => (
  <div className="bg-blue-600 text-white py-2 text-center text-xs font-bold tracking-widest uppercase relative z-[60]">
    Free Delivery on your first 3 orders! Use code: <span className="underline">FRESHYOGURT</span>
  </div>
);

const FlavorQuiz = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    { q: "What's your ideal morning vibe?", options: ["Calm & Simple", "Sweet & Fruity", "Energetic & Tropical", "Smooth & Elegant"] },
    { q: "How do you like your snacks?", options: ["Natural & Tart", "Sweet & Juicy", "Exotic & Bold", "Creamy & Classic"] },
    { q: "What's your favorite fruit group?", options: ["None, keep it plain", "Berries", "Tropical Fruits", "Vanilla/Spices"] }
  ];

  const handleAnswer = (ans: string) => {
    const newAnswers = [...answers, ans];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      setAnswers(newAnswers);
      setStep(questions.length);
    }
  };

  const getResult = () => {
    if (answers[0] === "Calm & Simple") return PRODUCTS[0];
    if (answers[2] === "Berries") return PRODUCTS[1];
    if (answers[2] === "Tropical Fruits") return PRODUCTS[2];
    return PRODUCTS[3];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/40 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-8 md:p-12 max-w-lg w-full shadow-2xl relative"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-blue-900"><X /></button>
            
            {step < questions.length ? (
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">Question {step + 1} of {questions.length}</p>
                  <h3 className="text-3xl font-black text-blue-900">{questions[step].q}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {questions[step].options.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      className="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all font-bold text-blue-900"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-8">
                <div className="space-y-2">
                  <p className="text-green-600 font-bold text-sm uppercase tracking-widest">Your Perfect Match</p>
                  <h3 className="text-4xl font-black text-blue-900">{getResult().name}</h3>
                </div>
                <img src={getResult().image} className="w-48 h-48 mx-auto rounded-3xl object-cover shadow-xl" alt="Result" />
                <p className="text-gray-600">{getResult().description}</p>
                <div className="flex flex-col gap-3">
                  <Link to="/products" onClick={onClose} className="bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg">View Product</Link>
                  <button onClick={() => {setStep(0); setAnswers([]);}} className="text-blue-600 font-bold">Retake Quiz</button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        <ScrollToTop />
        <PromoBanner />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenQuiz={() => setIsQuizOpen(true)} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/health" element={<Health />} />
            <Route path="/about" element={<About />} />
            <Route path="/locator" element={<Locator />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FlavorQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      </div>
    </Router>
  );
}
