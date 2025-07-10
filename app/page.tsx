'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import DevelopmentProcess from './components/DevelopmentProcess';
import WebCapabilitiesSection from './components/WebCapabilitiesSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
			<HeroSection />
			<ProjectsSection />
			<WebCapabilitiesSection />
			<DevelopmentProcess />

			<ContactSection />
		</main>
	);
}
