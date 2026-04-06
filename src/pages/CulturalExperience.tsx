import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import aartiImg from "@/assets/cultural-aarti.jpg";
import holiImg from "@/assets/cultural-holi.jpg";
import yamunaImg from "@/assets/cultural-yamuna.jpg";
import janmashtamiImg from "@/assets/cultural-janmashtami.jpg";

const experiences = [
  {
    icon: "🪔",
    title: "Morning Aarti Participation",
    image: aartiImg,
    desc: "Begin your day with the divine glow of temple aartis. Feel the sacred chants vibrate through your soul as lamps illuminate the deities at dawn. Our hosts will guide you to the most authentic aarti experiences at Vishram Ghat and nearby temples.",
    timing: "4:30 AM — 6:30 AM Daily",
  },
  {
    icon: "🎨",
    title: "Holi in Vrindavan",
    image: holiImg,
    desc: "Experience Holi like nowhere else on earth! Vrindavan's Lathmar Holi, Phoolon Ki Holi (Holi with flowers), and the legendary color celebrations attract millions. We organize guided Holi tours to Barsana, Nandgaon, and Banke Bihari Temple.",
    timing: "February — March (varies yearly)",
  },
  {
    icon: "🌊",
    title: "Yamuna Ghat Visits",
    image: yamunaImg,
    desc: "Walk along the sacred Yamuna Ghats at sunset. Watch the mesmerizing evening aarti, feed the fish, witness the timeless peace of the holy river, and take a boat ride as the sky turns golden. Vishram Ghat is just a short walk from us.",
    timing: "Best at Sunrise & Sunset",
  },
  {
    icon: "🎉",
    title: "Janmashtami Festival",
    image: janmashtamiImg,
    desc: "Witness the grandest celebration in all of India — the birth of Lord Krishna. Mathura comes alive with midnight celebrations, Dahi Handi, devotional music, and millions of devotees. Book 2-3 months in advance for Janmashtami!",
    timing: "August — September (Krishna Ashtami)",
  },
];

const dailyActivities = [
  { time: "4:30 AM", activity: "Wake up for Mangla Aarti", icon: "🪔" },
  { time: "6:00 AM", activity: "Yoga & Meditation (optional)", icon: "🧘" },
  { time: "7:30 AM", activity: "Traditional Breakfast", icon: "🍳" },
  { time: "9:00 AM", activity: "Temple Visit — Banke Bihari / Janmabhoomi", icon: "🛕" },
  { time: "12:00 PM", activity: "Explore Mathura's Heritage", icon: "🏛️" },
  { time: "4:00 PM", activity: "Yamuna Ghat Walk & Boat Ride", icon: "🌊" },
  { time: "6:30 PM", activity: "Evening Aarti at Vishram Ghat", icon: "✨" },
  { time: "8:00 PM", activity: "Bhajan Sandhya & Stories", icon: "🎵" },
];

const CulturalExperience = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[55vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <img src={aartiImg} alt="Morning aarti ceremony" className="absolute inset-0 w-full h-full object-cover" width={800} height={600} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="relative z-10 text-center px-4">
        <AnimatedSection>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Cultural <span className="text-gradient-saffron">Experience</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto text-lg">
            Live like a local in Krishna's land — immerse in devotion, tradition, and timeless spirituality.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Storytelling */}
    <section className="py-16 md:py-24 bg-gradient-divine relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🪷</div>
        <div className="absolute bottom-10 right-10 text-8xl">🪷</div>
      </div>
      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        <AnimatedSection>
          <span className="text-5xl mb-4 block animate-diya-flicker">🪔</span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4 italic">
            "Live like a local in Krishna's land"
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            At MadhurVass, we don't just offer rooms — we offer a doorway into centuries of devotion.
            Wake up to temple bells, walk barefoot on sacred grounds, share stories with local devotees,
            and let the divine energy of Mathura and Vrindavan transform your journey.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Mathura and Vrindavan together form the sacred <strong>Braj Bhoomi</strong> — the land where Lord Krishna
            spent his childhood, played with the Gopis, danced the Raas Leela, and performed countless divine leelas.
            Every lane, every ghat, every temple here echoes with his eternal presence.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Experiences with Images */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">
            Spiritual Experiences Awaiting You
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Each experience is a journey deeper into the divine essence of Braj Bhoomi.</p>
        </AnimatedSection>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} animation={i % 2 === 0 ? "fade-right" : "fade-left"}>
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 bg-card rounded-xl overflow-hidden border border-border shadow-warm hover:shadow-golden transition-all`}>
                <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{exp.icon}</span>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">{exp.desc}</p>
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-sm px-3 py-1 rounded-full w-fit font-medium">
                    🕐 {exp.timing}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Daily Schedule */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">A Day at MadhurVass ☀️</h2>
          <p className="text-muted-foreground">Your typical spiritual day in Mathura</p>
        </AnimatedSection>
        <div className="space-y-3">
          {dailyActivities.map((a, i) => (
            <AnimatedSection key={i} animation="fade-left" delay={i * 60}>
              <div className="flex items-center gap-4 bg-card rounded-xl px-5 py-3.5 border border-border hover:shadow-warm transition-shadow">
                <span className="text-xl">{a.icon}</span>
                <span className="font-heading font-bold text-primary text-sm w-20">{a.time}</span>
                <span className="text-foreground text-sm">{a.activity}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-gradient-saffron text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
            Ready to Experience the Divine? 🌸
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Book your stay and let Mathura's spiritual magic unfold around you.
          </p>
          <a
            href="/rooms"
            className="inline-block bg-foreground text-background px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            Book Your Stay
          </a>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default CulturalExperience;
