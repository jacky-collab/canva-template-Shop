import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#fdf6e3", color: "#8c4a3e" }}
    >
      <div className="text-center space-y-8 p-6 max-w-md">
        {/* Hero */}
        <h1 className="text-5xl font-extrabold">
          Mama Content Starterkit
        </h1>
        <p className="text-xl">
          9 moderne Post-Vorlagen & 30 Content-Ideen – perfekt für Business-Mamas!
        </p>
        {/* Großer Button */}
        <a
          href="https://payhip.com/b/XW8mL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="px-12 py-6 text-2xl rounded-2xl shadow-lg"
            style={{ backgroundColor: "#8c4a3e", color: "#fdf6e3" }}
          >
            Jetzt Starterkit sichern
          </Button>
        </a>
      </div>
    </div>
  );
}
