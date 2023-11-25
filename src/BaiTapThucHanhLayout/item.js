import React from "react";
export default function item() {
    return (
        <div className="col-lg-3 col-xxl-4 mb-5">
            <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 pt-0 pt-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                        <i className="bi bi-cloud-download" />
                    </div>
                    <img
                        src="https://picsum.photos/200"
                        className="text-center pb-3"
                        alt=""
                    />
                    <h2 className="fs-4 fw-bold">Cart title</h2>
                    <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, impedit!
                    </p>
                    <a className="btn btn-primary btn-sm mt-3" href="#!">
                        Find Out More!
                    </a>
                </div>
            </div>
        </div>
    );
}
