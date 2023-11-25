import React from "react";

export default function Banner() {
    return (
        <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 bg-light rounded-3 text-left">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                        <p className="fs-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione quod! Facilis esse, nobis aspernatur totam ducimus quisquam, non provident deleniti nisi recusandae amet culpa. Facilis labore adipisci accusantium quia!                        </p>
                        <a className="btn btn-primary btn-lg" href="#!">
                            Call to action
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
