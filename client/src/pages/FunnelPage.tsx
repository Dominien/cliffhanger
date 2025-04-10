import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { insertFunnelResponseSchema, type InsertFunnelResponse } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { 
  Building2, 
  User2, 
  Zap, 
  Coffee, 
  SearchCheck,
  Target,
  Gauge,
  Shield,
  MoreHorizontal,
  ArrowLeft,
  Layout,
  MessageSquare,
  Camera,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const clientTypeOptions = [
  {
    value: "service",
    icon: User2,
    title: "Privatperson",
    description: "Sie möchten eine individuelle Digitallösung"
  },
  {
    value: "business",
    icon: Building2,
    title: "Unternehmer/in",
    description: "Sie suchen professionelle Unterstützung für Ihr Business"
  }
];

const serviceOptions = [
  {
    value: "landing_page",
    icon: Layout,
    title: "Landing Page",
    description: "Professionelle Conversion-optimierte Webseite"
  },
  {
    value: "chatbot",
    icon: MessageSquare,
    title: "KI-Chatbot",
    description: "Intelligenter 24/7 Kundenservice"
  },
  {
    value: "media",
    icon: Camera,
    title: "Foto & Video",
    description: "Hochwertige Medienproduktion"
  },
  {
    value: "complete",
    icon: Sparkles,
    title: "Komplettlösung",
    description: "Maßgeschneidertes Digitalpaket"
  }
];

const urgencyOptions = [
  {
    value: "immediate",
    icon: Zap,
    title: "Sofort",
    description: "Ich brauche schnelle Unterstützung"
  },
  {
    value: "next_quarter",
    icon: SearchCheck,
    title: "Nächstes Quartal",
    description: "Ich möchte konkrete Möglichkeiten besprechen"
  },
  {
    value: "planning",
    icon: Coffee,
    title: "Planungsphase",
    description: "Ich informiere mich erstmal"
  }
];

const projectGoalsOptions = [
  {
    value: "increase_sales",
    icon: Target,
    title: "Mehr Kunden & Umsatz",
    description: "Steigern Sie Ihre Geschäftsergebnisse"
  },
  {
    value: "improve_support",
    icon: Shield,
    title: "Besserer Service",
    description: "Optimieren Sie Ihre Kundenbetreuung"
  },
  {
    value: "automate_faq",
    icon: Gauge,
    title: "Automatisierung",
    description: "Optimieren Sie Ihre Prozesse"
  },
  {
    value: "lead_generation",
    icon: Target,
    title: "Lead-Generierung",
    description: "Gewinnen Sie neue Interessenten"
  },
  {
    value: "other",
    icon: MoreHorizontal,
    title: "Anderes Ziel",
    description: "Individuelle Anforderungen"
  }
];

const stepDescriptions = {
  1: "Wir passen unsere Beratung an Ihre individuellen Bedürfnisse an.",
  2: "Welche unserer Dienstleistungen interessiert Sie am meisten?",
  3: "Diese Information hilft uns, die optimale Strategie für Sie zu entwickeln.",
  4: "Ihre Ziele bestimmen den Fokus unserer Zusammenarbeit.",
  5: "Ihre Daten werden sicher und vertraulich behandelt."
};

export default function FunnelPage() {
  const [step, setStep] = useState(1);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const totalSteps = 5;

  // Add scroll to top effect when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const form = useForm<InsertFunnelResponse>({
    resolver: zodResolver(insertFunnelResponseSchema),
    defaultValues: {
      businessType: "service",
      selectedService: "landing_page",
      projectTimeline: "planning",
      projectGoals: "increase_sales",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      website: "",
      message: "",
      privacyAccepted: true
    }
  });

  async function onSubmit(data: InsertFunnelResponse) {
    try {
      await apiRequest("POST", "/api/funnel-responses", data);
      toast({
        title: "Vielen Dank!",
        description: "Wir werden uns in Kürze bei Ihnen melden.",
      });
      setLocation("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      });
    }
  }

  const handleOptionSelect = (value: string, field: keyof InsertFunnelResponse) => {
    form.setValue(field, value as any);
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[#101010] pt-16 md:pt-24 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-8 border border-white/20"
        >
          {/* Progress Bar - Optimized for mobile */}
          <div className="mb-4 md:mb-8">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                className="h-full bg-[#db9e22] rounded-full transition-all duration-500"
              />
            </div>
            <div className="mt-2 text-right">
              <span className="text-sm text-white/60">Schritt {step} von {totalSteps}</span>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            {/* Step Title and Description - Optimized for mobile */}
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl md:text-4xl font-bold text-white mb-2"
              >
                {step === 1 && "Wer sind Sie?"}
                {step === 2 && "Welche Leistung interessiert Sie?"}
                {step === 3 && "Wie dringend benötigen Sie Unterstützung?"}
                {step === 4 && "Was möchten Sie erreichen?"}
                {step === 5 && "Ihre Kontaktdaten"}
              </motion.h1>
              <p className="text-white/80 text-sm">{stepDescriptions[step as keyof typeof stepDescriptions]}</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                {step === 1 && (
                  <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                    {clientTypeOptions.map((option, index) => (
                      <motion.div
                        key={option.value}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          type="button"
                          onClick={() => handleOptionSelect(option.value, 'businessType')}
                          className={`w-full p-3 md:p-6 rounded-xl border-2 text-left transition-all ${
                            form.getValues('businessType') === option.value
                              ? 'border-[#db9e22] bg-[#db9e22]/10 text-white'
                              : 'border-white/20 hover:border-[#db9e22]/50 text-white/80 hover:text-white'
                          }`}
                        >
                          <option.icon className={`w-6 h-6 md:w-8 md:h-8 ${form.getValues('businessType') === option.value ? 'text-[#db9e22]' : 'text-white/60'} mb-2 md:mb-3`} />
                          <h3 className="text-base md:text-lg font-semibold mb-1">{option.title}</h3>
                          <p className="text-xs md:text-sm opacity-80">{option.description}</p>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                    {serviceOptions.map((option, index) => (
                      <motion.div
                        key={option.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          type="button"
                          onClick={() => handleOptionSelect(option.value, 'selectedService')}
                          className={`w-full p-3 md:p-6 rounded-xl border-2 text-left transition-all ${
                            form.getValues('selectedService') === option.value
                              ? 'border-[#db9e22] bg-[#db9e22]/10 text-white'
                              : 'border-white/20 hover:border-[#db9e22]/50 text-white/80 hover:text-white'
                          }`}
                        >
                          <option.icon className={`w-6 h-6 md:w-8 md:h-8 ${form.getValues('selectedService') === option.value ? 'text-[#db9e22]' : 'text-white/60'} mb-2 md:mb-3`} />
                          <h3 className="text-base md:text-lg font-semibold mb-1">{option.title}</h3>
                          <p className="text-xs md:text-sm opacity-80">{option.description}</p>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-3 md:grid-cols-3 md:gap-4">
                    {urgencyOptions.map((option, index) => (
                      <motion.div
                        key={option.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          type="button"
                          onClick={() => handleOptionSelect(option.value, 'projectTimeline')}
                          className={`w-full p-3 md:p-6 rounded-xl border-2 text-left transition-all h-full ${
                            form.getValues('projectTimeline') === option.value
                              ? 'border-[#db9e22] bg-[#db9e22]/10 text-white'
                              : 'border-white/20 hover:border-[#db9e22]/50 text-white/80 hover:text-white'
                          }`}
                        >
                          <option.icon className={`w-6 h-6 md:w-8 md:h-8 ${form.getValues('projectTimeline') === option.value ? 'text-[#db9e22]' : 'text-white/60'} mb-2 md:mb-3`} />
                          <h3 className="text-base md:text-lg font-semibold mb-1">{option.title}</h3>
                          <p className="text-xs md:text-sm opacity-80">{option.description}</p>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                    {projectGoalsOptions.map((option, index) => (
                      <motion.div
                        key={option.value}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          type="button"
                          onClick={() => handleOptionSelect(option.value, 'projectGoals')}
                          className={`w-full p-3 md:p-6 rounded-xl border-2 text-left transition-all ${
                            form.getValues('projectGoals') === option.value
                              ? 'border-[#db9e22] bg-[#db9e22]/10 text-white'
                              : 'border-white/20 hover:border-[#db9e22]/50 text-white/80 hover:text-white'
                          }`}
                        >
                          <option.icon className={`w-6 h-6 md:w-8 md:h-8 ${form.getValues('projectGoals') === option.value ? 'text-[#db9e22]' : 'text-white/60'} mb-2 md:mb-3`} />
                          <h3 className="text-base md:text-lg font-semibold mb-1">{option.title}</h3>
                          <p className="text-xs md:text-sm opacity-80">{option.description}</p>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {step === 5 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4 md:space-y-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white/90">Persönliche Informationen</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Vorname</FormLabel>
                              <FormControl>
                                <Input 
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#db9e22]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Nachname</FormLabel>
                              <FormControl>
                                <Input 
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#db9e22]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white/90">Kontaktdaten</h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">E-Mail-Adresse</FormLabel>
                              <FormControl>
                                <Input 
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#db9e22]" 
                                  {...field} 
                                  type="email" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Telefonnummer</FormLabel>
                              <FormControl>
                                <Input 
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#db9e22]" 
                                  {...field} 
                                  type="tel" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white/90">Zusätzliche Informationen</h3>
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Website (komplett optional)</FormLabel>
                            <FormControl>
                              <Input 
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#db9e22]" 
                                {...field} 
                                
                                placeholder="z.B. www.name.de (kann leer bleiben)"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="privacyAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-white/20 p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-white/20 data-[state=checked]:bg-[#db9e22] data-[state=checked]:border-[#db9e22]"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-white text-sm">
                              Ich stimme zu, dass meine Daten gemäß der Datenschutzerklärung gespeichert und verarbeitet werden.
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(prev => Math.max(prev - 1, 1))}
                    disabled={step === 1}
                    className="flex items-center gap-2 bg-transparent border-white/20 text-white hover:bg-white/5 text-sm md:text-base py-2 px-3 md:py-3 md:px-4"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Zurück
                  </Button>
                  {step === totalSteps && (
                    <Button 
                      type="submit"
                      className="bg-[#db9e22] hover:bg-[#c78d1a] text-white text-sm md:text-base py-2 px-3 md:py-3 md:px-4"
                    >
                      Absenden
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}