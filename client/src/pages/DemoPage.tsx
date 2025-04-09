import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InsertLeadResponse, insertLeadResponseSchema } from "@shared/schema";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertLeadResponse>({
    resolver: zodResolver(insertLeadResponseSchema),
    defaultValues: {
      businessType: "service",
      projectTimeline: "immediate",
      projectGoals: "improve_support",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      website: "",
      currentChatbot: false,
      privacyAccepted: true
    }
  });

  const onSubmit = async (data: InsertLeadResponse) => {
    setIsSubmitting(true);
    try {
      await apiRequest("/api/lead-responses", {
        method: "POST",
        body: JSON.stringify(data)
      });

      toast({
        title: "Success!",
        description: "We've received your demo request. We'll contact you shortly!"
      });

      queryClient.invalidateQueries({ queryKey: ["/api/lead-responses"] });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Request a Demo</h1>
      <div className="max-w-2xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Form implementation will go here */}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Request Demo"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
