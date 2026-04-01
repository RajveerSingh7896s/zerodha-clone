import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container pb-4 pb-md-5 px-3">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-lg-7 p-3 p-lg-4 text-center text-lg-start">
          <img src={imgURL} alt="" className="img-block" />
        </div>
        <div className="col-12 col-lg-4 p-3 py-lg-5 mt-lg-5 offset-lg-1">
          <h1 className="h3 mb-4 text-muted">{productName}</h1>
          <p className="lh-lg text-muted">{productDescription}</p>
          <div className="row g-3 mt-2">
            <div className="col-12 col-sm-6">
              <a href={tryDemo} className="anchorTag fw-semibold">
                Try demo <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className="col-12 col-sm-6">
              <a href={learnMore} className="anchorTag fw-semibold">
                Learn more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="row g-3 mt-2">
            <div className="col-6 my-2">
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-6 my-2">
              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" alt="App Store" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
