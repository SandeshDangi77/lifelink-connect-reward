export interface EventData {
  id: number;
  title: string;
  date: string; // ISO
  time: string;
  location: string;
  bloodTypes: string[];
}

export const sampleEvents: EventData[] = [
  { id: 1, title: "City Blood Drive", date: "2025-08-20", time: "10:00 AM - 3:00 PM", location: "Central Community Hall", bloodTypes: ["A+","O+","B+"], },
  { id: 2, title: "University Campus Camp", date: "2025-08-24", time: "9:00 AM - 2:00 PM", location: "Tech University Gym", bloodTypes: ["All"], },
  { id: 3, title: "Corporate Wellness Day", date: "2025-08-30", time: "11:00 AM - 4:00 PM", location: "Metro Tower Plaza", bloodTypes: ["O-","AB+"], },
];
