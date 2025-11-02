# Chris Vega's Personal Portfolio

This repository contains the source code for my personal portfolio website, [chris-vega.us](https://chris-vega.us).

This site is built with Jekyll and is a customized fork of the [cvless theme](https://github.com/piazzai/cvless).

## Local Development

This site can be run locally for testing using Docker, which simplifies the Jekyll environment setup.

### Option 1: Run with Docker (Local Desktop)

This is the recommended command for running on a local desktop (Linux, macOS, or Windows with Docker Desktop).

1.  Ensure you have [Docker Desktop](https://docs.docker.com/get-docker/) installed.
2.  Open a terminal in the project's root directory.
3.  Run the following command:

    ```bash
    docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve
    ```
    *(Note for Windows CMD users: You may need to replace `$(pwd)` with `%cd%`)*

4.  Once the server is running, you can view the site at `http://localhost:4000`.

### Option 2: Run with GitHub Codespaces

This is the easiest way to test in the cloud, directly from your browser.

1.  Open this repository in a GitHub Codespace.
2.  Wait for the environment to build, then open a terminal at the bottom.
3.  Run the same Docker command:
    ```bash
    docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve
    ```
4.  Codespaces will automatically detect the running server and show a pop-up in the bottom-right corner. Click "Open in Browser" to view the site.

---

## Original Theme Credits

The "cvless" theme this site is based on draws in one way or another from the following projects:

-   [Bootstrap](https://getbootstrap.com/)
-   [Hack](https://sourcefoundry.org/hack/)
-   [Iconoir](https://iconoir.com/)
-   [Open Color](https://yeun.github.io/open-color/)
-   [Particles.js](https://vincentgarreau.com/particles.js/)
-   [Piazzolla](https://piazzolla.huertatipografica.com/)
-   [Poole](https://getpoole.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.