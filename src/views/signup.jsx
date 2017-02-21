var React = require('react');

class SingupForm extends React.Component {
  render() {
    return (
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title> Signup - Edit.ai</title>

        <link href="./css/bootstrap-flex.min.css" rel="stylesheet" />
      </head>
      <body>

        <div className="container">
          <main>
            <h1>Signup</h1>
            <form name="login" action="/signup" method="post">
              <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="username" name="username"aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
              </div>

              <button type="submit" className="btn btn-primary">Signup</button>
              <a href="/login">{'Already have an account\u003f'}</a>
            </form>
          </main>
        </div>
      </body>
      </html>
    )
  }
}

module.exports = SingupForm;
