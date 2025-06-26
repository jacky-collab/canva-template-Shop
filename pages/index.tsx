import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Professionelle Canva-Vorlagen <br /> für deinen Social Media Boost
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Starte noch heute mit hochwertigen Designs für Instagram, Stories & mehr!
        </p>

        <a
          href="https://payhip.com/b/XW8mL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-lg px-6 py-3 mt-6">
            Jetzt Starterkit sichern
          </Button>
        </a>
      </section>
    </div>
  );
}
