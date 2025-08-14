import { Phone, MessageCircle, Shield, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const crisisResources = [
  {
    name: "National Suicide Prevention Lifeline",
    number: "988",
    description: "24/7 crisis support in English and Spanish",
    type: "phone",
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "24/7 crisis support via text message",
    type: "text",
  },
  {
    name: "SAMHSA National Helpline",
    number: "1-800-662-4357",
    description: "Mental health and substance abuse treatment referral",
    type: "phone",
  },
  {
    name: "Trevor Project (LGBTQ+)",
    number: "1-866-488-7386",
    description: "Crisis support for LGBTQ+ youth",
    type: "phone",
  },
];

export const CrisisSupport = () => {
  const handleEmergencyCall = (number: string) => {
    // In a real app, this would handle the call appropriately
    window.open(`tel:${number}`, '_self');
  };

  const handleTextSupport = (text: string) => {
    // In a real app, this would handle text messaging
    alert(`Text support: ${text}`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-destructive/5 to-orange-100/30 dark:from-destructive/10 dark:to-orange-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-destructive/10 rounded-full">
              <Shield className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-destructive">
            Crisis Support Available 24/7
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You're not alone. If you're experiencing thoughts of self-harm or suicide, 
            immediate help is available. These resources are free, confidential, and available 24/7.
          </p>
        </div>

        {/* Emergency Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="glass-card p-6 rounded-3xl border-destructive/20 hover-lift">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-destructive rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-destructive">
                  Emergency Services
                </h3>
                <p className="text-sm text-muted-foreground">
                  Immediate emergency response
                </p>
              </div>
            </div>
            <Button
              variant="crisis"
              size="lg"
              className="w-full text-lg"
              onClick={() => handleEmergencyCall('911')}
            >
              Call 911
            </Button>
          </div>

          <div className="glass-card p-6 rounded-3xl border-primary/20 hover-lift">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-primary rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  Crisis Helpline
                </h3>
                <p className="text-sm text-muted-foreground">
                  Trained crisis counselors
                </p>
              </div>
            </div>
            <Button
              variant="hero"
              size="lg"
              className="w-full text-lg"
              onClick={() => handleEmergencyCall('988')}
            >
              Call 988
            </Button>
          </div>
        </div>

        {/* Support Resources */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-center mb-6 flex items-center justify-center">
            <Clock className="h-5 w-5 mr-2 text-secondary" />
            24/7 Support Resources
          </h3>
          
          {crisisResources.map((resource, index) => (
            <div
              key={index}
              className="glass-card p-4 rounded-2xl hover-lift flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-secondary-soft rounded-full">
                  {resource.type === 'phone' ? (
                    <Phone className="h-4 w-4 text-secondary" />
                  ) : (
                    <MessageCircle className="h-4 w-4 text-secondary" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{resource.name}</h4>
                  <p className="text-xs text-muted-foreground">{resource.description}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => 
                  resource.type === 'phone' 
                    ? handleEmergencyCall(resource.number)
                    : handleTextSupport(resource.number)
                }
                className="hover-lift"
              >
                {resource.number}
              </Button>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="glass-card p-6 rounded-3xl bg-primary-soft/10 border-primary/20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2 text-primary">
              Your Privacy & Safety Matter
            </h4>
            <p className="text-sm text-muted-foreground">
              All crisis support services are confidential and free. 
              You can reach out anonymously and receive immediate support from trained professionals 
              who understand what you're going through.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};