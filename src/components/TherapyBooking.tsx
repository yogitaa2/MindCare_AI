import { useState } from "react";
import { Calendar, Clock, Video, Star, User, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Anxiety & Depression",
    rating: 4.9,
    experience: "8 years",
    nextAvailable: "Today, 2:00 PM",
    avatar: "👩‍⚕️",
    bio: "Specializes in cognitive behavioral therapy and mindfulness-based interventions.",
    sessionTypes: ["Video Call", "Phone Call", "Chat"],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Trauma & PTSD",
    rating: 4.8,
    experience: "12 years",
    nextAvailable: "Tomorrow, 10:00 AM",
    avatar: "👨‍⚕️",
    bio: "Expert in EMDR therapy and trauma-informed care approaches.",
    sessionTypes: ["Video Call", "In-Person"],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Relationship Counseling",
    rating: 4.9,
    experience: "6 years",
    nextAvailable: "Today, 4:30 PM",
    avatar: "👩‍⚕️",
    bio: "Focuses on couples therapy and family dynamics using systemic approaches.",
    sessionTypes: ["Video Call", "Phone Call"],
  },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

export const TherapyBooking = () => {
  const [selectedTherapist, setSelectedTherapist] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [sessionType, setSessionType] = useState<string>("Video Call");

  const handleBooking = () => {
    if (selectedTherapist && selectedDate && selectedTime) {
      const therapist = therapists.find(t => t.id === selectedTherapist);
      alert(`Booking confirmed with ${therapist?.name} on ${selectedDate} at ${selectedTime} via ${sessionType}`);
    }
  };

  return (
    <section id="therapy" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional Therapy Sessions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with licensed therapists who understand your unique needs. 
            Book flexible sessions that fit your schedule and comfort level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Therapist Selection */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <User className="h-6 w-6 mr-3 text-primary" />
              Choose Your Therapist
            </h3>
            
            <div className="space-y-6">
              {therapists.map((therapist) => (
                <Card
                  key={therapist.id}
                  className={`p-6 rounded-3xl hover-lift cursor-pointer smooth-transition ${
                    selectedTherapist === therapist.id
                      ? 'ring-2 ring-primary shadow-glow bg-primary-soft/10'
                      : 'glass-card'
                  }`}
                  onClick={() => setSelectedTherapist(therapist.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{therapist.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold">{therapist.name}</h4>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{therapist.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <p className="text-primary font-medium">{therapist.specialty}</p>
                        <p className="text-sm text-muted-foreground">{therapist.bio}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{therapist.experience} experience</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {therapist.nextAvailable}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {therapist.sessionTypes.map((type) => (
                          <span
                            key={type}
                            className="text-xs px-3 py-1 bg-secondary-soft text-secondary rounded-full"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Panel */}
          <div className="glass-card p-6 rounded-3xl h-fit sticky top-24">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-secondary" />
              Book Your Session
            </h3>

            {selectedTherapist ? (
              <div className="space-y-6">
                {/* Session Type */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Session Type
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {["Video Call", "Phone Call", "Chat"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSessionType(type)}
                        className={`p-3 rounded-2xl text-sm font-medium smooth-transition hover-lift ${
                          sessionType === type
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary-soft hover:bg-secondary-soft/80'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {type === "Video Call" && <Video className="h-4 w-4" />}
                          {type === "Phone Call" && <Phone className="h-4 w-4" />}
                          {type === "Chat" && <MessageCircle className="h-4 w-4" />}
                          <span>{type}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Available Times
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-2xl text-sm font-medium smooth-transition hover-lift ${
                          selectedTime === time
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-muted hover:bg-muted/80'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Session Cost */}
                <div className="p-4 bg-accent-soft/20 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Session Cost</span>
                    <span className="text-lg font-bold text-accent">$120</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Insurance accepted • FSA/HSA eligible
                  </p>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full hover-lift"
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                >
                  Book Session
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Flexible cancellation up to 24 hours before your session
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Select a therapist to book your session
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};