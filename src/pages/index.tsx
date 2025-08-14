import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ChatInterface } from "@/components/ChatInterface";
import { MoodTracker } from "@/components/MoodTracker";
import { ResourceCards } from "@/components/ResourceCards";
import { CrisisSupport } from "@/components/CrisisSupport";
import { TherapyBooking } from "@/components/TherapyBooking";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ChatInterface />
        <MoodTracker />
        <ResourceCards />
        <CrisisSupport />
        <TherapyBooking />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background-secondary/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MindCare AI
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your journey to mental wellness is unique. We're here to support you every step of the way 
              with personalized AI guidance, professional therapy, and a community that cares.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>HIPAA Compliant</span>
              <span>•</span>
              <span>24/7 Support</span>
              <span>•</span>
              <span>Evidence-Based Care</span>
              <span>•</span>
              <span>Licensed Therapists</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
