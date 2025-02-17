import { Coffee } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

interface CoffeeCardProps {
  name: string;
  description: string;
  roastLevel: string;
  origin: string;
  onSelect: () => void;
}

export function CoffeeCard({
  name,
  description,
  roastLevel,
  origin,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Coffee className="size-6 text-primary" />
          <CardTitle className="text-xl">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Typography.P>{description}</Typography.P>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div>
            <Typography.Small className="text-muted-foreground">
              Roast Level
            </Typography.Small>
            <Typography.P className="font-medium">{roastLevel}</Typography.P>
          </div>
          <div>
            <Typography.Small className="text-muted-foreground">
              Origin
            </Typography.Small>
            <Typography.P className="font-medium">{origin}</Typography.P>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onSelect} className="w-full">
          Select This Coffee
        </Button>
      </CardFooter>
    </Card>
  );
}