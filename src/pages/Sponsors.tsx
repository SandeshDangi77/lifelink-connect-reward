import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TicketPercent } from "lucide-react";

export default function Sponsors() {
  const offers = [
    { id: 1, brand: "CarePlus Hospital", title: "15% off blood tests", points: 50 },
    { id: 2, brand: "GreenBite Foods", title: "Buy 1 Get 1 on salads", points: 30 },
    { id: 3, brand: "Vitality Pharmacy", title: "10% off supplements", points: 40 },
  ];

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Partner offers</h1>
      <p className="text-muted-foreground mb-6">Redeem your points for healthy rewards.</p>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((o) => (
          <Card key={o.id} className="lifelink-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2"><TicketPercent className="text-primary" /> {o.brand}</CardTitle>
              <CardDescription>{o.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Redeem for {o.points} pts</Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
