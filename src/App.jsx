import React from "react";
import { motion } from "framer-motion";
import image from "./img/nathankolesar.jpg";
import greenmachine from "./img/greenmachine.jpg";
import Navbar from "./components/Nav.jsx";
import Section from "./components/Section.jsx";

const App = () => {
    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen w-full">
            <Navbar />
            <br></br>
            <header
                id="#about"
                className="container w-screen flex flex-row items-center py-12 px-8 max-w-50xl mx-screen"
            >
                <img
                    src={image}
                    alt="Nathan Kolesar"
                    className="w-48 h-64 object-cover rounded-lg shadow-lg"
                />
                <h2 className="ml-6 text-gray-300 text-left max-w-xl">
                    <h2 className="text-gray-300 text-bold text-5xl">
                        Hi, I'm Nathan.
                    </h2>
                    <br></br>I am a recent graduate from Indiana University with
                    a B.S. in Informatics and a minor in both Web Design and
                    Human Centered Computing. graduate with a passion for web
                    design and data analytics. I love building sleek,
                    user-friendly applications and solving complex data
                    problems.
                </h2>
            </header>
            <main className="w-screen">
                <Section id="education" title="Education">
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-md w-screen flex justify-between items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-4 flex flex-col max-w-xl">
                            <h3 className="text-gray-300 font-bold text-left text-xl">
                                Indiana University
                            </h3>
                            <h2 className="text-gray-400 font-bold text-left text-lg">
                                Bachelor's of Science in Informatics
                            </h2>
                            <h2 className="text-gray-400 font-bold text-left text-md">
                                Minors: Web Design, Human Centered Computing
                            </h2>
                        </div>

                        <div className="border-l-2 border-white-600 h-full mx-2"></div>

                        <div className="p-4 max-w-3/4">
                            <p>
                                I earned a Bachelor of Science in Informatics
                                from Indiana University, where I developed a
                                strong foundation in technology, data analytics,
                                and human-computer interaction. My studies
                                combined technical skills with problem-solving
                                and user-centered design, allowing me to bridge
                                the gap between people and technology. In
                                addition to my major, I pursued minors in Web
                                Design and Human-Centered Computing, which
                                deepened my understanding of front-end
                                development, UX/UI principles, and the
                                importance of designing intuitive digital
                                experiences. This diverse academic background
                                has equipped me with the ability to create
                                innovative, user-friendly solutions in the
                                ever-evolving tech landscape.
                            </p>
                        </div>
                    </motion.div>
                </Section>

                <Section id="experience" title="Work Experience">
                    <motion.div
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 },
                            },
                        }}
                    >
                        <motion.div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <h3 className="text-lg font-bold text-gray-300">
                                Business Reporting Analyst
                            </h3>
                            <p className="text-gray-400">June 2024 - Present</p>
                            <br></br>
                            <p className="text-md text-gray-400">
                                Developed SQL queries and dynamic Power BI
                                reports to deliver actionable insights and
                                enhance data visualization for organizational
                                initiatives. Led the migration to Sigma
                                Reporting and collaborated with stakeholders to
                                create tailored dashboards, improving
                                decision-making and operational efficiency.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <h3 className="text-lg font-bold text-gray-300">
                                SQL Developer Intern
                            </h3>
                            <p className="text-gray-400">Summer 2023</p>
                            <br></br>
                            <p className="text-md text-gray-400">
                                Developed and maintained SQL databases,
                                including writing complex queries and optimizing
                                stored procedures to enhance data manipulation
                                and automation. Deployed and managed AWS
                                resources, such as EC2 and S3, while documenting
                                database schemas and processes for team
                                collaboration and future reference.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <h3 className="text-lg font-bold text-gray-300">
                                Data Analytics and Business Intelligence Intern
                            </h3>
                            <p className="text-gray-400">
                                Summer 2021, Summer 2022
                            </p>
                            <br></br>
                            <p className="text-md text-gray-400">
                                Worked closely with businesses to understand
                                their data needs and developed dashboards and
                                reports using Microsoft BI, improving data
                                accessibility and efficiency across departments.
                                Reduced time spent on data extraction and
                                streamlined reporting, leading to increased
                                productivity.
                            </p>
                        </motion.div>
                    </motion.div>
                </Section>

                <Section id="project" title="Projects">
                    <motion.div
                        className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center justify-center space-x-8"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-1/2">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-lg font-bold text-gray-300">
                                    Green Machine
                                </h3>
                                <p className="text-gray-400">
                                    Carbon Footprint Calculator
                                </p>
                                <p className="mt-2 text-gray-300 max-w-md">
                                    Collaborated on a team to develop a
                                    web-based Carbon Footprint Calculator,
                                    utilizing SQL and PHP for secure backend
                                    data storage, including questions,
                                    calculations, and user information.
                                    Implemented Google Maps API integration and
                                    designed the front end using HTML, CSS, and
                                    JavaScript. Developed a questionnaire-based
                                    system to assess users' daily activities,
                                    calculate their carbon footprint, and track
                                    progress over time, providing personalized
                                    recommendations to reduce environmental
                                    impact.
                                </p>
                            </div>
                        </div>

                        <div className="w-1/3 flex justify-center">
                            <img
                                src={greenmachine}
                                alt="Green Machine Project"
                                className="rounded-lg shadow-md w-3/4 object-contain"
                            />
                        </div>
                    </motion.div>
                </Section>
                <br></br>
            </main>
        </div>
    );
};

export default App;
