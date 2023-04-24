import { publish } from "gh-pages";

publish(
    "web_dev",
    {
        branch: "docs",
        repo: "https://github.com/cdjellen/cdjellen.github.io.git",
        user: {
        name: "Chris Jellen",
        email: "cdjellen@gmail.com"
    },
        dotfiles: true
    },
    () => {
        console.log("Page deployed.");
    }
);