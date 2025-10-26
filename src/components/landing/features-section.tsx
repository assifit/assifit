
"use client"; // Using useLanguage hook

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Mic, BarChart3, Bell } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { FeatureContent } from '@/lib/translations';
import { useLanguage } from '@/contexts/language-context';

interface FeatureCardProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  iconStrokeWidth?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, iconStrokeWidth = 1.5 }) => {
  return (
    <Card className="bg-card border border-border/50 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 w-full md:max-w-xs">
      <CardContent className="flex items-start gap-3 p-4">
        <Icon className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" strokeWidth={iconStrokeWidth} />
        <div>
          <h3 className="font-headline text-lg text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const featureIcons = [Home, Mic, BarChart3, Bell]; 

export default function FeaturesSection() {
  const { t } = useLanguage();
  const featuresData: FeatureContent[] = t.features;

  // Helper to get the correct icon for a feature based on its original index
  const getIconForFeature = (featureTitle: string) => {
    const originalIndex = featuresData.findIndex(f => f.title === featureTitle);
    return featureIcons[originalIndex] || Home; // Fallback to Home icon
  };

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 md:mb-16 font-headline">
          {t.featuresHeadline}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end order-1 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src="/images/img_feature.png"
                alt="AssiFit Key Features Visual"
                width={400}
                height={500}
                className="rounded-2xl object-cover"
                style={{ maxHeight: '600px' }}
                data-ai-hint="abstract fitness tech"
              />
            </div>
          </div>

          {/* Right Column - 4 Feature Cards in a Vertical Layout */}
          <div className="w-full md:w-7/12 order-2">
            <div className="flex flex-col gap-6">
              {featuresData.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={getIconForFeature(feature.title)}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
