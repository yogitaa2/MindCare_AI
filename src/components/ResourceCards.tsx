import { Book, Headphones, Edit, Video, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import meditationIllustration from "C:\Users\a2z\Downloads\—Pngtree—mental health meditation illustration_13147768.png";

const resources = [
  {
    id: 1,
    title: "Guided Meditation",
    description: "5-minute mindfulness session to center your thoughts and reduce stress",
    icon: Headphones,
    duration: "5 min",
    type: "Audio",
    difficulty: "Beginner",
    image: meditationIllustration,
  },
  {
    id: 2,
    title: "Breathing Exercise",
    description: "4-7-8 breathing technique for instant calm and anxiety relief",
    icon: Video,
    duration: "3 min",
    type: "Exercise",
    difficulty: "All levels",
    image: null,
  },
  {
    id: 3,
    title: "Gratitude Journal",
    description: "Daily prompts to cultivate appreciation and positive thinking",
    icon: Edit,
    duration: "10 min",
    type: "Writing",
    difficulty: "Beginner",
    image: null,
  },
  {
    id: 4,
    title: "Sleep Stories",
    description: "Calming bedtime stories designed to help you unwind and sleep better",
    icon: Book,
    duration: "20 min",
    type: "Audio",
    difficulty: "All levels",
    image: null,
  },
  {
    id: 5,
    title: "Virtual Support Group",
    description: "Connect with others who understand your journey in a safe space",
    icon: Users,
    duration: "60 min",
    type: "Group",
    difficulty: "All levels",
    image: null,
  },
  {
    id: 6,
    title: "Therapist Session",
    description: "One-on-one professional therapy session with licensed counselors",
    icon: Calendar,
    duration: "50 min",
    type: "Therapy",
    difficulty: "All levels",
    image: null,
  },
];

const difficultyColors = {
  "Beginner": "bg-primary-soft text-primary",
  "All levels": "bg-secondary-soft text-secondary",
  "Advanced": "bg-accent-soft text-accent",
};

export const ResourceCards = () => {
  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Personalized Wellness Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated activities and tools tailored to your mental health journey, 
            designed to support your well-being at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="glass-card p-6 rounded-3xl hover-lift group smooth-transition"
              >
                {/* Image or Icon Header */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  {resource.image ? (
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-40 object-cover group-hover:scale-110 smooth-transition"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gradient-to-br from-primary-soft to-secondary-soft flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <Icon className="h-16 w-16 text-white/90" />
                    </div>
                  )}
                  
                  {/* Floating badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/90 text-gray-800 font-medium">
                      {resource.duration}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/90 text-gray-800 font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary smooth-transition">
                      {resource.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      difficultyColors[resource.difficulty as keyof typeof difficultyColors]
                    }`}>
                      {resource.difficulty}
                    </span>
                  </div>

                  <Button
                    variant="hero"
                    className="w-full hover-lift group-hover:shadow-glow"
                  >
                    Start Now
                  </Button>
                </div>

                {/* 3D hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/5 to-secondary-glow/5 rounded-3xl opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto hover-lift">
            <h3 className="text-2xl font-bold mb-4">
              Need Something Specific?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI can recommend personalized activities based on your current mood, 
              goals, and preferences. Let us help you find the perfect resource.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="hover-lift">
                Get AI Recommendations
              </Button>
              <Button variant="glass" size="lg" className="hover-lift">
                Browse All Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};