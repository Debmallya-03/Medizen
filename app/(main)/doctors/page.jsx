import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";
import { Badge } from "@/components/ui/badge";


export default async function DoctorsPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <Badge
            variant="outline"
            className="bg-red-900/30 border-red-700/30 px-20 py-4 text-red-400 text-lg font-medium"
          >
            Find Your Doctor
        </Badge>
        <p className="text-muted-foreground text-lg mt-2">
          Browse by speciality or view all available healthcare providers
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SPECIALTIES.map((specialty) => (
          <Link key={specialty.name} href={`/doctors/${specialty.name}`}>
            <Card className="hover:border-red-700/40 transition-all cursor-pointer border-red-900/20 h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mb-4">
                  <div className="text-red-400">{specialty.icon}</div>
                </div>
                <h3 className="font-medium text-white">{specialty.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}