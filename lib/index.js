'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./footer.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {

  return _react2.default.createElement(
    'footer',
    null,
    _react2.default.createElement(
      'div',
      { className: 'footer noindex' },
      _react2.default.createElement(
        'ul',
        { className: 'footer-links add-last-child-class' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/copyright' },
            '\xA9 Commonwealth of Australia 2017'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/accessibility' },
            'Accessibility'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/site_map' },
            'Site map'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/privacy' },
            'Privacy'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/disclaimer' },
            'Disclaimer'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/contactus' },
            'Contact us'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://australia.gov.au' },
            'australia.gov.au'
          )
        )
      )
    )
  );
};
exports.default = Footer;
module.exports = exports['default'];