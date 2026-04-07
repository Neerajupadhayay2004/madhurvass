import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface UpiPaymentProps {
    bookingId: string;
    total: number;
    onComplete: () => void;
}

const UPI_ID = "agshobh@upi";

const UpiPayment = ({ bookingId, total, onComplete }: UpiPaymentProps) => {
    const [transactionId, setTransactionId] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const upiLink = `upi://pay?pa=${UPI_ID}&pn=MadhurVas&am=${total}&cu=INR&tn=Booking-${bookingId.slice(0, 8)}`;

    const handleSubmit = async () => {
        if (!transactionId.trim()) {
            toast.error("Please enter your UPI Transaction ID");
            return;
        }
        setSubmitting(true);
        const { error } = await supabase
            .from("bookings")
            .update({ upi_transaction_id: transactionId.trim(), payment_status: "submitted" })
            .eq("id", bookingId);

        if (error) {
            toast.error("Failed to save payment info. Please contact us on WhatsApp.");
        } else {
            toast.success("🙏 Payment info received! We'll verify and confirm shortly.");
            onComplete();
        }
        setSubmitting(false);
    };

    return (
        <div className="bg-muted/60 rounded-xl p-5 border border-border space-y-4 mt-4">
            <h4 className="font-heading text-lg font-bold text-foreground text-center">💳 Pay via UPI</h4>

            <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Scan QR or pay to UPI ID:</p>
                <p className="font-mono text-lg font-bold text-primary select-all">{UPI_ID}</p>
                <p className="text-2xl font-heading font-bold text-foreground">₹{total.toLocaleString("en-IN")}</p>
            </div>

            {/* UPI deep link for mobile */}
            <a
                href={upiLink}
                className="block w-full bg-gradient-saffron text-primary-foreground text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
            >
                📱 Open UPI App to Pay
            </a>

            <div className="border-t border-border pt-4 space-y-3">
                <p className="text-xs text-muted-foreground text-center">After payment, enter your UPI Transaction ID below:</p>
                <div className="space-y-1.5">
                    <Label htmlFor="txn-id">UPI Transaction ID *</Label>
                    <Input
                        id="txn-id"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Enter 12-digit transaction ID"
                        maxLength={50}
                    />
                </div>
                <Button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-primary-foreground"
                >
                    {submitting ? "Submitting..." : "✅ Confirm Payment"}
                </Button>
            </div>
        </div>
    );
};

export default UpiPayment;
