import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://EmD-228.github.io/my-portfolio'),
	title: 'Denyo KOKOU - Développeur Flutter & Architecte d\'Expériences Mobiles',
	description:
		'Développeur Flutter passionné avec 5 ans d\'expérience dans la création d\'écosystèmes mobiles. Spécialisé dans l\'Architecture Clean et l\'intégration de l\'Intelligence Artificielle pour créer des applications performantes et intuitives.',
	keywords: [
		'Développeur Flutter',
		'Développeur Mobile',
		'Architecture Clean',
		'Intelligence Artificielle',
		'Flutter',
		'Dart',
		'Firebase',
		'UI/UX Design',
		'Google Play Store',
		'Applications Mobiles',
		'Cross-Platform',
		'Gemini API',
		'ML Kit',
		'Denyo KOKOU',
	],
	authors: [{ name: 'Denyo KOKOU' }],
	creator: 'Denyo KOKOU',
	openGraph: {
		title: 'Denyo KOKOU - Développeur Flutter & Architecte d\'Expériences Mobiles',
		description:
			'Développeur Flutter passionné créant des expériences mobiles exceptionnelles. Explorez mes projets et mon expertise en Architecture Clean et Intelligence Artificielle.',
		url: 'https://denyo-kokou.com',
		siteName: 'Denyo KOKOU - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Denyo KOKOU - Développeur Flutter Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Denyo KOKOU - Développeur Flutter & Architecte d\'Expériences Mobiles',
		description:
			'Développeur Flutter passionné créant des expériences mobiles exceptionnelles. Spécialisé dans l\'Architecture Clean et l\'Intelligence Artificielle.',
		creator: '@denyo_kokou',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
