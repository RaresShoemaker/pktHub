import * as MusicIcons from '../assets/music/index';
import * as TechnologyIcons from '../assets/technology/index';

type CategoryCardDataType = {
  alt: string;
  href: string;
  logo: React.ReactNode;
  logoWhite?: React.ReactNode;
}

type CategoryDataType = Record<string, {
  title: string,
  data: CategoryCardDataType[];
}>

export const CategoryData: CategoryDataType = {
  music: {
    title: 'Music',
    data: [
      {
        alt: 'Apple Music',
        href: 'https://music.apple.com/',
        logo: <MusicIcons.AppleMusicLogoRegular />,
        logoWhite: <MusicIcons.AppleMusicLogoWhite />
      },
      {
        alt: 'Async',
        href: 'https://async.art/',
        logo: <MusicIcons.AsyncLogoRegular />,
        logoWhite: <MusicIcons.AsyncLogoWhite />
      },
      {
        alt: 'Audius',
        href: 'https://audius.co/',
        logo: <MusicIcons.AudiusLogoRegular />,
        logoWhite: <MusicIcons.AudiusLogoWhite />
      },
      {
        alt: 'Bitsong',
        href: 'https://bitsong.io/',
        logo: <MusicIcons.BitsongLogoRegular />,
        logoWhite: <MusicIcons.BitsongLogoWhite />
      },
      {
        alt: 'Blokur',
        href: 'https://blokur.com/',
        logo: <MusicIcons.BlokurLogoRegular />,
        logoWhite: <MusicIcons.BlokurLogoWhite />
      },
      {
        alt: 'Emusic',
        href: 'https://www.emusic.com/',
        logo: <MusicIcons.EmusicLogoRegular />,
        logoWhite: <MusicIcons.EmusicLogoWhite />
      },
      {
        alt: 'Mesh',
        href: 'https://mesh.xyz/',
        logo: <MusicIcons.MeshLogoRegular />,
        logoWhite: <MusicIcons.MeshLogoWhite />
      },
      {
        alt: 'Musicoin',
        href: 'https://musi.com/',
        logo: <MusicIcons.MusiLogoRegular />,
        logoWhite: <MusicIcons.MusiLogoWhite />
      },
      {
        alt: 'Mycelia',
        href: 'https://myceliaformusic.org/',
        logo: <MusicIcons.MyceliaLogoRegular />,
        logoWhite: <MusicIcons.MyceliaLogoWhite />
      },
      {
        alt: 'Paperchain',
        href: 'https://paperchain.io/',
        logo: <MusicIcons.PaperchainLogoRegular />,
        logoWhite: <MusicIcons.PaperchainLogoWhite />
      },
      {
        alt: 'Resonate',
        href: 'https://resonate.is/',
        logo: <MusicIcons.ResonateLogoRegular />,
        logoWhite: <MusicIcons.ResonateLogoWhite />
      },
      {
        alt: 'Royal',
        href: 'https://royal.io/',
        logo: <MusicIcons.RoyalLogoRegular />,
        logoWhite: <MusicIcons.RoyalLogoWhite />
      },
      {
        alt: 'Sound',
        href: 'https://sound.xyz/',
        logo: <MusicIcons.SoundLogoRegular />,
        logoWhite: <MusicIcons.SoundLogoWhite />
      },
      {
        alt: 'Spotify',
        href: 'https://www.spotify.com/',
        logo: <MusicIcons.SpotifyLogoRegular />,
        logoWhite: <MusicIcons.SpotifyLogoWhite />
      },
      {
        alt: 'Stem',
        href: 'https://stem.is/',
        logo: <MusicIcons.StemLogoRegular />,
        logoWhite: <MusicIcons.StemLogoWhite />
      },
      {
        alt: 'TuneFm',
        href: 'https://tunefm.io/',
        logo: <MusicIcons.TuneFmLogoRegular />,
        logoWhite: <MusicIcons.TuneFmLogoWhite />
      },
      {
        alt: 'Viberate',
        href: 'https://www.viberate.com/',
        logo: <MusicIcons.ViberateLogoRegular />,
        logoWhite: <MusicIcons.ViberateLogoWhite />
      },
      {
        alt: 'Youtube',
        href: 'https://www.youtube.com/',
        logo: <MusicIcons.YtbLogoRegular />,
        logoWhite: <MusicIcons.YtbLogoWhite />
      },
      {
        alt: 'Zora',
        href: 'https://zora.co/',
        logo: <MusicIcons.ZoraLogoRegular />,
        logoWhite: <MusicIcons.ZoraLogoWhite />
      }
    ]
  },
  technology: {
    title: 'Technology',
    data: [
      {
        alt: 'Solana (SOL)',
        href: 'https://solana.com/',
        logo: <TechnologyIcons.SolanaLogoRegular />,
        logoWhite: <TechnologyIcons.SolanaLogoWhite />
      },
      {
        alt: 'Akash Network (AKT)',
        href: 'https://akash.network/',
        logo: <TechnologyIcons.AkashLogoRegular />,
        logoWhite: <TechnologyIcons.AkashLogoWhite />
      },
      {
        alt: 'Cardano (ADA)',
        href: 'https://cardano.org/',
        logo: <TechnologyIcons.CardanoLogoRegular />,
        logoWhite: <TechnologyIcons.CardanoLogoWhite />
      },
      {
        alt: 'XRP (XRP)',
        href: 'https://ripple.com/',
        logo: <TechnologyIcons.RippleLogoRegular />,
        logoWhite: <TechnologyIcons.RippleLogoWhite />
      },
      {
        alt: 'Ethereum (ETH)',
        href: 'https://ethereum.org/',
        logo: <TechnologyIcons.EthereumLogoRegular />,
      },
      {
        alt: 'BNB (BNB)',
        href: 'https://www.binance.com/',
        logo: <TechnologyIcons.BnbLogoRegular />,
        logoWhite: <TechnologyIcons.BnbLogoWhite />
      },
      {
        alt: 'Arbitrum (ARB)',
        href: 'https://offchainlabs.com/',
        logo: <TechnologyIcons.ArbitrumLogoRegular />,
        logoWhite: <TechnologyIcons.ArbitrumLogoWhite />
      },
      {
        alt: 'Avalanche (AVAX)',
        href: 'https://www.avalabs.org/',
        logo: <TechnologyIcons.AvalancheLogoRegular />,
        logoWhite: <TechnologyIcons.AvalancheLogoWhite />
      },
      {
        alt: 'Chainlink (LINK)',
        href: 'https://chain.link/',
        logo: <TechnologyIcons.ChainLinkLogoRegular />,
        logoWhite: <TechnologyIcons.ChainLinkLogoWhite />
      },
      {
        alt: 'Internet Computer (ICP)',
        href: 'https://dfinity.org/',
        logo: <TechnologyIcons.DfinityLogoRegular />,
        logoWhite: <TechnologyIcons.DfinityLogoWhite />
      },
      {
        alt: 'Dogecoin (DOGE)',
        href: 'https://dogecoin.com/',
        logo: <TechnologyIcons.DogecoinLogoRegular />
      },
      {
        alt: 'Hedera (HBAR)',
        href: 'https://www.hedera.com/',
        logo: <TechnologyIcons.HederaLogoRegular />,
      },
      {
        alt: 'NEAR Protocol (NEAR)',
        href: 'https://near.org/',
        logo: <TechnologyIcons.NearLogoRegular />,
        logoWhite: <TechnologyIcons.NearLogoWhite />
      },
      {
        alt: 'Polkadot (DOT)',
        href: 'https://polkadot.network/',
        logo: <TechnologyIcons.PolkadotLogoRegular />,
        logoWhite: <TechnologyIcons.PolkadotLogoWhite />
      },
      {
        alt: 'XRP (XRP)',
        href: 'https://ripple.com/',
        logo: <TechnologyIcons.RippleLogoRegular />,
        logoWhite: <TechnologyIcons.RippleLogoWhite />
      },
      {
        alt: 'Stellar (XLM)',
        href: 'https://www.stellar.org/',
        logo: <TechnologyIcons.StellarLogoRegular />,
        logoWhite: <TechnologyIcons.StellarLogoWhite />
      },
      {
        alt: 'Toncoin (TON)',
        href: 'https://ton.org/',
        logo: <TechnologyIcons.TonLogoRegular />
      },
      {
        alt: 'TRON (TRX)',
        href: 'https://tron.network/',
        logo: <TechnologyIcons.TronLogoRegular />,
        logoWhite: <TechnologyIcons.TronLogoWhite />
      },
      {
        alt: 'Uniswap (UNI)',
        href: 'https://uniswap.org/',
        logo: <TechnologyIcons.UniswapLogoRegular />,
        logoWhite: <TechnologyIcons.UniswapLogoWhite />
      },
      {
        alt: 'VeChain (VET)',
        href: 'https://www.vechain.org/',
        logo: <TechnologyIcons.VechainLogoRegular />
      },
      {
        alt: 'Cosmos (ATOM)',
        href: 'https://vectorized.io/',
        logo: <TechnologyIcons.VectorLogoRegular />,
        logoWhite: <TechnologyIcons.VectorLogoWhite />
      }
    ]
  }
}