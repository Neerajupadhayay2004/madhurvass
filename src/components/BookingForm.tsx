import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "./AnimatedSection";
import UpiPayment from "./UpiPayment";

const roomTypes = [
  { id: "standard", name: "Standard Sacred Room", price: 1200 },
  { id: "deluxe", name: "Deluxe Temple View Room", price: 2000 },
  { id: "premium", name: "Premium Divine Suite", price: 3500 },
  { id: "family", name: "Family Krishna Suite", price: 4500 },
];

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", checkin: "", checkout: "", guests: "1", room: "standard",
  });
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectedRoom = roomTypes.find((r) => r.id === form.room)!;

  const getNights = () => {
    if (!form.checkin || !form.checkout) return 0;
    const diff = new Date(form.checkout).getTime() - new Date(form.checkin).getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const nights = getNights();
  const total = nights * selectedRoom.price;
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.checkin || !form.checkout) {
      toast.error("Please fill all required fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) { toast.error("Please enter a valid email"); return; }
    if (form.phone.length < 10) { toast.error("Please enter a valid phone number"); return; }
    if (new Date(form.checkout) <= new Date(form.checkin)) { toast.error("Check-out must be after check-in"); return; }

    setSaving(true);
    const { data, error } = await supabase.from("bookings").insert({
      guest_name: form.name,
      phone: form.phone,
      email: form.email,
      room_type: selectedRoom.name,
      check_in: form.checkin,
      check_out: form.checkout,
      guests_count: parseInt(form.guests),
      total_price: total,
    }).select("id").single();

    setSaving(false);

    if (error) {
      toast.error("Failed to save booking. Please try WhatsApp.");
      return;
    }

    setBookingId(data.id);
    setSubmitted(true);
    setShowPayment(true);
    toast.success("🙏 Radhe Radhe! Booking saved successfully!");
  };

  const whatsappMsg = encodeURIComponent(
    `🙏 Radhe Radhe! I'd like to book:\nRoom: ${selectedRoom.name}\nName: ${form.name}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}\nNights: ${nights}\nTotal: ₹${total.toLocaleString("en-IN")}`
  );

  if (submitted) {
    return (
      <AnimatedSection animation="zoom-in">
        <div className="bg-card rounded-xl p-8 md:p-12 shadow-golden border border-border text-center">
          <span className="text-5xl mb-4 block">🙏</span>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Radhe Radhe! Booking Received</h3>
          <p className="text-muted-foreground mb-2">
            Thank you, <strong>{form.name}</strong>! Your booking for <strong>{selectedRoom.name}</strong> has been saved.
          </p>
          <div className="bg-muted rounded-lg p-4 my-4 text-sm text-left max-w-sm mx-auto space-y-1">
            <p>📅 <strong>Check-in:</strong> {form.checkin}</p>
            <p>📅 <strong>Check-out:</strong> {form.checkout}</p>
            <p>🌙 <strong>Nights:</strong> {nights}</p>
            <p>👥 <strong>Guests:</strong> {form.guests}</p>
            <p>💰 <strong>Total:</strong> ₹{total.toLocaleString("en-IN")}</p>
          </div>

          {/* UPI Payment */}
          {showPayment && bookingId && (
            <UpiPayment
              bookingId={bookingId}
              total={total}
              onComplete={() => setShowPayment(false)}
            />
          )}

          <p className="text-muted-foreground text-sm my-4">Or confirm via WhatsApp / Email:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/919193232929?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              💬 Confirm on WhatsApp
            </a>
            <button
              onClick={() => { setSubmitted(false); setShowPayment(false); setBookingId(null); setForm({ name: "", phone: "", email: "", checkin: "", checkout: "", guests: "1", room: "standard" }); }}
              className="text-primary text-sm font-medium hover:underline"
            >
              Make Another Booking
            </button>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-golden space-y-5 border border-border">
      <h3 className="font-heading text-2xl font-bold text-foreground">Book Your Sacred Stay</h3>

      <div className="space-y-1.5">
        <Label htmlFor="room">Select Room Type *</Label>
        <select id="room" name="room" value={form.room} onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring">
          {roomTypes.map((r) => (
            <option key={r.id} value={r.id}>{r.name} — ₹{r.price.toLocaleString("en-IN")}/night</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" maxLength={100} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXXXXXXX" maxLength={15} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" maxLength={255} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="guests">Guests</Label>
          <select id="guests" name="guests" value={form.guests} onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="checkin">Check-in Date *</Label>
          <Input id="checkin" name="checkin" type="date" value={form.checkin} onChange={handleChange} min={today} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="checkout">Check-out Date *</Label>
          <Input id="checkout" name="checkout" type="date" value={form.checkout} onChange={handleChange} min={form.checkin || today} />
        </div>
      </div>

      {nights > 0 && (
        <div className="bg-muted/60 rounded-lg p-4 border border-border">
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <span>{selectedRoom.name} × {nights} night{nights > 1 ? "s" : ""}</span>
            <span>₹{total.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between font-heading font-bold text-foreground text-lg pt-2 border-t border-border mt-2">
            <span>Estimated Total</span>
            <span className="text-gradient-saffron">₹{total.toLocaleString("en-IN")}</span>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button type="submit" disabled={saving} className="bg-gradient-saffron text-primary-foreground hover:opacity-90 flex-1 h-12 text-base">
          {saving ? "Saving..." : "🙏 Submit Booking"}
        </Button>
        <a href={`https://wa.me/919193232929?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-600 text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex-1">
          💬 Book via WhatsApp
        </a>
        <a href="mailto:Agshobh@gmail.com?subject=Booking Inquiry - Madhur Vas Homestay"
          className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex-1">
          📧 Send Email
        </a>
      </div>
    </form>
  );
};

export default BookingForm;
