function Navbar() {
  return (
    <>
      <section className="bg-black text-white">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <a href="/Home" className="navbar-brand">
              <img src="https://firstfiddle.in/_next/image?url=%2Fimages%2Fheader%2Flogo-01.png&w=256&q=75" width="40px" height="50px" alt="" className="img-fluid">
              </img>
            </a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#pn">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="pn">
              <ul className="navbar-nav ms-auto">
                <li><a href="/Home" className="nav-link text-white">HOME</a></li>
                <li><a href="/About" className="nav-link smooth_scroll text-white">ABOUT</a></li>
                <li><a href="/Brands" className="nav-link text-white">BRAND</a></li>
                <li><a href="/PressRelease" className="nav-link text-white">PRESS RELEASE</a></li>
                <li><a href="/Contact" className="nav-link text-white">CONTACT US</a></li>
                <li><a href="/Franchise" className="nav-link text-white">FRANCHISE</a></li>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#aa">
                  Login
                </button>

              </ul>
            </div>

          </div>
        </nav>

      </section>
      <section>
        <div className="container-fluid">
            <video src="https://testvideosfirst.s3.ap-south-1.amazonaws.com/firstfiddlev2/bannervideo.mp4" autoPlay
                loop muted preload="auto" className="img-fluid">
            </video>
            </div>
    </section>
    </>
  );
}

export default Navbar;