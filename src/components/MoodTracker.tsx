import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Smile, Meh, Frown, TrendingUp, Calendar } from "lucide-react";

const moodData = [
  { date: "Mon", mood: 7, energy: 6, stress: 4 },
  { date: "Tue", mood: 6, energy: 5, stress: 6 },
  { date: "Wed", mood: 8, energy: 7, stress: 3 },
  { date: "Thu", mood: 5, energy: 4, stress: 7 },
  { date: "Fri", mood: 9, energy: 8, stress: 2 },
  { date: "Sat", mood: 8, energy: 7, stress: 3 },
  { date: "Sun", mood: 7, energy: 6, stress: 4 },
];

const emotionData = [
  { name: "Happy", value: 35, color: "hsl(var(--accent))" },
  { name: "Calm", value: 25, color: "hsl(var(--secondary))" },
  { name: "Anxious", value: 20, color: "hsl(var(--primary))" },
  { name: "Sad", value: 15, color: "hsl(var(--muted))" },
  { name: "Energetic", value: 5, color: "hsl(var(--accent-glow))" },
];

const chartConfig = {
  mood: {
    label: "Mood",
    color: "hsl(var(--primary))",
  },
  energy: {
    label: "Energy",
    color: "hsl(var(--secondary))",
  },
  stress: {
    label: "Stress",
    color: "hsl(var(--accent))",
  },
};

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const moodOptions = [
    { value: 1, icon: Frown, label: "Very Low", color: "text-destructive" },
    { value: 3, icon: Frown, label: "Low", color: "text-orange-500" },
    { value: 5, icon: Meh, label: "Neutral", color: "text-muted-foreground" },
    { value: 7, icon: Smile, label: "Good", color: "text-secondary" },
    { value: 9, icon: Smile, label: "Excellent", color: "text-primary" },
  ];

  return (
    <section id="mood" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mood Tracking Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Track your emotional journey and discover patterns in your mental wellness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Current Mood Selector */}
          <div className="glass-card p-6 rounded-3xl hover-lift">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-primary" />
              How are you feeling today?
            </h3>
            
            <div className="grid grid-cols-5 gap-3 mb-6">
              {moodOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => setSelectedMood(option.value)}
                    className={`flex flex-col items-center p-4 rounded-2xl smooth-transition hover-lift ${
                      selectedMood === option.value
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : 'bg-secondary-soft hover:bg-secondary-soft/80'
                    }`}
                  >
                    <Icon className="h-8 w-8 mb-2" />
                    <span className="text-xs font-medium">{option.label}</span>
                  </button>
                );
              })}
            </div>

            <Button variant="hero" className="w-full hover-lift">
              Log Today's Mood
            </Button>
          </div>

          {/* Weekly Insights */}
          <div className="glass-card p-6 rounded-3xl hover-lift">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-secondary" />
              Weekly Insights
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-primary-soft/20 rounded-2xl">
                <div className="text-2xl font-bold text-primary">7.1</div>
                <div className="text-sm text-muted-foreground">Avg Mood</div>
              </div>
              <div className="text-center p-4 bg-secondary-soft/20 rounded-2xl">
                <div className="text-2xl font-bold text-secondary">6.2</div>
                <div className="text-sm text-muted-foreground">Avg Energy</div>
              </div>
              <div className="text-center p-4 bg-accent-soft/20 rounded-2xl">
                <div className="text-2xl font-bold text-accent">4.1</div>
                <div className="text-sm text-muted-foreground">Avg Stress</div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-2">🎉 Your mood improved by 15% this week!</p>
              <p>💡 Tip: Your energy levels are highest on weekends - consider planning enjoyable activities then.</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mood Trends */}
          <div className="lg:col-span-2 glass-card p-6 rounded-3xl hover-lift">
            <h3 className="text-xl font-semibold mb-6">Mood Trends (7 Days)</h3>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 10]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                    className="drop-shadow-sm"
                  />
                  <Line
                    type="monotone"
                    dataKey="energy"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="stress"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Emotion Distribution */}
          <div className="glass-card p-6 rounded-3xl hover-lift">
            <h3 className="text-xl font-semibold mb-6">Emotion Distribution</h3>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={emotionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    className="drop-shadow-sm"
                  >
                    {emotionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <div className="mt-4 space-y-2">
              {emotionData.map((emotion, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: emotion.color }}
                    />
                    <span>{emotion.name}</span>
                  </div>
                  <span className="font-medium">{emotion.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};