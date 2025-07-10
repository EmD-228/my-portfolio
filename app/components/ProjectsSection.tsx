'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center text-gray-900"
				>
					Mes Projets Flutter
				</motion.h2>

				<div className="space-y-16">
					{/* Klumer - Écosystème Événementiel */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">Klumer - Écosystème Événementiel</h3>
										<p className="text-gray-600">
											Plateforme tout-en-un pour simplifier la gestion d&apos;événements : billetterie, communication et validation des participants. Publié sur le Google Play Store.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">Développement Mobile</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Flutter Cross-Platform</li>
												<li>• UI/UX avec Adobe XD</li>
												<li>• Scan QR Code (ML Kit)</li>
												<li>• Validation Offline</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">Intégrations Paiement</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• CINETPAY (National)</li>
												<li>• ERETU (National)</li>
												<li>• Façade d&apos;Abstraction</li>
												<li>• API REST Sécurisées</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Réalisations Clés</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• Validation instantanée même hors ligne</li>
											<li>• Réduction drastique des files d&apos;attente</li>
											<li>• Architecture modulaire et extensible</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Architecture Mobile</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* UI Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Flutter UI (Material Design)
												</text>
											</g>

											{/* Business Logic */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Event Management
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Payment Facade
												</text>
											</g>

											{/* ML Kit Layer */}
											<g>
												<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="160" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Google ML Kit (QR Code Scanner)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="190" width="110" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="145" y="190" width="110" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<rect x="270" y="190" width="110" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="75" y="215" textAnchor="middle" className="fill-gray-600 text-[10px]">
													Event API
												</text>
												<text x="200" y="215" textAnchor="middle" className="fill-gray-600 text-[10px]">
													CINETPAY
												</text>
												<text x="325" y="215" textAnchor="middle" className="fill-gray-600 text-[10px]">
													ERETU
												</text>
											</g>

											{/* Local Storage */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-600 text-[12px]">
													SQLite Local Database (Offline Support)
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="200" y1="170" x2="200" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* DressLike - Mode Durable & IA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">DressLike - Mode Durable & Recommandation IA</h3>
										<p className="text-gray-600">
											Application de mode durable permettant aux utilisateurs de gérer leur garde-robe et donner une seconde vie à leurs vêtements avec un moteur de recommandation IA.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">UX & Interface</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Architecture GetX rapide</li>
												<li>• Design Figma adaptatif</li>
												<li>• Parcours utilisateur optimisé</li>
												<li>• Onboarding simplifié</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">IA & Analytics</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Gemini API Matching</li>
												<li>• Amplitude Analytics</li>
												<li>• PostHog Comportement</li>
												<li>• Google Analytics</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Impact Métiers & Analytics</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• +30% taux de complétion photo (PostHog/Amplitude)</li>
											<li>• Recommandations personnalisées IA</li>
											<li>• Funnel analytics pour optimisation UX</li>
											<li>• Attribution tracking avec AppsFlyer</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Architecture IA & Analytics</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* App Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Flutter App (GetX State Management)
												</text>
											</g>

											{/* Analytics Layer */}
											<g>
												<rect x="20" y="80" width="110" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<rect x="145" y="80" width="110" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<rect x="270" y="80" width="110" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="75" y="105" textAnchor="middle" className="fill-gray-600 text-[10px]">
													Amplitude
												</text>
												<text x="200" y="105" textAnchor="middle" className="fill-gray-600 text-[10px]">
													PostHog
												</text>
												<text x="325" y="105" textAnchor="middle" className="fill-gray-600 text-[10px]">
													Analytics
												</text>
											</g>

											{/* AI Engine */}
											<g>
												<rect x="20" y="140" width="360" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="165" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Gemini API - Moteur de Recommandation
												</text>
											</g>

											{/* Backend Services */}
											<g>
												<rect x="20" y="200" width="170" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="210" y="200" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="225" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Firebase Firestore
												</text>
												<text x="295" y="225" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Firebase Auth
												</text>
											</g>

											{/* Data Flow */}
											<g>
												<rect x="20" y="260" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="280" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Analyse Comportementale & Optimisation UX
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="200" y1="120" x2="200" y2="140" />
												<line x1="200" y1="180" x2="200" y2="200" />
												<line x1="200" y1="240" x2="200" y2="260" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Call - Visioconférence IA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">Call - Visioconférence Intelligente</h3>
										<p className="text-gray-600">
											Plateforme de visioconférence avec assistance IA intégrée : transcription en temps réel, résumés automatiques et fonctionnalités intelligentes pour améliorer la productivité en réunion.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">Communication</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• LiveKit WebRTC</li>
												<li>• Qualité vidéo adaptive</li>
												<li>• Chat temps réel</li>
												<li>• Partage d&apos;écran</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">IA Intégrée</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Transcription Gemini</li>
												<li>• Résumés OpenAI</li>
												<li>• Traitement asynchrone</li>
												<li>• Actions intelligentes</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Innovation Technique</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• Architecture non-bloquante</li>
												<li>• Performance temps réel optimisée</li>
											<li>• IA contextuelle en arrière-plan</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Architecture Temps Réel</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Flutter Client */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Flutter Client (Video & Audio)
												</text>
											</g>

											{/* Real-time Layer */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													LiveKit WebRTC
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Real-time Chat
												</text>
											</g>

											{/* AI Processing */}
											<g>
												<rect x="20" y="140" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<rect x="210" y="140" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="105" y="165" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Gemini Transcription
												</text>
												<text x="295" y="165" textAnchor="middle" className="fill-gray-600 text-[12px]">
													OpenAI Résumés
												</text>
											</g>

											{/* Background Services */}
											<g>
												<rect x="20" y="200" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="225" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Firebase Realtime Database & Functions
												</text>
											</g>

											{/* Async Queue */}
											<g>
												<rect x="20" y="260" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="280" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Queue Asynchrone - Traitement IA Non-Bloquant
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="200" y1="180" x2="200" y2="200" />
												<line x1="200" y1="240" x2="200" y2="260" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Smartevent - Matchmaking Événementiel & AR */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">Smartevent - Matchmaking Événementiel & AR</h3>
										<p className="text-gray-600">
											Révolutionner le networking en événement en permettant aux participants de trouver les personnes les plus pertinentes à rencontrer grâce à la géolocalisation et la réalité augmentée.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">Géolocalisation</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Google Maps Platform</li>
												<li>• Localisation temps réel</li>
												<li>• Optimisation batterie</li>
												<li>• Algorithmes de proximité</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">Réalité Augmentée</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• ARCore Integration</li>
												<li>• Profils AR contextuels</li>
												<li>• Reconnaissance spatiale</li>
												<li>• Expérience immersive</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Innovation Technique</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• Mise à jour adaptative de position</li>
											<li>• Détection automatique d&apos;immobilité</li>
											<li>• Matchmaking intelligent par profil</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Architecture Géospatiale & AR</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Flutter AR Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Flutter AR Interface (ARCore)
												</text>
											</g>

											{/* Location Services */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Location Services
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Proximity Engine
												</text>
											</g>

											{/* Maps & Optimization */}
											<g>
												<rect x="20" y="140" width="360" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="165" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Google Maps Platform + Algorithmes d&apos;Optimisation
												</text>
											</g>

											{/* Backend Services */}
											<g>
												<rect x="20" y="200" width="170" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="210" y="200" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="225" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Firebase Realtime
												</text>
												<text x="295" y="225" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Matchmaking API
												</text>
											</g>

											{/* Battery Optimization */}
											<g>
												<rect x="20" y="260" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="280" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Optimisation Batterie & Gestion Intelligente des Mises à Jour
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="200" y1="180" x2="200" y2="200" />
												<line x1="200" y1="240" x2="200" y2="260" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Sona - Don d'Articles & Économie Circulaire */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">Sona - Don d&apos;Articles & Économie Circulaire</h3>
										<p className="text-gray-600">
											Projet social pour réduire le gaspillage en créant une plateforme simple et locale pour le don d&apos;objets. L&apos;accent mis sur l&apos;extrême simplicité du parcours utilisateur.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">UX Simplifiée</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Parcours ultra-rapide</li>
												<li>• Design Figma minimaliste</li>
												<li>• Onboarding en 3 étapes</li>
												<li>• Friction minimale</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">Impact Social</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Réduction du gaspillage</li>
												<li>• Économie circulaire locale</li>
												<li>• Communauté solidaire</li>
												<li>• Accessibilité universelle</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Leçons Apprises</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• La simplicité prime sur les fonctionnalités</li>
											<li>• UX comme facteur clé d&apos;adoption</li>
											<li>• Importance du coût cognitif minimal</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Architecture Simplifiée</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Simple UI */}
											<g>
												<rect x="20" y="30" width="360" height="50" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="2" />
												<text x="200" y="60" textAnchor="middle" className="fill-gray-600 text-[14px] font-semibold">
													Flutter UI Ultra-Simplifiée
												</text>
											</g>

											{/* Core Logic */}
											<g>
												<rect x="70" y="110" width="260" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="200" y="135" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Logique Métier Minimaliste
												</text>
											</g>

											{/* Firebase Backend */}
											<g>
												<rect x="70" y="170" width="260" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="195" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Firebase (Auth + Firestore)
												</text>
											</g>

											{/* Design Principle */}
											<g>
												<rect x="20" y="230" width="360" height="40" rx="4" className="fill-green-100 stroke-green-400" strokeWidth="2" />
												<text x="200" y="255" textAnchor="middle" className="fill-gray-600 text-[12px] font-semibold">
													Principe : Moins de Clics = Plus d&apos;Adoption
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="2">
												<line x1="200" y1="80" x2="200" y2="110" />
												<line x1="200" y1="150" x2="200" y2="170" />
												<line x1="200" y1="210" x2="200" y2="230" />
											</g>

											{/* Simplicity Icons */}
											<g className="fill-green-500">
												<circle cx="50" cy="120" r="15" className="fill-green-100 stroke-green-400" strokeWidth="2" />
												<text x="50" y="125" textAnchor="middle" className="fill-green-600 text-[12px]">✓</text>
												<circle cx="350" cy="120" r="15" className="fill-green-100 stroke-green-400" strokeWidth="2" />
												<text x="350" y="125" textAnchor="middle" className="fill-green-600 text-[12px]">✓</text>
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
