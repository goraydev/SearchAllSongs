import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section className="page_404">
      <div className="container mx-auto">
        <div className="">
          <div className="">
            <div className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center text-8xl">404</h1>
              </div>

              <div className="contant_box_404 mb-2">
                <h3 className="text-3xl">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>
              </div>
              <Link
                to="/search"
                className="bg-amber-500 text-white p-2 rounded-md"
              >
                Go to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
