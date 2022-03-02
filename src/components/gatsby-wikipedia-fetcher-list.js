/**
 * Supply a list of Wikipedia articles and their languages to gatsby-wikipedia-fetcher.
 */
 const WikipediaFetcherList = (getNodes) => {
  // Array of Wikipedia article titles (redirects are automatic) or full URLs and their language codes (may be empty strings).
  var articlesLanguages = [
    { article: 'https://en.wikipedia.org/wiki/American_bushtit', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Black-capped_chickadee', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Common_starling', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Cooper%27s_hawk', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Dark-eyed_junco', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Fox_sparrow', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Golden-crowned_sparrow', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Northern_flicker', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Pine_siskin', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Song_sparrow', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Spotted_towhee', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Steller%27s_jay', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Varied_thrush', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Family', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Bald_eagle', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Barred_owl', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Belted_kingfisher', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/California_quail', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Caspian_tern', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Golden_eagle', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Great_blue_heron', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Osprey', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Tree_swallow', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Trumpeter_swan', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/White-crowned_sparrow', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Woodhouse%27s_scrub_jay', language: 'en' },
  ];

  return articlesLanguages;
};

module.exports.WikipediaFetcherList = WikipediaFetcherList;
