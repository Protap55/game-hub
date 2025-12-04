import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto py-35">
        <h1 className="text-4xl font-bold text-center mb-8">About GameHub</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
          <p>
            GameHub is a platform to explore popular games, view game details,
            and download games easily. Our goal is to make game discovery fun
            and simple.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside">
            <li>Popular Games Section with top-rated games</li>
            <li>Detailed Game Page with all available info</li>
            <li>Protected pages with login authentication</li>
            <li>Download links for games</li>
            <li>Filter games by category</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <p>React, React Router, Tailwind CSS, JSON, Firebase </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Developer</h2>
          <p>Protap Dutta</p>
          <p>Email: protapwith.dev@gmail.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Protap55?tab=repositories"
              className="text-blue-500 hover:underline"
            >
              https://github.com/Protap55?tab=repositories
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
