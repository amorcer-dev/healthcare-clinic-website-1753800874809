import React from 'react';
import { WidgetAboutDoctor } from '../components/WidgetAboutDoctor'
import { WidgetProfile } from '../components/WidgetProfile'
import { WidgetServicesAndConditions } from '../components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '../components/WidgetTestimonialCarousel'

export default function Home() {
  return (
    <main className="min-h-screen">
      <WidgetAboutDoctor

      />
      <WidgetProfile

      />
      <WidgetServicesAndConditions

      />
      <WidgetTestimonialCarousel

      />
    </main>
  );
}