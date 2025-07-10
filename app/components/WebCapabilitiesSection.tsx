import React from 'react';

const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Capacités Mobile Modernes</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'Flutter Development',
							icon: '🦋',
							features: ['Cross-platform apps', 'Custom widgets', 'Hot reload development'],
						},
						{
							title: 'Intelligence Artificielle',
							icon: '🤖',
							features: ['Gemini API', 'OpenAI API', 'Google ML Kit', 'TensorFlow Lite'],
						},
						{
							title: 'Architecture Clean',
							icon: '🏗️',
							features: ['Clean Architecture', 'SOLID Principles', 'GetX & Bloc Pattern'],
						},
						{
							title: 'Analytics & Tracking',
							icon: '📊',
							features: ['Google Analytics', 'Amplitude', 'PostHog', 'AppsFlyer'],
						},
						{
							title: 'Monétisation Mobile',
							icon: '�',
							features: ['Google AdMob', 'In-App Purchases', 'Subscription Models', 'Revenue Analytics'],
						},
						{
							title: 'Backend & APIs',
							icon: '⚡',
							features: ['Firebase Suite', 'RESTful APIs', 'Real-time Database', 'Cloud Functions'],
						},
					].map((category) => (
						<div key={category.title} className="group bg-white p-6 rounded-lg hover:bg-gray-100 transition-all shadow-sm hover:shadow-md">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-600 group-hover:text-gray-700 transition-colors">
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WebCapabilitiesSection;
