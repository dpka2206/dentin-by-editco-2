import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Mail, Phone, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

interface Submission {
  _id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = "admin"; // Hardcoded for simplified security requirement

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      fetchSubmissions();
    } else {
      toast.error("Incorrect password");
    }
  };

  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/submissions");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setSubmissions(data);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching submissions");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="pt-32 pb-24 min-h-screen bg-muted/20 flex flex-col items-center justify-center">
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-8 rounded-[32px] border border-border shadow-sm space-y-6 text-center">
          <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em]">
            Admin Access
          </Badge>
          <div className="space-y-4">
            <h1 className="text-2xl font-black">Admin Login</h1>
            <Input 
              type="password" 
              placeholder="Enter admin password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl h-12 text-center"
            />
            <Button type="submit" className="w-full h-12 rounded-xl font-bold">
              Login
            </Button>
          </div>
        </form>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-24 min-h-screen bg-muted/10">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Badge className="bg-emerald-50 text-emerald-700 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-4">
              Dashboard
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-black">Patient Inquiries</h1>
          </div>
          <Button onClick={fetchSubmissions} variant="outline" className="rounded-xl" disabled={isLoading}>
            {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Refresh Data
          </Button>
        </div>

        <div className="bg-white rounded-[32px] border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
             <Table>
               <TableHeader>
                 <TableRow className="bg-muted/30">
                   <TableHead className="font-bold">Patient</TableHead>
                   <TableHead className="font-bold">Contact</TableHead>
                   <TableHead className="font-bold">Service Requested</TableHead>
                   <TableHead className="font-bold">Requested Time</TableHead>
                   <TableHead className="font-bold whitespace-nowrap">Date Submitted</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {submissions.map((sub) => (
                   <TableRow key={sub._id}>
                     <TableCell>
                       <div className="font-bold text-[15px]">{sub.name}</div>
                     </TableCell>
                     <TableCell>
                       <div className="space-y-1 text-sm text-muted-foreground">
                         <div className="flex items-center gap-2">
                           <Phone className="w-3.5 h-3.5" />
                           {sub.phone}
                         </div>
                         {sub.email && (
                           <div className="flex items-center gap-2">
                             <Mail className="w-3.5 h-3.5" />
                             {sub.email}
                           </div>
                         )}
                       </div>
                     </TableCell>
                     <TableCell>
                       <Badge variant="secondary" className="rounded-md font-medium">
                         {sub.service}
                       </Badge>
                     </TableCell>
                     <TableCell>
                       <div className="space-y-1 text-sm text-muted-foreground">
                         {sub.date ? (
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5" />
                              {sub.date}
                            </div>
                         ) : (
                            <span className="text-muted-foreground/50 text-xs italic">No date</span>
                         )}
                         {sub.time && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5" />
                              {sub.time}
                            </div>
                         )}
                       </div>
                     </TableCell>
                     <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                       {format(new Date(sub.createdAt), "MMM d, yyyy 'at' h:mm a")}
                     </TableCell>
                   </TableRow>
                 ))}
                 {submissions.length === 0 && !isLoading && (
                   <TableRow>
                     <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                       No inquiries found yet.
                     </TableCell>
                   </TableRow>
                 )}
               </TableBody>
             </Table>
          </div>
        </div>
      </div>
    </main>
  );
}
