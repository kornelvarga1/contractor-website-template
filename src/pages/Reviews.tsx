import { Link } from "react-router-dom";
import { Star, Phone } from "lucide-react";
import { client } from "@/config/client";

const reviews = [
  { name: "David R.", location: "Phoenix, AZ", service: "Roof Replacement", rating: 5, text: "Mike and his crew replaced our entire tile roof in three days. They showed up on time, kept the yard clean, and the price was exactly what they quoted. No surprises. Best roofing experience I've had." },
  { name: "Sarah M.", location: "Scottsdale, AZ", service: "Roof Repair", rating: 5, text: "Had a leak after a monsoon storm and Mike came out the same day. Fixed it quickly and didn't try to upsell me on a full replacement I didn't need. Honest and fair." },
  { name: "James T.", location: "Tempe, AZ", service: "Storm Damage Repair", rating: 5, text: `Our roof took a beating during a hailstorm. ${client.companyName} handled the insurance paperwork and got the repairs done within a week. Couldn't ask for better service.` },
  { name: "Linda K.", location: "Mesa, AZ", service: "Metal Roofing", rating: 5, text: "We switched to a metal roof and couldn't be happier. The team was professional, the install was flawless, and our energy bills dropped noticeably. Highly recommend." },
  { name: "Robert P.", location: "Chandler, AZ", service: "Flat Roof Systems", rating: 5, text: "Had a commercial flat roof that needed serious attention. Mike gave us honest options and completed the work on schedule. The crew was respectful and thorough." },
  { name: "Maria G.", location: "Glendale, AZ", service: "Roof Inspection", rating: 5, text: "Called for a free inspection before selling our home. Mike found a couple minor issues, fixed them affordably, and gave us a clean bill of health for the buyer. Great integrity." },
  { name: "Tom W.", location: "Peoria, AZ", service: "Roof Replacement", rating: 5, text: "Third roofer I called and the only one who didn't try to pressure me. Fair price, great work, cleaned up everything. Mike is the real deal." },
  { name: "Jennifer H.", location: "Phoenix, AZ", service: "Roof Repair", rating: 5, text: "Small leak around a vent pipe. They came out next morning, had it sealed in under an hour. Charged a very fair price. Will absolutely use them again." },
  { name: "Carlos D.", location: "Scottsdale, AZ", service: "Commercial Roofing", rating: 5, text: "They re-roofed our small office building. Minimal disruption to our business, professional crew, and the price was competitive. Five stars all around." },
  { name: "Patricia N.", location: "Tempe, AZ", service: "Storm Damage Repair", rating: 5, text: "After the July storms, we had missing shingles everywhere. Mike's team was out within 48 hours and handled the whole insurance claim process. Lifesavers." },
  { name: "Steve L.", location: "Mesa, AZ", service: "Roof Replacement", rating: 5, text: "Complete tear-off and re-roof. The crew worked hard in 110-degree heat and did beautiful work. Mike personally checked everything at the end. That's service." },
  { name: "Angela F.", location: "Chandler, AZ", service: "Roof Inspection", rating: 5, text: "Bought a home and wanted an independent roof inspection. Mike was thorough, explained everything in plain English, and didn't try to sell me anything. Trustworthy company." },
];

const Reviews = () => {
  return (
    <>
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Don't take our word for it — hear from homeowners and businesses across the Phoenix area.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-sm border border-border bg-card p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-card-foreground/80 leading-relaxed">"{r.text}"</p>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-sm font-semibold text-card-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location} · {r.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Join Hundreds of Satisfied Homeowners
          </h2>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/contact" className="inline-flex h-11 items-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Get Your Free Estimate
            </Link>
            <Link to="/write-a-review" className="inline-flex h-11 items-center rounded-sm border border-accent px-8 text-base font-bold text-accent shadow hover:bg-accent hover:text-accent-foreground transition-colors">
              Write a Review
            </Link>
            <a href={`tel:${client.phoneTel}`} className="inline-flex items-center gap-2 text-base font-bold text-primary-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> {client.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
