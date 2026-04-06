import Layout from "@/components/Layout";
import BookingForm from "@/components/BookingForm";
import AnimatedSection from "@/components/AnimatedSection";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import roomFamily from "@/assets/room-family.jpg";

const rooms = [
    {
        name: "Standard Sacred Room",
        price: "₹1,200",
        image: roomStandard,
        features: ["Comfortable Bed", "Free WiFi", "Attached Bathroom", "24/7 Hot Water", "Daily Housekeeping"],
        desc: "A cozy and clean room for solo travelers and pilgrims seeking simple comforts with a sacred ambiance.",
    },
    {
        name: "Deluxe Temple View Room",
        price: "₹2,000",
        image: roomDeluxe,
        features: ["AC", "Free WiFi", "Temple View", "Traditional Decor", "Room Service", "Breakfast Included"],
        desc: "Wake up to stunning temple views with premium Indian décor that makes you feel the divine energy around you.",
    },
    {
        name: "Premium Divine Suite",
        price: "₹3,500",
        image: roomPremium,
        features: ["AC", "Free WiFi", "Balcony", "Temple View", "Premium Furnishing", "Sitting Area", "Mini Fridge"],
        desc: "Our finest accommodation with a private balcony, luxurious furnishing, and panoramic views of Mathura's sacred skyline.",
    },
    {
        name: "Family Krishna Suite",
        price: "₹4,500",
        image: roomFamily,
        features: ["AC", "Free WiFi", "2 Beds", "Family Space", "Temple View", "Extra Bathroom", "Kid-Friendly"],
        desc: "Perfect for families on a spiritual journey. Spacious room with two beds, extra bathroom, and child-friendly amenities.",
    },
];

const amenities = [
    { icon: "📶", name: "Free High-Speed WiFi" },
    { icon: "🍳", name: "Complimentary Breakfast" },
    { icon: "🅿️", name: "Free Parking" },
    { icon: "🔒", name: "24/7 Security" },
    { icon: "🧹", name: "Daily Housekeeping" },
    { icon: "🚗", name: "Airport/Station Pickup" },
    { icon: "🗺️", name: "Temple Tour Guidance" },
    { icon: "💊", name: "First Aid Available" },
];

const Rooms = () => (
    <Layout>
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-12">
                    <p className="text-primary font-heading text-lg mb-2">🏨 Rooms & Booking</p>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
                        Choose Your <span className="text-gradient-saffron">Sacred Comfort</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Each room is designed with warmth, traditional charm, and modern amenities for a peaceful divine stay.
                        All rooms face the east — perfect for watching the sacred sunrise.
                    </p>
                </AnimatedSection>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {rooms.map((room, i) => (
                        <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-warm hover:shadow-golden transition-all hover:-translate-y-1 group h-full flex flex-col">
                                <div className="overflow-hidden h-56 md:h-64 relative">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        width={800}
                                        height={600}
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 right-3 bg-gradient-saffron text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                                        {room.price}<span className="text-xs font-normal">/night</span>
                                    </div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{room.name}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{room.desc}</p>
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {room.features.map((f) => (
                                            <span key={f} className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Amenities */}
                <AnimatedSection className="mb-16">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
                        Amenities & Services 🌟
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {amenities.map((a, i) => (
                            <div key={i} className="bg-card rounded-xl p-4 border border-border text-center hover:shadow-warm transition-shadow">
                                <span className="text-2xl block mb-2">{a.icon}</span>
                                <p className="text-sm font-medium text-foreground">{a.name}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Booking Form */}
                <AnimatedSection className="max-w-2xl mx-auto">
                    <BookingForm />
                </AnimatedSection>
            </div>
        </section>
    </Layout>
);

export default Rooms;
