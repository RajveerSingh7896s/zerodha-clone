import React from "react";

function RightSection({
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
        <div className="col-12 col-lg-4 p-3 py-lg-5 mt-lg-5 order-2 order-lg-1">
          <h1 className="h3 mb-4 text-muted">{productName}</h1>
          <p className="lh-lg text-muted">{productDescription}</p>
          <a href={learnMore} className="anchorTag fw-semibold d-inline-block mt-2">
            Learn more <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-12 col-lg-7 p-3 p-lg-4 text-center text-lg-end order-1 order-lg-2 ms-lg-auto">
          <img src={imgURL} alt="" className="img-block ms-lg-auto" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
