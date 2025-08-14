import { MessageCircle, Brain, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import mindcareLogo from "@/assets/mindcare-logo.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-soft rounded-full blur-2xl animate-pulse-glow opacity-30" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-soft rounded-full blur-2xl animate-pulse-glow opacity-30 delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-soft rounded-full blur-2xl animate-pulse-glow opacity-30 delay-2000" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={mindcareLogo} 
              alt="MindCare AI" 
              className="h-32 w-32 float-animation glow-effect"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-secondary-glow rounded-full blur-lg opacity-30 animate-pulse-glow" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            MindCare AI
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-4 text-foreground/80 animate-slide-up delay-200">
          Your 24/7 Intelligent Mental Wellness Companion
        </p>
        
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-300">
          Experience personalized mental health support with AI-powered insights, 
          mood tracking, and instant access to professional care when you need it most.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up delay-400">
          <div className="flex items-center space-x-2 glass-card px-4 py-2 hover-lift">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">24/7 AI Chat Support</span>
          </div>
          <div className="flex items-center space-x-2 glass-card px-4 py-2 hover-lift">
            <Brain className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">Intelligent Insights</span>
          </div>
          <div className="flex items-center space-x-2 glass-card px-4 py-2 hover-lift">
            <Heart className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Mood Tracking</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-500">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 hover-lift"
          >
            Start Your Journey
          </Button>
          <Button 
            variant="glass" 
            size="lg" 
            className="text-lg px-8 py-4 hover-lift"
          >
            Learn More
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 animate-slide-up delay-600">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by mental health professionals and used by thousands worldwide
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="glass-card px-4 py-2 text-xs font-semibold">HIPAA Compliant</div>
            <div className="glass-card px-4 py-2 text-xs font-semibold">24/7 Support</div>
            <div className="glass-card px-4 py-2 text-xs font-semibold">Evidence-Based</div>
          </div>
        </div>
      </div>
    </section>
  );
};