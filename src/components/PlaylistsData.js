const moodPlaylist = [
  {
    mood: 'colère',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/playlist/9604407222`,
    pic: 'https://e-cdns-images.dzcdn.net/images/cover/93ec8d0abefeb944ace9e777e30c0b5f/250x250-000000-80-0-0.jpg',
  },
  {
    mood: 'tristesse',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/playlist/9604407922`,
    pic: 'https://e-cdns-images.dzcdn.net/images/cover/a3869501f405711ea0f97f1c29f902f4/250x250-000000-80-0-0.jpg',
  },
  {
    mood: 'joie',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/playlist/9604408842`,
    pic: 'https://e-cdns-images.dzcdn.net/images/cover/9a20f8b2547cbb74635539c219de3a84-fda8e610d5c116c28c0351355fc67208-593cf4239df5504dced88a78f7e2e698-0846f00620ad172c934e89bcad774388/250x250-000000-80-0-0.jpg',
  },
  {
    mood: 'fiesta',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/playlist/9604409362`,
    pic: 'https://e-cdns-images.dzcdn.net/images/cover/c713d4f107611d9e87f741f776b9af13/250x250-000000-80-0-0.jpg',
  },
  {
    mood: 'concentration',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/playlist/9604409802`,
    pic: 'https://e-cdns-images.dzcdn.net/images/cover/c5e358989db3b3ab82dd64af46bfc841-f2df1ded3a4a351339406c45d16472a3-65db1684fc53d0ca19f8ef70c2b5cf2a-b28cd9ca9d9a1cf678680010c3564fbb/250x250-000000-80-0-0.jpg',
  },
  {
    mood: 'sport',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/playlist/9604410322`,
    pic: 'https://e-cdns-images.dzcdn.net/images/cover/5bfd635c3bf252c6c0d3e3e4b8f53794/250x250-000000-80-0-0.jpg',
  },
  {
    mood: 'skyrim',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/playlist/9604403842`,
    pic: 'https://e-cdns-images.dzcdn.net/images/cover/8b71ff87de22aecac7ad2d947c6313a2/250x250-000000-80-0-0.jpg',
  },
];

const searchPlaylist = [
  {
    mood: 'colère',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/search/playlist?q=hardcore`,
  },
  {
    mood: 'tristesse',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/search/playlist?q=sadsong`,
  },
  {
    mood: 'joie',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/search/playlist?q=happiness`,
  },
  {
    mood: 'fiesta',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/search/playlist?q=party`,
  },
  {
    mood: 'concentration',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/search/playlist?q=focus`,
  },
  {
    mood: 'sport',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/search/playlist?q=sport`,
  },
  {
    mood: 'skyrim',
    url: `${process.env.REACT_APP_DEEZFLOW_API}/deezer/search/playlist?q=skyrim`,
  },
];

export { moodPlaylist, searchPlaylist };
