import React from 'react'

import './footer.css'

const Footer = (props) => {

  return (
    <footer>
      <div className="footer noindex">
        <ul className="footer-links add-last-child-class">
          <li>
            <a href="http://www.agriculture.gov.au//about/copyright">© Commonwealth of Australia 2017</a>
          </li>
          <li>
            <a href="http://www.agriculture.gov.au//about/accessibility">Accessibility</a>
          </li>
          <li>
            <a href="http://www.agriculture.gov.au//about/site_map">Site map</a>
          </li>
          <li>
            <a href="http://www.agriculture.gov.au//about/privacy">Privacy</a>
          </li>
          <li>
            <a href="http://www.agriculture.gov.au//about/disclaimer">Disclaimer</a>
          </li>
          <li>
            <a href="http://www.agriculture.gov.au//about/contactus">Contact us</a>
          </li>
          <li>
            <a href="http://australia.gov.au">australia.gov.au</a>
          </li>
        </ul>
      </div>
    </footer>

  )

}
export default Footer
