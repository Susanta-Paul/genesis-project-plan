import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Features from "@/sections/Features";
import Testimonials from "@/sections/Testimonials";
import ContractorPaymentsSection from "@/sections/ContractorPaymentsSection";
import GlobalHRIS from "@/sections/GlobalHris";
import FAQAccordion from "@/sections/FAQAccordion";
import {motion} from "framer-motion"
import { Button } from "@/components/ui/button";



const Index = () => {

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


      <GlobalHRIS/>

      <FAQAccordion/>

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
