import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import templeBankeBihari from "@/assets/temple-banke-bihari.jpg";
import templeIskcon from "@/assets/temple-iskcon.jpg";
import templePremMandir from "@/assets/temple-prem-mandir.jpg";
import templeJanmabhoomi from "@/assets/temple-janmabhoomi.jpg";

const temples = [
    {
        name: "Banke Bihari Temple",
        distance: "2.5 km",
        timing: "7:45 AM – 12:00 PM, 5:30 PM – 9:15 PM",
        image: templeBankeBihari,
        mapLink: "https://www.google.com/maps/dir//Banke+Bihari+Temple,+Vrindavan",
        desc: "One of the most revered temples in Vrindavan, dedicated to Lord Krishna in his childhood form as Banke Bihari. The unique curtain ceremony (jhankis) is a must-see where the deity is revealed in quick glimpses.",
        tips: "No photography allowed inside. Visit early morning to avoid crowds. The temple follows a unique 'curtain' darshan style.",
    },
    {
        name: "ISKCON Temple, Vrindavan",
        distance: "4 km",
        timing: "4:30 AM – 1:00 PM, 4:00 PM – 8:30 PM",
        image: templeIskcon,
        mapLink: "https://www.google.com/maps/dir//ISKCON+Temple+Vrindavan",
        desc: "A magnificent temple complex known for its spiritual programs, kirtans, and stunning architecture. The Krishna Balaram Mandir is a center for Vedic education and devotion founded by Srila Prabhupada.",
        tips: "Attend the evening aarti at 7 PM for a magical experience. The temple also serves free prasadam daily.",
    },
    {
        name: "Shri Krishna Janmabhoomi",
        distance: "1.5 km",
        timing: "5:00 AM – 12:00 PM, 4:00 PM – 9:30 PM",
        image: templeJanmabhoomi,
        mapLink: "https://www.google.com/maps/dir//Krishna+Janmabhoomi+Mathura",
        desc: "The sacred birthplace of Lord Krishna, located in the heart of Mathura. This is where Devaki and Vasudev were imprisoned, and where Krishna was born on the midnight of Ashtami. A deeply moving spiritual site.",
        tips: "Security check at entrance. No bags, phones, or cameras allowed inside. Visit during Janmashtami for the midnight celebration.",
    },
    {
        name: "Prem Mandir, Vrindavan",
        distance: "5 km",
        timing: "5:30 AM – 12:00 PM, 4:30 PM – 8:30 PM",
        image: templePremMandir,
        mapLink: "https://www.google.com/maps/dir//Prem+Mandir+Vrindavan",
        desc: "A breathtaking white marble temple built by Jagadguru Kripalu Maharaj. The temple depicts divine leelas of Krishna and Radha. The evening light and sound show is spectacular with the entire temple illuminated in changing colors.",
        tips: "Visit in the evening (after 7 PM) for the stunning light show. Photography is allowed in the gardens.",
    },
];

const TempleGuide = () => (
    <Layout>
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                    <p className="text-primary font-heading text-lg mb-2">🛕 Temple & Location Guide</p>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
                        Sacred Temples <span className="text-gradient-saffron">Near Us</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover the divine temples of Mathura and Vrindavan — all within easy reach of Madhur Vas Homestay.
                        Each temple has its own unique spiritual energy and centuries of sacred history.
                    </p>
                </AnimatedSection>

                {/* Temple Cards with Images */}
                <div className="space-y-8 mb-16">
                    {temples.map((t, i) => (
                        <AnimatedSection key={i} animation={i % 2 === 0 ? "fade-right" : "fade-left"}>
                            <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-0 bg-card rounded-xl overflow-hidden border border-border shadow-warm hover:shadow-golden transition-all`}>
                                <div className="md:w-2/5 h-56 md:h-auto overflow-hidden relative">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        width={800}
                                        height={600}
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                                        📍 {t.distance}
                                    </div>
                                </div>
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">{t.name}</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full">
                                            🕐 {t.timing}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{t.desc}</p>
                                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                                        <p className="text-sm text-foreground"><strong>💡 Tips:</strong> {t.tips}</p>
                                    </div>
                                    <a
                                        href={t.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gradient-saffron text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
                                    >
                                        📍 Get Directions on Google Maps
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Map */}
                <AnimatedSection className="mb-16">
                    <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-6">📍 Our Location</h2>
                    <div className="rounded-xl overflow-hidden shadow-golden border border-border">
                        <iframe
                            title="Madhur Vas Homestay Location - Near Krishna Janmabhoomi"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.5!2d77.6718!3d27.5046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bfab5d3%3A0x63c1c74b21f8b1a!2sShri%20Krishna%20Janmabhoomi!5e0!3m2!1sen!2sin!4v1710000000000"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <a
                            href="https://www.google.com/maps/dir//Krishna+Janmabhoomi,+Mathura,+Uttar+Pradesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-saffron text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
                        >
                            🗺️ Open in Google Maps for Directions
                        </a>
                    </div>
                </AnimatedSection>

                {/* Travel Info */}
                <AnimatedSection>
                    <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">🚉 How to Reach Us</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: "🚆", title: "By Train", desc: "Mathura Junction — 3 km from homestay. Well connected to Delhi (2.5 hrs), Agra (1 hr), Jaipur (4 hrs). We offer station pickup!", mapLink: "https://www.google.com/maps/dir//Mathura+Junction+Railway+Station" },
                            { icon: "✈️", title: "By Air", desc: "Agra Airport (Kheria) — 55 km. IGI Airport Delhi — 160 km. We can arrange airport transfers.", mapLink: "https://www.google.com/maps/dir//Indira+Gandhi+International+Airport+Delhi" },
                            { icon: "🚗", title: "By Road", desc: "Mathura is on NH-2 (Delhi-Agra Highway). ~3 hours from Delhi, ~1 hour from Agra. Ample parking available.", mapLink: "https://www.google.com/maps/dir//Mathura,+Uttar+Pradesh" },
                            { icon: "🛺", title: "Local Transport", desc: "Auto-rickshaws (₹20-80), e-rickshaws (₹10-30), and taxis are easily available. We help arrange sightseeing vehicles.", mapLink: "" },
                        ].map((item, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <div className="bg-card p-5 rounded-xl border border-border h-full flex flex-col hover:shadow-warm transition-shadow">
                                    <span className="text-3xl mb-2">{item.icon}</span>
                                    <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.desc}</p>
                                    {item.mapLink && (
                                        <a
                                            href={item.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-xs font-semibold mt-3 hover:underline"
                                        >
                                            📍 View on Map →
                                        </a>
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    </Layout>
);

export default TempleGuide;
