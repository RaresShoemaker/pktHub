import React from 'react';

import {
	BIALogo,
	NetflixLogo,
	HuluLogo,
	RumbleLogo,
	RadicalLogo,
	YoutubeLogo,
	AmzPrimeLogo,
	HBOMaxLogo,
	AppleTvLogo,
	ESPNLogo,
	MLBLogo,
	TuneFmLogo
} from '../assets/index';

type HomeMockDataType = {
	alt: string;
	href: string;
	logo: React.ReactNode;
};

const homeMockData: HomeMockDataType[] = [
	{
		alt: 'BIA Logo',
		href: 'https://www.bia.ca/',
		logo: <BIALogo />
	},
	{
		alt: 'Netflix Logo',
		href: 'https://www.netflix.com/',
		logo: <NetflixLogo />
	},
	{
		alt: 'Hulu Logo',
		href: 'https://www.hulu.com/',
		logo: <HuluLogo />
	},
	{
		alt: 'Rumble Logo',
		href: 'https://rumble.com/',
		logo: <RumbleLogo />
	},
	{
		alt: 'Radical Logo',
		href: 'https://www.radical.com/',
		logo: <RadicalLogo />
	},
	{
		alt: 'Youtube Logo',
		href: 'https://www.youtube.com/',
		logo: <YoutubeLogo />
	},
	{
		alt: 'Amazon Prime Logo',
		href: 'https://www.amazon.com/',
		logo: <AmzPrimeLogo />
	},
	{
		alt: 'HBO Max Logo',
		href: 'https://www.hbomax.com/',
		logo: <HBOMaxLogo />
	},
	{
		alt: 'Apple TV Logo',
		href: 'https://www.apple.com/apple-tv-plus/',
		logo: <AppleTvLogo />
	},
	{
		alt: 'ESPN Logo',
		href: 'https://www.espn.com/',
		logo: <ESPNLogo />
	},
	{
		alt: 'MLB Logo',
		href: 'https://www.mlb.com/',
		logo: <MLBLogo />
	},
	{
		alt: 'TuneFM Logo',
		href: 'https://www.tunefm.com/',
		logo: <TuneFmLogo />
	}
];

export { homeMockData };
