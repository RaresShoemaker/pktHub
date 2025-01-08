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
		alt: 'BIA',
		href: 'https://pkt.cash/ecosystem/',
		logo: <BIALogo />
	},
	{
		alt: 'Netflix',
		href: 'https://www.netflix.com/',
		logo: <NetflixLogo />
	},
	{
		alt: 'Hulu',
		href: 'https://www.hulu.com/',
		logo: <HuluLogo />
	},
	{
		alt: 'Rumble',
		href: 'https://rumble.com/',
		logo: <RumbleLogo />
	},
	{
		alt: 'Radical',
		href: ' https://radicalstudios.com',
		logo: <RadicalLogo />
	},
	{
		alt: 'Youtube',
		href: 'https://www.youtube.com/',
		logo: <YoutubeLogo />
	},
	{
		alt: 'Amazon Prime',
		href: 'https://www.amazon.com/',
		logo: <AmzPrimeLogo />
	},
	{
		alt: 'HBO Max',
		href: 'https://www.hbomax.com/',
		logo: <HBOMaxLogo />
	},
	{
		alt: 'Apple TV',
		href: 'https://www.apple.com/apple-tv-plus/',
		logo: <AppleTvLogo />
	},
	{
		alt: 'ESPN Logo',
		href: 'https://www.espn.com/',
		logo: <ESPNLogo />
	},
	{
		alt: 'MLB',
		href: 'https://www.mlb.com/',
		logo: <MLBLogo />
	},
	{
		alt: 'TuneFM',
		href: ' https://tune.fm',
		logo: <TuneFmLogo />
	}
];

export { homeMockData };
