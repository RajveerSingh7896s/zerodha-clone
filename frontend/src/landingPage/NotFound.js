import React from "react";

function NotFound() {
  return (
    <div className="container px-3 py-5 py-md-5 mb-4 section-y">
      <div className="row text-center justify-content-center">
        <h1 className="mt-3 h2">404 Not Found</h1>
        <p className="text-muted px-2 hero-lead mx-auto">
          Sorrry, the page you are looking for does not exist. It might have
          been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
