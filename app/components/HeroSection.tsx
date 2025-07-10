'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
							Denyo KOKOU
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-gray-900">Développeur Flutter & Architecte d&apos;Expériences Mobiles</h2>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							Je ne me contente pas de coder des applications, je conçois des expériences. 5 ans d&apos;expertise dans la création d&apos;écosystèmes mobiles avec Flutter.
						</p>
						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Spécialisé dans l&apos;<span className="text-blue-600">Architecture Clean</span> et l&apos;intégration de l&apos;<span className="text-purple-600">Intelligence Artificielle</span> pour créer des applications performantes et intuitives.
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm">Flutter & Dart</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 text-xs md:text-sm">Firebase</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-100 rounded-full text-teal-600 text-xs md:text-sm">Intelligence Artificielle</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm">Google AdMob</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 text-xs md:text-sm">Analytics & Tracking</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-100 rounded-full text-teal-600 text-xs md:text-sm">UI/UX Design</span>
					</div>
				</motion.div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-8 shadow-lg"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Mobile Development Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-600">Développement Mobile</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Flutter Cross-Platform
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										UI/UX Design & Animations
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Publication Google Play Store
									</li>
								</ul>
							</div>

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend' ? 'bg-purple-50 border-purple-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-600">Architecture & Backend</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Architecture Clean & SOLID
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Firebase & API REST
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Gestion d&apos;État (Bloc, GetX)
									</li>
								</ul>
							</div>

							{/* AI & Innovation Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops' ? 'bg-teal-50 border-teal-200' : 'bg-gray-50 hover:bg-gray-100 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-600">IA & Innovation</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Gemini & OpenAI API
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Google ML Kit (On-Device)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Analytics & Recommandations
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
