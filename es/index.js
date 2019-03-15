import React from 'react';

import './footer.css';

var Footer = function Footer(props) {

  return React.createElement(
    'footer',
    null,
    React.createElement(
      'div',
      { className: 'footer noindex' },
      React.createElement(
        'ul',
        { className: 'footer-links add-last-child-class' },
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/copyright' },
            '\xA9 Commonwealth of Australia 2017'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/accessibility' },
            'Accessibility'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/site_map' },
            'Site map'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/privacy' },
            'Privacy'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/disclaimer' },
            'Disclaimer'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: 'http://www.agriculture.gov.au//about/contactus' },
            'Contact us'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: 'http://australia.gov.au' },
            'australia.gov.au'
          )
        )
      )
    )
  );
};
export default Footer;