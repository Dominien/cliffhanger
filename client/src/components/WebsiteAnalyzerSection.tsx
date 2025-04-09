import { useState } from "react";
import { motion } from "framer-motion";
import { Search, AlertCircle, CheckCircle, Clock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AnalysisResult {
  score: number;
  performance: number;
  accessibility: number;
  mobile: number;
  recommendations: string[];
}

export default function WebsiteAnalyzerSection() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  const analyzeWebsite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsAnalyzing(true);
    setError("");
    
    try {
      const response = await fetch("/api/analyze-website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) throw new Error("Analysis failed");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Entschuldigung, die Analyse konnte nicht durchgeführt werden. Bitte versuche es später erneut.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#1A1F36] mb-4">
            Wie performant ist deine Website?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Analysiere deine aktuelle Website und erhalte sofort Einblicke in Verbesserungspotenziale.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={analyzeWebsite} className="flex gap-4 mb-8">
            <Input
              type="url"
              placeholder="https://deine-website.de"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
              required
            />
            <Button 
              type="submit" 
              disabled={isAnalyzing}
              className="bg-[#00C2FF] hover:bg-[#00A8E6] text-white"
            >
              {isAnalyzing ? (
                <Clock className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Search className="mr-2 h-4 w-4" />
              )}
              Website analysieren
            </Button>
          </form>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle className="h-5 w-5" />
                <p>{error}</p>
              </div>
            </div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Overall Score */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#1A1F36]">
                    Gesamtbewertung
                  </h3>
                  <div className="flex items-center gap-2">
                    {result.score >= 90 ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                    )}
                    <span className="text-2xl font-bold text-[#1A1F36]">
                      {result.score}/100
                    </span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-[#00C2FF]" />
                      <span className="font-medium">Performance</span>
                    </div>
                    <div className="text-2xl font-bold text-[#1A1F36]">
                      {result.performance}%
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-[#00C2FF]" />
                      <span className="font-medium">Accessibility</span>
                    </div>
                    <div className="text-2xl font-bold text-[#1A1F36]">
                      {result.accessibility}%
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Smartphone className="h-5 w-5 text-[#00C2FF]" />
                      <span className="font-medium">Mobile</span>
                    </div>
                    <div className="text-2xl font-bold text-[#1A1F36]">
                      {result.mobile}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-[#1A1F36] mb-4">
                  Verbesserungsvorschläge
                </h3>
                <ul className="space-y-3">
                  {result.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-[#00C2FF] mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
