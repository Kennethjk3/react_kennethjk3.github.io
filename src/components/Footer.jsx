var React = require('react')
var Router = require('react-router')
var Link = Router.Link



var Footer = React.createClass({
  render: function () {
    return (
      <footer>
        <div className="footer">
          <p>
            This site is designed using <a href="https://facebook.github.io/react/index.html">React</a>!
            </p>
        </div>
      </footer>

    )
  }
})

module.exports = Footer
