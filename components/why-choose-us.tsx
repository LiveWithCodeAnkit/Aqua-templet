import {
  Award,
  HeartHandshake,
  Truck,
  Users,
} from "lucide-react";

const features = [
  {
    name: "Expert Guidance",
    description:
      "Our team of aquarium specialists is here to help you every step of the way",
    icon: Users,
  },
  {
    name: "Premium Quality",
    description:
      "We source only the highest quality products from trusted manufacturers",
    icon: Award,
  },
  {
    name: "Fast Shipping",
    description:
      "Quick and secure delivery with special packaging for live specimens",
    icon: Truck,
  },
  {
    name: "Satisfaction Guaranteed",
    description:
      "30-day money-back guarantee and lifetime support for your aquarium",
    icon: HeartHandshake,
  },
];

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 space-y-8 py-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Choose AquaCommerce?
        </h2>
        <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
          We&apos;re committed to providing the best experience for aquarium
          enthusiasts.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center transition-all hover:shadow-lg"
          >
            <div className="rounded-full bg-primary/10 p-3">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">{feature.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}