import { useEffect, useRef } from "react";
import hero from "@/assets/hero-lifelink.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, TicketPercent, QrCode } from "lucide-react";
import { Link } from "react-router-dom";

const mockEvents = [
  { id: 1, title: "City Blood Drive", date: "2025-08-20", time: "10:00 AM - 3:00 PM", location: "Central Community Hall", bloodTypes: ["A+","O+","B+"], },
  { id: 2, title: "University Campus Camp", date: "2025-08-24", time: "9:00 AM - 2:00 PM", location: "Tech University Gym", bloodTypes: ["All"], },
  { id: 3, title: "Corporate Wellness Day", date: "2025-08-30", time: "11:00 AM - 4:00 PM", location: "Metro Tower Plaza", bloodTypes: ["O-","AB+"], },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <main>
      <section ref={heroRef} className="relative overflow-hidden lifelink-hero">
        <img src={hero} alt="LifeLink hero showing donors at a modern clinic" loading="lazy" className="w-full h-[56vh] object-cover" />
        <div className="lifelink-hero-spotlight" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-balance max-w-3xl">
              LifeLink — Blood Donation & Tracking
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find nearby events, register in seconds, earn health rewards, and track your blood from collection to recipient.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/events"><Button variant="hero" size="lg">Find Events</Button></Link>
              <Link to="/track"><Button variant="outline" size="lg">Track Donation</Button></Link>
              <Link to="/sponsors"><Button variant="ghost" size="lg">Partner Offers</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Upcoming donation events</h2>
          <p className="text-muted-foreground">Browse a few highlights. See all events for full filters.</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockEvents.map(e => (
            <Card key={e.id} className="lifelink-card group transition-transform hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle className="text-xl">{e.title}</CardTitle>
                <CardDescription>Blood types: {e.bloodTypes.join(", ")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2"><Calendar className="text-primary" />{e.date} · {e.time}</div>
                <div className="flex items-center gap-2"><MapPin className="text-primary" />{e.location}</div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline" asChild><Link to={`/events#${e.id}`}>Details</Link></Button>
                <Button variant="default" asChild><Link to="/events">Register</Link></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold">Earn points. Redeem healthy rewards.</h3>
            <p className="text-muted-foreground mt-2">Every successful donation earns points you can redeem for discounts at partner hospitals and healthy food shops.</p>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" asChild><Link to="/sponsors"><TicketPercent /> View offers</Link></Button>
            </div>
          </div>
          <div className="rounded-xl border p-6 lifelink-card">
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="size-6 rounded-full bg-primary/15 text-primary grid place-items-center">1</span>Donate blood at any LifeLink event.</li>
              <li className="flex gap-3"><span className="size-6 rounded-full bg-primary/15 text-primary grid place-items-center">2</span>Scan your QR at collection to link your donation.</li>
              <li className="flex gap-3"><span className="size-6 rounded-full bg-primary/15 text-primary grid place-items-center">3</span>Redeem points for coupons instantly.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="rounded-xl border p-6 lifelink-card">
          <h3 className="text-xl font-bold flex items-center gap-2"><QrCode /> Track your donation</h3>
          <p className="text-muted-foreground mt-1">Enter your tracking ID or scan the QR to follow your blood from collection → bank → recipient.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="default"><Link to="/track">Open tracker</Link></Button>
            <Button asChild variant="ghost"><Link to="/events">Find an event</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
