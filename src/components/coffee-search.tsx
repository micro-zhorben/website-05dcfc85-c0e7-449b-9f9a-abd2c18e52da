import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CoffeeSearchProps {
  onSearch: (query: string) => void;
}

export function CoffeeSearch({ onSearch }: CoffeeSearchProps) {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search for coffee..."
        className="pr-12"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-0 top-0 h-full rounded-l-none text-muted-foreground hover:text-foreground"
      >
        <Search className="size-4" />
      </Button>
    </div>
  );
}