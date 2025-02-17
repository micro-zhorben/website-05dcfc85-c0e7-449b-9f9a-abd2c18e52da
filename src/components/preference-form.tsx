import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";

const formSchema = z.object({
  roastLevel: z.string(),
  brewMethod: z.string(),
  flavorProfile: z.string(),
});

interface PreferenceFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roastLevel: "",
      brewMethod: "",
      flavorProfile: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Typography.H2>Coffee Preferences</Typography.H2>
        <Typography.P className="text-muted-foreground">
          Tell us your preferences to get personalized coffee recommendations.
        </Typography.P>

        <FormField
          control={form.control}
          name="roastLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roast Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select roast level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="light">Light Roast</SelectItem>
                  <SelectItem value="medium">Medium Roast</SelectItem>
                  <SelectItem value="dark">Dark Roast</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Choose your preferred coffee roast level
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brewMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brew Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select brew method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="drip">Drip Coffee</SelectItem>
                  <SelectItem value="espresso">Espresso</SelectItem>
                  <SelectItem value="french">French Press</SelectItem>
                  <SelectItem value="pour">Pour Over</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                How do you usually prepare your coffee?
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="flavorProfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Flavor Profile</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select flavor profile" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="fruity">Fruity & Bright</SelectItem>
                  <SelectItem value="nutty">Nutty & Chocolate</SelectItem>
                  <SelectItem value="caramel">Caramel & Sweet</SelectItem>
                  <SelectItem value="earthy">Earthy & Bold</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                What flavors do you enjoy in your coffee?
              </FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Get Recommendations
        </Button>
      </form>
    </Form>
  );
}