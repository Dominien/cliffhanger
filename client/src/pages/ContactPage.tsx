import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Sparkles, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const benefits = [
  {
    icon: Sparkles,
    title: "Maßgeschneiderte Lösungen",
    description: "Individuelle Strategien für Ihren digitalen Erfolg"
  },
  {
    icon: Target,
    title: "Expertise & Innovation",
    description: "Modernste Technologien und bewährte Methoden"
  },
  {
    icon: Clock,
    title: "Schnelle Umsetzung",
    description: "Effiziente Prozesse für zeitnahe Resultate"
  }
];

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // TODO: Implement contact form submission
      toast({
        title: "Vielen Dank!",
        description: "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      });
    }
  };

  return (
    <div className="bg-[#272727] pt-32 pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1.5px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Lassen Sie uns zusammenarbeiten
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ihre Vision verdient die beste Unterstützung. Kontaktieren Sie uns für eine maßgeschneiderte Strategie.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#db9e22]/50 transition-all duration-300">
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-[#db9e22]" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-white group-hover:text-[#db9e22] transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                      {index < benefits.length - 1 && (
                        <div className="my-3 h-px bg-white/5" />
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#db9e22]" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white">E-Mail</h3>
                      <a 
                        href="mailto:info@cliffhanger-studios.de" 
                        className="text-sm text-white/60 hover:text-[#db9e22] transition-colors"
                      >
                        info@cliffhanger-studios.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#db9e22]/50 transition-all duration-300"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input 
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#db9e22]" 
                            placeholder="Ihr vollständiger Name"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">E-Mail</FormLabel>
                        <FormControl>
                          <Input 
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#db9e22]" 
                            placeholder="ihre.email@example.com"
                            type="email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Ihre Nachricht</FormLabel>
                        <FormControl>
                          <Textarea 
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#db9e22] min-h-[150px]" 
                            placeholder="Wie können wir Ihnen helfen?"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-[#db9e22] hover:bg-[#c78d1a] text-white"
                  >
                    Nachricht senden
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}