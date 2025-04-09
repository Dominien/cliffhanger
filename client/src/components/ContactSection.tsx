import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

type FormData = {
  name: string;
  email: string;
  website?: string;
  goal: string;
};

export default function ContactSection() {
  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Erfolg!",
        description: "Deine Anfrage wurde erfolgreich gesendet.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
        variant: "destructive",
      });
    },
  });

  const form = useForm<FormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      goal: "",
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-3xl font-bold text-[#1A1F36] mb-4">
            Buch deinen kostenlosen Call & starte durch!
          </h2>
          <p className="text-gray-600 mb-6">
            Fülle das Formular aus & erhalte deine fertige Landing Page – ganz ohne Risiko.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                placeholder="Name"
                {...form.register("name")}
                className="w-full"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="E-Mail"
                {...form.register("email")}
                className="w-full"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="Website (optional)"
                {...form.register("website")}
                className="w-full"
              />
            </div>

            <div>
              <Textarea
                placeholder="Dein Ziel (kurz & knapp)"
                {...form.register("goal")}
                className="w-full"
              />
              {form.formState.errors.goal && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.goal.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#00C2FF] hover:bg-[#00A8E6]"
              disabled={isPending}
            >
              {isPending ? "Wird gesendet..." : "Jetzt Termin buchen"}
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
