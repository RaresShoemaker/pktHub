import * as MusicIcons from '../assets/music/index';
import * as TechnologyIcons from '../assets/technology/index';
import * as MediaIcons from '../assets/media/index';

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
        alt: 'eMusic',
        href: 'https://www.emusic.com/',
        logo: <MusicIcons.EmusicLogoRegular />,
        logoWhite: <MusicIcons.EmusicLogoWhite />
      },
      {
        alt: 'Ujo',
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
        logo: <MusicIcons.PaperLogoRegular />,
        logoWhite: <MusicIcons.PaperLogoWhite />
      },
      {
        alt: 'Revelator',
        href: 'https://revelator.com/',
        logo: <MusicIcons.RevelatorLogoRegular />,
        logoWhite: <MusicIcons.RevelatorLogoWhite />
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
        alt: 'Tune.fm',
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
        alt: 'Youtube Music',
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
        logo: <TechnologyIcons.CosmosLogoRegular />,
        logoWhite: <TechnologyIcons.CosmosLogoWhite />
      }
    ]
  },
  media: {
    title: 'Media',
    data: [
      {
          alt: 'Acorn Tv',
          href: 'https://www.acorn.tv/',
          logo: <MediaIcons.AcornLogoRegular />,
          logoWhite: <MediaIcons.AcornLogoWhite />
      },
      {
          alt: 'Prime Video',
          href: 'https://www.primevideo.com/',
          logo: <MediaIcons.AmzPrimeLogoRegular />,
          logoWhite: <MediaIcons.AmzPrimeLogoWhite />
      },
      {
          alt: 'Apple Tv',
          href: 'https://www.apple.com/apple-tv-plus/',
          logo: <MediaIcons.AppleTvLogoRegular />,
          logoWhite: <MediaIcons.AppleTvLogoWhite />
      },
      {
          alt: 'Disney Plus',
          href: 'https://www.disneyplus.com/',
          logo: <MediaIcons.DisneyLogoRegular />,
          logoWhite: <MediaIcons.DisneyLogoWhite />
      },
      {
          alt: 'Fireside',
          href: 'https://www.fireside.fm/',
          logo: <MediaIcons.FiresideLogoRegular />,
          logoWhite: <MediaIcons.FiresideLogoWhite />
      },
      {
          alt: 'Fubo Tv',
          href: 'https://www.fubo.tv/',
          logo: <MediaIcons.FuboTvLogoRegular />,
          logoWhite: <MediaIcons.FuboTvLogoWhite />
      },
      {
          alt: 'Max',
          href: 'https://www.hbomax.com/',
          logo: <MediaIcons.HboMaxLogoRegular />,
          logoWhite: <MediaIcons.HboMaxLogoWhite />
      },
      {
          alt: 'Hulu',
          href: 'https://www.hulu.com/',
          logo: <MediaIcons.HuluLogoRegular />,
          logoWhite: <MediaIcons.HuluLogoWhite />
      },
      {
          alt: 'Lbry',
          href: 'https://lbry.com/',
          logo: <MediaIcons.LbryLogoRegular />,
          logoWhite: <MediaIcons.LbryLogoWhite />
      },
      {
          alt: 'Mogul',
          href: 'https://onmogul.com/',
          logo: <MediaIcons.MogulLogoRegular />,
          logoWhite: <MediaIcons.MogulLogoWhite />
      },
      {
          alt: 'Monster Children Tv',
          href: 'https://tv.monsterchildren.com/',
          logo: <MediaIcons.MonsterChildrenTvLogoRegular />,
          logoWhite: <MediaIcons.MonsterChildrenTvLogoWhite />
      },
      {
          alt: 'Netflix',
          href: 'https://www.netflix.com',
          logo: <MediaIcons.NetflixLogoRegular />,
          logoWhite: <MediaIcons.NetflixLogoWhite />
      }, 
      {
          alt: 'Paramount Plus',
          href: 'https://www.paramountplus.com/',
          logo: <MediaIcons.ParamountLogoRegular />,
          logoWhite: <MediaIcons.ParamountLogoWhite />
      },
      {
          alt: 'Peacock',
          href: 'https://www.peacocktv.com/',
          logo: <MediaIcons.PeacockLogoRegular />,
          logoWhite: <MediaIcons.PeacockLogoWhite />
      },
      {
          alt: 'Pluto Tv',
          href: 'https://www.pluto.tv/',
          logo: <MediaIcons.PlutoLogoRegular />,
          logoWhite: <MediaIcons.PlutoLogoWhite />
      },
      {
          alt: 'Ritestream',
          href: 'https://ritestream.com/',
          logo: <MediaIcons.RitestreamLogoRegular />,
          logoWhite: <MediaIcons.RitestreamLogoWhite />
      },
      {
          alt: 'Sling',
          href: 'https://www.sling.com/',
          logo: <MediaIcons.SlingLogoRegular />,
          logoWhite: <MediaIcons.SlingLogoWhite />
      },
      {
          alt: 'Tubi',
          href: 'https://tubitv.com/',
          logo: <MediaIcons.TubiLogoRegular />,
          logoWhite: <MediaIcons.TubiLogoWhite />
      },
      {
          alt: 'Vabble',
          href: 'https://vabble.tv/',
          logo: <MediaIcons.VabbleLogoRegular />,
          logoWhite: <MediaIcons.VabbleLogoWhite />
      },
      {
          alt: 'Youtube',
          href: 'https://www.youtube.com/',
          logo: <MediaIcons.YtbLogoRegular />,
          logoWhite: <MediaIcons.YtbLogoWhite />
      }
    ]
  }
}