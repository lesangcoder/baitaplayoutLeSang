import React from "react";
import Item from "./item";
export default function Content() {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </section>
    );
}
