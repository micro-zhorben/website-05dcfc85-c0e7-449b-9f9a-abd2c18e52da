import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { CoffeeSearch } from "@/components/coffee-search";
import { PreferenceForm } from "@/components/preference-form";
import { CoffeeCard } from "@/components/coffee-card";
import { RecommendationSkeleton } from "@/components/recommendation-skeleton";
import { Separator } from "@/components/ui/separator";

const mockCoffees = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright and complex with floral notes, bergamot, and citrus undertones. A light roast that showcases the unique terroir of Ethiopia's coffee-growing region.",
    roastLevel: "Light",
    origin: "Ethiopia",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Well-balanced with caramel sweetness, hints of nuts, and a smooth chocolate finish. Medium roasted to perfection.",
    roastLevel: "Medium",
    origin: "Colombia",
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Full-bodied with earthy tones, subtle spice, and a rich, smooth finish. Dark roasted to bring out deep, complex flavors.",
    roastLevel: "Dark",
    origin: "Indonesia",
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recommendations, setRecommendations] = useState(mockCoffees);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Filter recommendations based on search query
    const filtered = mockCoffees.filter((coffee) =>
      coffee.name.toLowerCase().includes(query.toLowerCase())
    );
    setRecommendations(filtered);
  };

  const handlePreferenceSubmit = async (values: any) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Filter recommendations based on preferences
    const filtered = mockCoffees.filter(
      (coffee) => coffee.roastLevel.toLowerCase() === values.roastLevel
    );
    setRecommendations(filtered);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-12 pt-6">
      <header className="mx-auto mb-12 flex max-w-4xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="size-8 text-primary" />
          <Typography.H1>AI Coffee Recommender</Typography.H1>
        </div>
        <ModeToggle />
      </header>

      <main className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Typography.Lead className="mb-6">
            Discover your perfect coffee match with our AI-powered recommendations
          </Typography.Lead>
          <CoffeeSearch onSearch={handleSearch} />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[350px,1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PreferenceForm onSubmit={handlePreferenceSubmit} />
          </motion.div>

          <div>
            <Typography.H2 className="mb-6">Recommendations</Typography.H2>
            <div className="grid gap-6">
              {isLoading ? (
                <>
                  <RecommendationSkeleton />
                  <RecommendationSkeleton />
                  <RecommendationSkeleton />
                </>
              ) : recommendations.length > 0 ? (
                recommendations.map((coffee) => (
                  <motion.div
                    key={coffee.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CoffeeCard
                      {...coffee}
                      onSelect={() => {
                        // Handle coffee selection
                        console.log("Selected coffee:", coffee.name);
                      }}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="rounded-lg border border-border p-8 text-center">
                  <Typography.H3 className="mb-2">No matches found</Typography.H3>
                  <Typography.P className="text-muted-foreground">
                    Try adjusting your preferences or search criteria
                  </Typography.P>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="mx-auto mt-24 max-w-4xl">
        <Separator className="mb-8" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Typography.H4 className="mb-3">About</Typography.H4>
            <Typography.P className="text-muted-foreground">
              AI-powered coffee recommendations tailored to your taste preferences
            </Typography.P>
          </div>
          <div>
            <Typography.H4 className="mb-3">Features</Typography.H4>
            <Typography.List>
              <li>Personalized recommendations</li>
              <li>Taste preference analysis</li>
              <li>Detailed coffee profiles</li>
            </Typography.List>
          </div>
          <div>
            <Typography.H4 className="mb-3">Contact</Typography.H4>
            <Typography.P className="text-muted-foreground">
              Questions? Reach out to our support team for assistance
            </Typography.P>
          </div>
        </div>
      </footer>
    </div>
  );
}