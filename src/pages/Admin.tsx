import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Admin() {
  const navigate = useNavigate();
  
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
        <h1 className="text-3xl font-bold">Admin dashboard</h1>
      </div>
      <p className="text-muted-foreground mb-6">Create/manage events, approve sponsors, and update donation statuses.</p>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
            <CardDescription>Create and publish donation drives</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">Create event</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sponsors</CardTitle>
            <CardDescription>Approve partners and offers</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">Review applications</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tracking</CardTitle>
            <CardDescription>Update blood status (collection → bank → recipient)</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">Open tracker</Button>
          </CardContent>
        </Card>
      </section>

      <div className="mt-8 p-6 rounded-lg border lifelink-card">
        <h2 className="text-xl font-semibold">Connect backend to go live</h2>
        <p className="text-muted-foreground mt-2">To enable authentication, database, notifications and QR tracking, please connect this project to Supabase using the green button in the top right. I’ll wire everything end-to-end once connected.</p>
        <div className="mt-4 flex gap-3">
          <Button asChild><Link to="/events">Preview events</Link></Button>
          <Button asChild variant="outline"><Link to="/">Back to Home</Link></Button>
        </div>
      </div>
    </main>
  );
}
