import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Features from "@/sections/Features";
import Testimonials from "@/sections/Testimonials";
import ContractorPaymentsSection from "@/sections/ContractorPaymentsSection";




import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/ui/spotlight";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Tilt from "react-parallax-tilt";
import CountUp from 'react-countup';
import { 
  Globe, 
  Shield, 
  Users, 
  CheckCircle, 
  Star, 
  Clock, 
  BarChart3, 
  DollarSign,
  FileText,
  Briefcase,
  TrendingUp,
  Award
} from "lucide-react";

// Import images
import heroTeamImage from "@/assets/hero-team.jpg";
import dashboardImage from "@/assets/dashboard.jpg";
import partnershipImage from "@/assets/partnership.jpg";
import globalNetworkImage from "@/assets/global-network.jpg";
import womanWorkingImage from "@/assets/woman-working.jpg";
import digitalContractsImage from "@/assets/digital-contracts.jpg";

const testimonials = [
  {
    quote: "We can now manage our global contractors effortlessly. The compliance automation saves us countless hours each month.",
    author: "Sarah Johnson",
    role: "HR Director",
    company: "TechCorp",
    rating: 5
  },
  {
    quote: "The platform's ease of use and comprehensive compliance features make it indispensable for our international operations.",
    author: "Michael Chen",
    role: "Operations Manager", 
    company: "GlobalStart",
    rating: 5
  },
  {
    quote: "Outstanding support team and seamless payment processing. Our contractors love the quick, reliable payments.",
    author: "Emily Davis",
    role: "Finance Lead",
    company: "InnovateLab",
    rating: 5
  },
];

const Index = () => {
  // Force refresh
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const benefitsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });
  const benefitsInView = useInView(benefitsRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
    const digitalContractsImage = "https://www.anitian.com/wp-content/uploads/2019/05/What-is-Compliance-Automation-Anitian.png?w=900"
    const globalNetworkImage = "https://www.itedgenews.africa/wp-content/uploads/2021/12/seamless-payment.jpg"
    const womanWorkingImage = "https://www.builtintelligence.com/cdn/shop/articles/Contract_Management_Software_c01187db-8a41-4a48-9e25-fd4ee32cdbc1.jpg?v=1747830744"
  
  const features = [
  {
    icon: Shield,
    title: "Automated Compliance",
    description: "Stay compliant with local tax laws and regulations in 150+ countries automatically.",
    stats: "99.9% compliance rate",
    image: digitalContractsImage,
  },
  {
    icon: DollarSign,
    title: "Seamless Payments",
    description: "Pay contractors in their preferred currency with competitive exchange rates.",
    stats: "50+ currencies",
    image: globalNetworkImage,
  },
  {
    icon: FileText,
    title: "Contract Management",
    description: "Create, manage, and store contracts with built-in legal templates.",
    stats: "Legal templates included",
    image: womanWorkingImage,
  },
];


  const [startCount, setStartCount] = useState(false);
  const accentFrom = "from-blue-500";
  const accentTo = "to-blue-600";

  // Trigger count-up only when section is in view
  useEffect(() => {
    if (statsInView) setStartCount(true);
  }, [statsInView]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFBF4] ">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 glass backdrop-blur-lg border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              ContractorPay
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-primary transition-smooth">Features</a>
              <a href="#benefits" className="text-foreground/80 hover:text-primary transition-smooth">Benefits</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-smooth">Reviews</a>
              <Button variant="outline" className="mr-4">Log In</Button>
              <Button className="gradient-primary text-white border-0 shadow-primary hover:shadow-glow transition-smooth">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>



      {/* Hero Section */}
      <Hero/>

      {/* Quick Stats */}
      <Stats/>


      {/* Features Section */}
      <Features/>

      {/* Payment section */}
      <ContractorPaymentsSection/>
      <div className="w-full overflow-hidden">
        <svg
          className="w-full text-blue-400"
          viewBox="0 0 1620 128"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1620 0V53.3465L1528.65 79.1847C1518.92 81.9385 1508.89 83.5464 1498.79 83.9757L473.53 127.51C465.858 127.836 458.173 127.482 450.564 126.451L0 65.4176V0H1620Z"
            fill="currentColor"
          />
        </svg>
      </div>


      {/* Final CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Reduce HR costs & save 150+ hours on compliance
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies already simplifying their contractor payments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow transition-smooth text-lg px-8"
              >
                Book a demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 transition-smooth text-lg px-8"
              >
                Start free trial
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Bank-level Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">ContractorPay</div>
              <p className="text-white/70 mb-4">
                The leading platform for global contractor payments and compliance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-white/70">
                <div>Features</div>
                <div>Pricing</div>
                <div>Integrations</div>
                <div>API</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-white/70">
                <div>About</div>
                <div>Careers</div>
                <div>Blog</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-white/70">
                <div>Help Center</div>
                <div>Documentation</div>
                <div>Status</div>
                <div>Security</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            © 2024 ContractorPay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
