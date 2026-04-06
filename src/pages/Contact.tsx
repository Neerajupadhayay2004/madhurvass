import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const testimonials = [
  { name: "Priya Sharma", text: "A truly divine experience! The warmth of MadhurVass made us feel at home in Krishna's land. The hosts are like family — they even arranged a special darshan for us. 🙏", city: "Delhi", rating: 5 },
  { name: "Rajesh Patel", text: "Perfect location near all major temples. The deluxe room with temple view was magical. Waking up to those bells — unforgettable! We'll definitely come back for Janmashtami.", city: "Ahmedabad", rating: 5 },
  { name: "Sarah Johnson", text: "As a spiritual traveler from London, this was exactly what I was looking for. Peaceful, authentic, and heartwarming. The morning aarti guided tours were the highlight of my trip.", city: "London, UK", rating: 5 },
  { name: "Amit Kumar", text: "Stayed here during Holi with my family — what an experience! The homestay arranged everything for us. Kids loved it, and the family suite was perfect. Very clean and well-maintained.", city: "Mumbai", rating: 5 },
  { name: "Meera Devi", text: "I come to Mathura every year and MadhurVass is now my permanent address here. The spiritual ambiance, the food recommendations, the warmth — nothing compares. Truly Madhur (sweet)!", city: "Varanasi", rating: 5 },
  { name: "David Chen", text: "One of the most unique stays in my world travels. The cultural immersion is real here. The chatbot helped me plan everything before arrival. Highly recommend to all spiritual seekers!", city: "Singapore", rating: 5 },
];

const faqs = [
  { q: "What are the check-in and check-out times?", a: "Check-in: 12:00 PM, Check-out: 11:00 AM. Early check-in and late checkout available on request (subject to availability)." },
  { q: "Is breakfast included?", a: "Yes! Complimentary traditional Indian breakfast is included with all room types. We serve fresh poori-aloo, paratha, tea/coffee, and seasonal fruits." },
  { q: "How far are the temples?", a: "The nearest temple (Krishna Janmabhoomi) is just 1.5 km. Banke Bihari is 2.5 km, ISKCON is 4 km, and Prem Mandir is 5 km. We arrange temple visits!" },
  { q: "Do you offer airport/station pickup?", a: "Yes! We offer pickup from Mathura Junction (₹200), Agra Airport (₹1,500), and Delhi IGI Airport (₹3,500). Please book in advance." },
  { q: "Is parking available?", a: "Yes, free parking is available for cars and two-wheelers within the homestay premises." },
  { q: "Can you help arrange temple tours?", a: "Absolutely! We provide guided temple tours, Vrindavan parikrama, and cultural experience packages. Ask us when you book!" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all required fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("🙏 Thank you for your message! We'll get back to you within 1 hour.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-heading text-lg mb-2">🙏 Contact & About</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
              Get in Touch with <span className="text-gradient-saffron">MadhurVass</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We'd love to hear from you. Whether you're planning a visit or have questions — reach out anytime!
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* About */}
            <AnimatedSection animation="fade-right">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">About MadhurVass</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    <strong className="text-foreground">🌟 Our Vision:</strong> To create a spiritual hospitality
                    experience that connects guests with the divine essence of Mathura and Vrindavan through warmth,
                    comfort, and authentic tradition. We believe every guest carries a piece of the divine.
                  </p>
                  <p>
                    <strong className="text-foreground">🎯 Our Mission:</strong> To bridge cultures and hearts by
                    offering an authentic homestay where every guest becomes family. We practice "Atithi Devo Bhava"
                    — the belief that the guest is a form of God — in every interaction.
                  </p>
                  <p>
                    <strong className="text-foreground">❤️ Our Story:</strong> Founded in 2019, MadhurVass was born
                    from a simple dream — to share the sweetness (Madhur) of Mathura's spiritual energy with the world.
                    What started as a small 2-room homestay has grown into a beloved retreat for spiritual seekers from
                    across the globe.
                  </p>
                </div>

                <div className="mt-8 bg-card rounded-xl p-6 border border-border shadow-warm">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">📞 Contact Details</h3>
                  <div className="space-y-3 text-sm">
                    <a href="mailto:Agshobh@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <span className="text-lg">📧</span> Agshobh@gmail.com
                    </a>
                    <a href="tel:+919323292299" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <span className="text-lg">📞</span> +91 9323292299
                    </a>
                    <a
                      href="https://www.google.com/maps/dir//Mathura,+Uttar+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-lg">📍</span> Mathura, Uttar Pradesh, India
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-5">
                    <a
                      href="https://wa.me/9193232929"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-600 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all hover:scale-105"
                    >
                      💬 WhatsApp Chat
                    </a>
                    <a
                      href="mailto:Agshobh@gmail.com?subject=Inquiry - MadhurVass Homestay"
                      className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
                    >
                      📧 Email Inquiry
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="fade-left">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-golden border border-border space-y-5">
                <h3 className="font-heading text-xl font-bold text-foreground">Send Us a Message ✉️</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="c-name">Your Name *</Label>
                    <Input id="c-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" maxLength={100} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-phone">Phone</Label>
                    <Input id="c-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXXXXXXX" maxLength={15} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-email">Email *</Label>
                  <Input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" maxLength={255} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-msg">Message *</Label>
                  <Textarea id="c-msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you? Ask about rooms, temples, travel..." rows={5} maxLength={1000} />
                </div>
                <Button type="submit" className="w-full bg-gradient-saffron text-primary-foreground hover:opacity-90 h-12 text-base">
                  🙏 Send Message
                </Button>
              </form>
            </AnimatedSection>
          </div>

          {/* FAQ */}
          <AnimatedSection className="mb-20 max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              Frequently Asked Questions ❓
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground text-sm pr-4">{faq.q}</span>
                    <span className={`text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Testimonials */}
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              What Our Guests Say 🌟
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                  <div className="bg-card rounded-xl p-6 border border-border shadow-warm text-center h-full flex flex-col hover:shadow-golden transition-all hover:-translate-y-1">
                    <div className="text-gold text-lg mb-2">{"★".repeat(t.rating)}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-4">"{t.text}"</p>
                    <div className="pt-3 border-t border-border">
                      <p className="font-heading font-bold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
