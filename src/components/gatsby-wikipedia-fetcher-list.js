/**
 * Supply a list of Wikipedia articles and their languages to gatsby-wikipedia-fetcher.
 */
 const WikipediaFetcherList = (getNodes) => {
  // Array of Wikipedia article titles (redirects are automatic) or full URLs and their language codes (may be empty strings).
  var articlesLanguages = [
    { article: 'https://en.wikipedia.org/wiki/Black-capped_chickadee', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Dark-eyed_junco', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Northern_flicker', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Spotted_towhee', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Varied_thrush', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Family', language: 'en' },
    { article: 'https://en.wikipedia.org/wiki/Great_blue_heron', language: 'en' },
  ];

  return articlesLanguages;
};

module.exports.WikipediaFetcherList = WikipediaFetcherList;
