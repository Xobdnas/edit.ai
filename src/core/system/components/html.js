import React from 'react';


function Html({content}) {
  return (
    <html lang="en-us">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
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
