import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Our Features
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Easy Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Seamlessly integrate our product into your existing workflow
                with just a few clicks.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Powerful Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Gain valuable insights with our advanced analytics tools and
                data visualization.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our dedicated support team is always ready to assist you,
                anytime, anywhere.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
