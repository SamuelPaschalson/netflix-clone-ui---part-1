import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="links">
            <a className='social' href="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon svg-icon-facebook-logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9868 13.1621V21.9841H10.0418V13.1621H6.8418V9.51207H10.0468V6.73207C10.0468 3.56707 11.9318 1.82007 14.8148 1.82007C15.7616 1.83321 16.7061 1.91577 17.6408 2.06707V5.17307H16.0448C15.4952 5.10007 14.9422 5.28088 14.5419 5.66447C14.1415 6.04807 13.9373 6.59284 13.9868 7.14507V9.51207H17.4868L16.9278 13.1621H13.9868Z" fill="currentColor"></path></svg>
            </a>
            <a href="" className="social">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon svg-icon-instagram-logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9302 16.1229C21.9586 17.6764 21.3791 19.1796 20.3152 20.3119C19.1853 21.3804 17.68 21.9606 16.1252 21.9269C14.4742 22.0209 9.52524 22.0209 7.87524 21.9269C6.32151 21.955 4.81816 21.3756 3.68524 20.3119C2.61778 19.1818 2.03769 17.6772 2.07024 16.1229C1.97724 14.4719 1.97724 9.52294 2.07024 7.87294C2.03979 6.3188 2.61957 4.8146 3.68524 3.68294C4.81792 2.61946 6.32187 2.04157 7.87524 2.07294C9.52624 1.97894 14.4752 1.97894 16.1252 2.07294C17.6791 2.04388 19.1828 2.62347 20.3152 3.68794C21.3827 4.81807 21.9628 6.32272 21.9302 7.87694C22.0232 9.52794 22.0232 14.4719 21.9302 16.1229ZM20.2002 11.9999C20.2002 10.5449 20.3202 7.42194 19.8002 6.10594C19.4575 5.23672 18.7695 4.54869 17.9002 4.20594C16.5882 3.68894 13.4612 3.80594 12.0062 3.80594C10.5512 3.80594 7.42824 3.68494 6.11224 4.20594C5.24322 4.54899 4.55529 5.23693 4.21224 6.10594C3.69524 7.41794 3.81224 10.5449 3.81224 11.9999C3.81224 13.4549 3.69124 16.5779 4.21224 17.8939C4.5556 18.7628 5.24343 19.4506 6.11224 19.7939C7.42424 20.3109 10.5522 20.1939 12.0062 20.1939C13.4602 20.1939 16.5842 20.3149 17.9002 19.7939C18.7693 19.4509 19.4572 18.763 19.8002 17.8939C20.3192 16.5819 20.2002 13.4549 20.2002 11.9999ZM17.1302 11.9999C17.1302 14.8311 14.8354 17.1264 12.0042 17.1269C9.17307 17.1275 6.87734 14.8331 6.87624 12.0019C6.87513 9.17077 9.16907 6.8746 12.0002 6.87293C13.361 6.87028 14.6668 7.40953 15.6292 8.37155C16.5916 9.33356 17.1314 10.6392 17.1292 11.9999H17.1302ZM15.3362 11.9999C15.3362 10.1596 13.8446 8.66749 12.0042 8.66694C10.1639 8.66639 8.67134 10.1576 8.67024 11.9979C8.66914 13.8383 10.1599 15.3313 12.0002 15.3329C13.8409 15.3318 15.333 13.8406 15.3352 11.9999H15.3362ZM17.3362 7.85895C16.6735 7.85895 16.1362 7.32168 16.1362 6.65894C16.1362 5.9962 16.6735 5.45894 17.3362 5.45894C17.999 5.45894 18.5363 5.9962 18.5363 6.65894C18.5381 6.97725 18.4127 7.28311 18.1879 7.50847C17.9631 7.73383 17.6576 7.86001 17.3392 7.85895H17.3362Z" fill="currentColor"></path></svg>
            </a>
            <a href="" className="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon svg-icon-youtube-logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5401 6.67C22.2881 5.71873 21.5491 4.97331 20.6001 4.713C18.8801 4.25 12.0001 4.25 12.0001 4.25C12.0001 4.25 5.12009 4.25 3.40009 4.713C2.45106 4.97331 1.71211 5.71873 1.46009 6.67C1.14277 8.42869 0.988785 10.213 1.00009 12C0.988785 13.787 1.14277 15.5713 1.46009 17.33C1.71301 18.2825 2.45414 19.0282 3.40509 19.287C5.12009 19.75 12.0051 19.75 12.0051 19.75C12.0051 19.75 18.8851 19.75 20.6001 19.287C21.5491 19.0267 22.2881 18.2813 22.5401 17.33C22.8574 15.5713 23.0114 13.787 23.0001 12C23.0114 10.213 22.8574 8.42869 22.5401 6.67ZM9.75009 15.27V8.729L15.5001 12L9.75009 15.27Z" fill="currentColor"></path></svg>
            </a>
        </div>
        <ul className="footer-link">
            <li className="member-wrapper">Audio Description</li>
            <li className="member-wrapper">Help Center</li>
            <li className="member-wrapper">Gift Cards</li>
            <li className="member-wrapper">Media Center</li>
            <li className="member-wrapper">Audio Description</li>
            <li className="member-wrapper">Help Center</li>
            <li className="member-wrapper">Gift Cards</li>
            <li className="member-wrapper">Media Center</li>
            <li className="member-wrapper">Audio Description</li>
            <li className="member-wrapper">Help Center</li>
            <li className="member-wrapper">Gift Cards</li>
            <li className="member-wrapper">Media Center</li>
        </ul>
        <div className="wrapper-service">
            <button className='service'>Service Code</button>
        </div>
        <div className="copyright">
            <span>© 1997-2022 Netflix, Inc.&lrm;</span>
        </div>
    </div>
  )
}

export default Footer