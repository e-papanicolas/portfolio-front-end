import React from "react";
import "../App.css";
import ProjectCard from "./ProjectCard";
import carbonpic from "./../images/carbonpic.png";
import tweeter from "./../images/tweeter.png";
import tweetstream from "./../images/tweetstream2.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "My Carbon Footprint",
      description:
        "My Carbon Footprint takes a look at some of the most common carbon emitting activities and provides users the ability to fill in personal details and receive an estimate of carbon emissions based on data provided by the Carbon Interface REST API. The data that powers the API is sourced from governments, non-profits, and leading researchers around the world including the EPAGHG Protocol and Environment Canada. The app is designed to create awareness by powering carbon measurement to combat climate change.",
      url: "",
      preview: carbonpic,
      tech: ["React", "Ruby", "Sinatra", "PostgreSQL"],
      github: "https://github.com/e-papanicolas/my-carbon-footprint-app",
    },
    {
      id: 3,
      name: "TweetStream",
      description:
        "TweetStream allows users to create an event board that collects tweets that match a hashtag from the Twitter Streaming API, and streams them to event boards in real time using Action Cable for websockets. Using Active Storage for Rails with Cloudinary, users can upload profile pictures directly from a file chooser. TweetStream uses JWT and BCrypt for authentication and authorization and has a React front end with Greensock animation library and custom CSS.",
      url: "",
      preview: tweetstream,
      tech: ["React", "Ruby", "Rails", "PostgreSQL"],
      github: "https://github.com/e-papanicolas/tweet-front-end",
    },
    {
      id: 2,
      name: "Tweeter",
      description:
        "Tweeter is a clone of popular social media features. Users can create accounts, follow friends, and see a feed of friends posts and an explore page for all users posts. Users can create their own profiles and see their post history and account details. The chat feature uses Action Cable to broadcast messages to channels in real time.",
      url: "",
      preview: tweeter,
      tech: ["React", "Ruby", "Rails", "PostgreSQL"],
      github: "https://github.com/e-papanicolas/social-front-end",
    },
  ];

  return (
    <div id="projects-container">
      <div>
        <h2 className="heading">my projects</h2>
      </div>
      <div id="projects">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}