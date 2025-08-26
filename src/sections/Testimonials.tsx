import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";



export default function Testimonials(){

    const testimonialsRef = useRef(null);
    const testimonialsInView = useInView(testimonialsRef, { once: true });

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


    return(
        <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What our customers say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of companies who trust us with their contractor payments and compliance
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-4/5 lg:basis-4/5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={testimonialsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-1"
                  >
                    <Card className="p-8 h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col h-full">
                        {/* Stars */}
                        <div className="flex mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Quote */}
                        <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 flex-grow">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        {/* Author */}
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {testimonial.author}
                            </div>
                            <div className="text-gray-600">
                              {testimonial.role} at {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    )
}