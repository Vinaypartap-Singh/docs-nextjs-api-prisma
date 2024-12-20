import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {[
            {
              name: "Alex Johnson",
              role: "CEO, TechCorp",
              content:
                "This product has revolutionized our workflow. Highly recommended!",
            },
            {
              name: "Sarah Lee",
              role: "Marketing Director, InnovateCo",
              content:
                "The analytics features are game-changing. We've seen a 30% increase in productivity.",
            },
            {
              name: "Michael Chen",
              role: "Freelance Designer",
              content:
                "As a solo entrepreneur, this tool has been invaluable. It's like having a whole team!",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
