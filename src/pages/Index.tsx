import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-temple.jpg";
import lotusIcon from "@/assets/lotus-icon.png";
import culturalAarti from "@/assets/cultural-aarti.jpg";
import culturalYamuna from "@/assets/cultural-yamuna.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";

const highlights = [
  { icon: "🕉️", title: "Peaceful Stay", desc: "Wake up to temple bells and the serene Yamuna breeze in the sacred land of Lord Krishna. Every corner radiates divine tranquility." },
  { icon: "🎭", title: "Cultural Immersion", desc: "Participate in morning aartis, witness Janmashtami celebrations, and experience the living traditions of Braj Bhoomi." },
  { icon: "🛕", title: "Temple Proximity", desc: "Walk to Banke Bihari, Krishna Janmabhoomi, ISKCON Temple, and the mesmerizing Prem Mandir — all within 5 km." },
  { icon: "🤝", title: "Warm Hospitality", desc: "Experience true 'Atithi Devo Bhava' — where every guest is treated as a form of the divine. We are your family in Mathura." },
  { icon: "📍", title: "Prime Location", desc: "Situated in the heart of Mathura, just 3 km from the railway station with easy access to all pilgrim spots." },
  { icon: "💰", title: "Affordable Comfort", desc: "Premium spiritual experience without the premium price tag. Rooms starting from ₹1,200/night with WiFi & breakfast." },
];

const stats = [
  { value: "500+", label: "Happy Guests" },
  { value: "4", label: "Room Types" },
  { value: "10+", label: "Nearby Temples" },
  { value: "4.8★", label: "Guest Rating" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Temple at sunset in Mathura" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <AnimatedSection animation="fade-in">
          <p className="text-divine-glow font-heading text-lg md:text-xl mb-4 animate-glow-pulse">
            🙏 Radhe Radhe — Welcome to Madhur Vas
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={200}>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-5">
            Experience Divine Living
            <br />
            in the Heart of{" "}
            <span className="text-gradient-saffron">Mathura</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={400}>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            A culturally rich homestay where <em>Madhur</em> (sweet) comfort meets sacred tradition.
            Your spiritual home in Krishna's land — where every moment is a step closer to the divine.
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rooms"
              className="bg-gradient-saffron text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-all shadow-golden hover:scale-105"
            >
              🏨 Book Your Stay
            </Link>
            <Link
              to="/culture"
              className="border-2 border-divine-glow text-divine-glow px-8 py-4 rounded-xl text-base font-semibold hover:bg-divine-glow/10 transition-all hover:scale-105"
            >
              🌸 Explore Culture
            </Link>
          </div>
        </AnimatedSection>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-8 bg-gradient-saffron">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={i} animation="zoom-in" delay={i * 100}>
              <div className="text-center text-primary-foreground py-4">
                <p className="font-heading text-3xl md:text-4xl font-bold">{s.value}</p>
                <p className="text-sm text-primary-foreground/80">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="py-16 md:py-24 bg-gradient-divine">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div>
              <img src={lotusIcon} alt="Lotus mandala" className="w-14 h-14 mb-4 animate-diya-flicker" width={512} height={512} loading="lazy" />
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
                Welcome to <span className="text-gradient-saffron">Madhur Vas</span> Homestay
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nestled in the divine city of Mathura — the birthplace of Lord Krishna — Madhur Vas offers a warm,
                culturally immersive stay where every moment is infused with spiritual serenity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our name "Madhur Vas" means <em>"Sweet Abode"</em> — and that's exactly what we offer. Traditional
                Indian hospitality blended with modern comforts, creating a sacred sanctuary for pilgrims, travelers,
                and seekers of peace. From the aroma of morning incense to the sound of evening bhajans, every
                detail is curated for your spiritual journey.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Learn more about us →
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-left">
            <div className="grid grid-cols-2 gap-3">
              <img src={culturalAarti} alt="Morning aarti" className="rounded-xl shadow-warm w-full h-40 md:h-52 object-cover" loading="lazy" width={800} height={600} />
              <img src={roomDeluxe} alt="Deluxe room" className="rounded-xl shadow-warm w-full h-40 md:h-52 object-cover mt-6" loading="lazy" width={800} height={600} />
              <img src={culturalYamuna} alt="Yamuna ghat" className="rounded-xl shadow-warm w-full h-40 md:h-52 object-cover" loading="lazy" width={800} height={600} />
              <div className="rounded-xl bg-gradient-saffron flex items-center justify-center h-40 md:h-52 mt-6 shadow-warm">
                <div className="text-center text-primary-foreground p-4">
                  <span className="text-3xl">🪷</span>
                  <p className="font-heading font-bold text-lg mt-2">Divine Stay</p>
                  <p className="text-xs opacity-80">Since 2019</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose <span className="text-gradient-saffron">Madhur Vas</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">More than a stay — it's a spiritual experience that touches your soul.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-warm hover:shadow-golden transition-all hover:-translate-y-1 text-center group h-full">
                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform duration-300">{h.icon}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonial Slider */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Guest Experiences 🌟</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Priya Sharma", text: "The most divine stay! Waking up to temple bells and the warmth of the hosts made this trip unforgettable. True Atithi Devo Bhava. 🙏", city: "Delhi", rating: 5 },
            { name: "Rajesh Patel", text: "Perfect location — walked to Banke Bihari daily. Rooms are clean, comfortable, and beautifully decorated with traditional charm.", city: "Ahmedabad", rating: 5 },
            { name: "Sarah Johnson", text: "As a spiritual traveler from London, Madhur Vas exceeded all expectations. The cultural immersion was authentic and heartwarming.", city: "London, UK", rating: 5 },
          ].map((t, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
              <div className="bg-card rounded-xl p-6 border border-border shadow-warm text-center h-full flex flex-col">
                <div className="text-gold text-lg mb-2">{"★".repeat(t.rating)}</div>
                <p className="text-muted-foreground text-sm leading-relaxed italic flex-1">"{t.text}"</p>
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="font-heading font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 bg-gradient-saffron text-primary-foreground text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 text-6xl animate-diya-flicker">🪔</div>
        <div className="absolute bottom-4 right-4 text-6xl animate-diya-flicker" style={{ animationDelay: "1s" }}>🪔</div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-glow-pulse">🌸</div>
        <div className="absolute top-1/3 right-1/4 text-4xl animate-glow-pulse" style={{ animationDelay: "1.5s" }}>🌸</div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
            Begin Your Sacred Journey Today 🙏
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto text-lg">
            Book your stay and let Mathura's divine magic unfold around you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rooms"
              className="inline-block bg-foreground text-background px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-all hover:scale-105"
            >
              Book Now
            </Link>
            <a
              href="https://wa.me/919193232929"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
