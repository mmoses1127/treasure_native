import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='spacer layer_down'></div>
      <div className="footer_content flex-row align-center justify-between">
        <p>Copyright <i className="fa-regular fa-copyright"></i> 2022 Treasure</p>
        {/* <div className="author_github">
          <p>Made with <i className="fa-solid fa-heart"></i> by</p>
          <Link to={{ pathname: "https://github.com/safetyboi" }} target="_blank">
            Dan Culbertson
          </Link>
          <Link to={{ pathname: "https://github.com/mmoses1127" }} target="_blank">
            Michael Moses
          </Link>
          <Link to={{ pathname: "https://github.com/fee3fitri" }} target="_blank">
            Safitri Shelton
          </Link>
          <Link to={{ pathname: "https://github.com/vince-memmo" }} target="_blank">
            Vince Memmo
          </Link>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer;