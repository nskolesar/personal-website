import React from "react";

const Section = ({ id, title, children }) => {
    return (
        <section id={id} className="my-10 pt-16 w-screen ustify-center">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
            {children}
        </section>
    );
};

export default Section;
