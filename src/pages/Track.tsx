import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Track() {
  const [trackingId, setTrackingId] = useState("");

  const sample = [
    { step: "Collected at event", time: "12:30 PM" },
    { step: "Arrived at blood bank", time: "2:10 PM" },
    { step: "Passed screening", time: "5:45 PM" },
    { step: "Matched to recipient", time: "Next Day" },
  ];

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Track your donation</h1>
      <p className="text-muted-foreground mb-6">Enter your QR/ID to see the status journey. (Demo data until backend is connected)</p>

      <div className="flex gap-3 max-w-xl">
        <Input value={trackingId} onChange={(e)=>setTrackingId(e.target.value)} placeholder="e.g. LL-2025-8X9Q" />
        <Button>Search</Button>
      </div>

      <section className="grid md:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Current status</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {sample.map((s, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  <span className="font-medium">{s.step}</span>
                  <span className="ml-auto text-muted-foreground text-sm">{s.time}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>What happens next?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Your donation is carefully screened, stored, and matched to a patient in need. You’ll receive a notification when it is used.
            <div className="mt-4"><Button variant="outline">Enable notifications <ArrowRight className="ml-1" /></Button></div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
