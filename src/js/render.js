function renderAllInfo(article, items, template) {
  const markup = items
    .map(item => {
      const index = /\d+/.exec(item.url);
      return template(item, index[0]);
    })
    .join('');

  article.innerHTML = markup;
}

function renderDetailedInfo(article, item, template) {
  const markup = template(item);
  article.innerHTML = markup;
}

function renderError(article, template) {
  const markup = template();
  article.innerHTML = markup;
}

export { renderAllInfo, renderDetailedInfo, renderError };
