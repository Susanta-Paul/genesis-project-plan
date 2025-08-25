import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/ui/spotlight";
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
    <div className="min-h-screen overflow-hidden">
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
      <section className="relative bg-[#f0f7ff] overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 inset-y-0 w-1/2">
        <svg
          className="absolute top-0 right-0 w-[950px] h-[950px] text-blue-100"
          viewBox="0 0 1109 1009"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M583.273 1008.67L170.702 918.97L0 392.227L622.544 0L1108.42 509.573L583.273 1008.67Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-24 pb-24 lg:grid lg:grid-cols-2 lg:gap-6">
        {/* Left Content */}
        <motion.div
          className="max-w-xl lg:pt-16 z-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-base font-semibold text-gray-800 mb-3">
            Contractor Pay
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Easily hire contractors compliantly worldwide
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Hire and manage international contractors seamlessly. Our platform automates HR, ensures compliance, and guarantees on-time payments — all with unmatched flexibility.
          </p>

          {/* CTA Row */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[#0052cc] hover:bg-[#0041a8] text-white px-8 py-6 text-base font-medium"
            >
              Get a free 30-min demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-medium border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Speak to sales
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Images */}
        <div className="relative w-full mt-12 lg:mt-0 flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-[900px]">
            {/* Large Image with Tilt */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1200}
              scale={1.05}
              transitionSpeed={400}
              glareEnable={false}
              className="overflow-hidden rounded-3xl shadow-xl h-[600px]"
            >
              <motion.img
                src="https://images.ctfassets.net/pdf29us7flmy/7rUlJ13ZQSZTwrGC9eZJrV/143bed1e9db7ccf98001d0ca8a90d91e/GettyImages-517047052_optimized.jpg?w=720&q=100&fm=jpg"
                alt="Contractor dashboard"
                className="w-full h-full object-cover rounded-3xl"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </Tilt>

            {/* Small Image at Bottom-Left with subtle motion */}
            <motion.div
              className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-1/2 lg:w-2/5 overflow-hidden rounded-3xl shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src="https://www.d-velop.com/blog/wp-content/uploads/2020/07/header-contract-management-process-scaled-1-1568x1046.jpg"
                alt="Contractor workflow"
                className="w-full h-auto object-cover rounded-3xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>







      {/* Quick Stats */}
      <section ref={statsRef} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Our Impact</h2>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Supporting contractors and businesses worldwide with reliability and trust.
        </p>
      </div>

      {/* Subtle background shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* Countries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 text-center shadow-md rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center text-white shadow-sm`}
              >
                <Globe className="w-6 h-6" />
              </motion.div>
              <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${accentFrom} ${accentTo} mb-2`}>
                {startCount && <CountUp end={150} duration={2} suffix="+" />}
              </div>
              <div className="text-gray-700 font-medium">Countries supported</div>
            </Card>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 text-center shadow-md rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center text-white shadow-sm`}
              >
                <Shield className="w-6 h-6" />
              </motion.div>
              <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${accentFrom} ${accentTo} mb-2`}>
                {startCount && <CountUp end={99.9} duration={2} suffix="%" />}
              </div>
              <div className="text-gray-700 font-medium">Compliance rate</div>
            </Card>
          </motion.div>

          {/* Active Contractors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 text-center shadow-md rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center text-white shadow-sm`}
              >
                <Users className="w-6 h-6" />
              </motion.div>
              <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${accentFrom} ${accentTo} mb-2`}>
                {startCount && <CountUp end={10000} duration={2} suffix="+" />}
              </div>
              <div className="text-gray-700 font-medium">Active contractors</div>
            </Card>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 text-center shadow-md rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} flex items-center justify-center text-white shadow-sm`}
              >
                <Clock className="w-6 h-6" />
              </motion.div>
              <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${accentFrom} ${accentTo} mb-2`}>
                {startCount && <CountUp end={24} duration={2} suffix="/7" />}
              </div>
              <div className="text-gray-700 font-medium">Support available</div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>




    

      {/* Features Section */}
      <section id="compliance-features" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-screen">
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8 lg:space-y-12"
    >
      <p className="text-gray-600 font-semibold uppercase tracking-wide">Compliance</p>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
        Global contractor hiring made easy with automated compliance
      </h2>
      <p className="text-lg lg:text-xl text-gray-700 max-w-lg">
        Our platform ensures you're always compliant while making contractor 
        payments seamless across the globe. Stay ahead with automatic updates, 
        compliant onboarding, and real-time alerts.
      </p>

      {/* Stats */}
      <div className="flex gap-12 mt-6">
        <div className="pr-4">
          <p className="text-3xl lg:text-4xl font-bold text-gray-900">25%</p>
          <p className="text-sm lg:text-base text-gray-600">Reduction in HR workload</p>
        </div>
        <div className="pr-4">
          <p className="text-3xl lg:text-4xl font-bold text-gray-900">80%</p>
          <p className="text-sm lg:text-base text-gray-600">Time saved on admin</p>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Button size="lg" className="mt-6 lg:mt-8 bg-blue-600 hover:bg-blue-700 text-white">
          Book a Demo
        </Button>
      </motion.div>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full lg:w-[110%] -translate-x-4 h-full flex items-center"
    >
      <img
        src="https://images.pexels.com/photos/7792863/pexels-photo-7792863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Contractor compliance illustration"
        className="rounded-2xl shadow-xl object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700"
      />
    </motion.div>
  </div>

  {/* Feature Grid */}
  <div className="mt-20 max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div key={index} /* animations */>
          <Card className="p-0 h-full shadow-md hover:shadow-lg transition-smooth group overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img src={feature.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-smooth"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800/80 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge variant="secondary" className="bg-white/80 text-gray-800 mb-2">{feature.stats}</Badge>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Image Section with Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden relative shadow-card">
                <img 
                  src={partnershipImage} 
                  alt="Professional business partnership and global collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4">
                    <div className="flex items-center justify-center mb-2">
                      <Briefcase className="w-8 h-8 text-primary mr-2" />
                      <span className="text-lg font-bold text-foreground">Professional Partnership</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Expert support at every step</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Global contractor hiring made easy with automated compliance
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Our platform simplifies the complex process of hiring international contractors while ensuring full compliance with local regulations.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">20%</div>
                  <div className="text-muted-foreground">Cost reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">80%</div>
                  <div className="text-muted-foreground">Time saved</div>
                </div>
              </div>
              
              <Button className="gradient-primary text-white border-0 shadow-primary hover:shadow-glow transition-smooth">
                Learn more
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" ref={testimonialsRef} className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Trusted by thousands of companies worldwide
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
          >
            {[
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
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 h-full shadow-card hover:shadow-primary transition-smooth">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" ref={benefitsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Seamlessly onboard contractors & manage payments in one platform
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h3 variants={itemVariants} className="text-3xl font-bold text-foreground mb-6">
                Simplify contractor payroll
              </motion.h3>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-8 text-lg">
                Streamline your entire contractor payment process with automated tax calculations, currency conversions, and compliance checks.
              </motion.p>
              
              <motion.div variants={itemVariants} className="space-y-4 mb-8">
                {[
                  "Automated tax and compliance calculations",
                  "Multi-currency payment processing",
                  "Real-time payment tracking",
                  "Integrated invoice management"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-success mr-3" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button className="gradient-primary text-white border-0 shadow-primary hover:shadow-glow transition-smooth">
                  Start free trial
                </Button>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden relative shadow-card">
                <img 
                  src={dashboardImage} 
                  alt="Modern payment dashboard interface with compliance metrics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
                <div className="absolute top-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-lg rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BarChart3 className="w-6 h-6 text-primary mr-2" />
                        <span className="font-semibold text-foreground">Analytics</span>
                      </div>
                      <Badge variant="secondary" className="bg-success/20 text-success">Live</Badge>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-lg rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrendingUp className="w-6 h-6 text-accent mr-2" />
                        <span className="font-semibold text-foreground">Growth</span>
                      </div>
                      <Badge variant="secondary" className="bg-accent/20 text-accent">+24%</Badge>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <div className="bg-white/90 backdrop-blur-lg rounded-xl p-3">
                    <div className="text-foreground font-semibold">Complete Payment Dashboard</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
