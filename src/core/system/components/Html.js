import React from 'react';

function Html({content}) {
  // TODO: Helmet
  return (
    <html>
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/styles.css" />
    </head>
    <body>
      <div id="content" className="container-fluid" dangerouslySetInnerHTML={{ __html: content }} />
      <script src="/js/scripts.js"></script>
    </body>
    </html>
  );
}

Html.propTypes = {
  content: React.PropTypes.string.isRequired,
};

export default Html;
