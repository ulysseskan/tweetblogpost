javascript:(function() {
  function extractTitleAndUrl() {
    const titleElement = document.querySelector('h1.entry-title');
    const title = titleElement ? titleElement.textContent.trim() : null;

    if (title) {
      return {
        title: title,
        url: window.location.href
      };
    } else {
      return null;
    }
  }

  function openTwitter(title, url) {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(tweetUrl, '_blank');
  }

  const info = extractTitleAndUrl();
  if (info) {
    openTwitter(info.title, info.url);
  } else {
    alert('Failed to extract title and URL.');
  }
})();
