var React = require('react');

class ResetForm extends React.Component {
  render() {
    return (
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title> Login - Edit.ai</title>

        <link href="./css/bootstrap-flex.min.css" rel="stylesheet" />
      </head>
      <body>

        <div className="container">
          <main>
            <h1>Reset password</h1>
            <form>
              <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <a href="/login">{'Go back to Login\u003f'}</a>
            </form>
          </main>
        </div>
      </body>
      </html>
    )
  }
}

module.exports = ResetForm;
