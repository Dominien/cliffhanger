import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingWheelProps {
  currentStep: number;
  steps: Array<{
    title: string;
  }>;
}

export const RotatingWheel = ({ currentStep, steps }: RotatingWheelProps) => {
  const segmentAngle = 360 / steps.length;
  const radius = 200; // Increased radius for better visibility

  return (
    <div className="relative w-[400px] h-[400px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative w-full h-full"
          initial={false}
          animate={{
            rotate: -(currentStep * segmentAngle)
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          {steps.map((step, index) => {
            const rotation = index * segmentAngle;
            const isActive = index === currentStep;
            const angle = (rotation * Math.PI) / 180;

            // Calculate position for the text
            const textRadius = radius * 0.7; // Slightly inward from the edge
            const textX = Math.cos(angle) * textRadius;
            const textY = Math.sin(angle) * textRadius;

            return (
              <div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                {/* Segment */}
                <div
                  className={cn(
                    "absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left transition-colors duration-300",
                    isActive ? "bg-purple-600" : "bg-purple-200 hover:bg-purple-300"
                  )}
                  style={{
                    transformOrigin: "0% 100%",
                    borderRadius: "100% 0 0 0",
                  }}
                />

                {/* Text */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `
                      translate(${textX}px, ${textY}px) 
                      rotate(${rotation + 90}deg)
                    `,
                  }}
                >
                  <span
                    className={cn(
                      "inline-block transform -rotate-90 whitespace-nowrap text-sm font-medium",
                      isActive ? "text-white" : "text-purple-800"
                    )}
                  >
                    {step.title}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Center circle */}
      <div className="absolute inset-0 m-auto w-4 h-4 bg-purple-600 rounded-full z-10" />
    </div>
  );
};