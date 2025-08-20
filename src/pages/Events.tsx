import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EventItem {
  id: number;
  title: string;
  date: string; // ISO date
  time: string;
  location: string;
  bloodTypes: string[];
}

const EVENTS: EventItem[] = [
  { id: 1, title: "City Blood Drive", date: "2025-08-20", time: "10:00 AM - 3:00 PM", location: "Central Community Hall", bloodTypes: ["A+","O+","B+"], },
  { id: 2, title: "University Campus Camp", date: "2025-08-24", time: "9:00 AM - 2:00 PM", location: "Tech University Gym", bloodTypes: ["All"], },
  { id: 3, title: "Corporate Wellness Day", date: "2025-08-30", time: "11:00 AM - 4:00 PM", location: "Metro Tower Plaza", bloodTypes: ["O-","AB+"], },
  { id: 4, title: "Community Park Drive", date: "2025-09-04", time: "10:00 AM - 3:00 PM", location: "Riverside Park", bloodTypes: ["A-","O+"], },
];

export default function Events() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [blood, setBlood] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return EVENTS.filter((e) =>
      (blood === "all" || e.bloodTypes.includes(blood) || e.bloodTypes.includes("All")) &&
      (e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q))
    );
  }, [query, blood]);

  return (
    <main className="container mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="hover:bg-accent/10"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold">Find a donation event</h1>
      </div>
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <p className="text-muted-foreground">Search by location or filter by blood type.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Input placeholder="Search by place or title" value={query} onChange={(e) => setQuery(e.target.value)} />
          <Select value={blood} onValueChange={setBlood}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Blood type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              {[
                "O+","O-","A+","A-","B+","B-","AB+","AB-",
              ].map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((e) => (
          <Card key={e.id} className="lifelink-card">
            <CardHeader>
              <CardTitle className="text-xl">{e.title}</CardTitle>
              <CardDescription>Blood types: {e.bloodTypes.join(", ")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Calendar className="text-primary" />{e.date} · {e.time}</div>
              <div className="flex items-center gap-2"><MapPin className="text-primary" />{e.location}</div>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full">Register</Button>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
