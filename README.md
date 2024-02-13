<h1 align="center">Colab-users</h1>

<img src="https://i.pinimg.com/originals/ca/65/68/ca6568d6be183fd2bdd37deff7de093b.jpg" />

<p align="center">The Colab-users project is a full-stack application built using the JavaScript stack. Its primary objective is to showcase user profiles through a user-friendly interface, offering an exceptional user experience.</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Decisions](#decisions)
- [Documentation](#documentation)
- [License](#license)
- [Contacts](#contacts)

## Installation

> [!IMPORTANT]
> To ensure a smooth experience running this project, it is necessary to have Docker installed on your machine. Alternatively, you can follow the instructions provided in the README files for both parts of the project.

Please follow these steps to get started:

1. Clone the project repository and navigate to the colab-users folder:

```bash
git clone git@github.com:ldantas-s/colab-users.git && cd colab-users
```

2. Once inside the colab-users directory, run the following command to start both parts of the project using Docker Compose:

```bash
docker-compose build && docker-compose up
```

This will initialize and run the project containers.

## Usage

At this point, you can access <http://localhost:5173> to view a list of users. By clicking on each user, you'll be able to see their details.

## Decisions

- Throughout the development process, I utilized Test-Driven Development (TDD) methodology for both the frontend and backend parts of the project. TDD offers a rigorous yet rewarding approach, challenging developers to think critically before coding. As a result, it fosters concise, clear code by encouraging thoughtful design and careful consideration of requirements before implementation.
- In certain sections of both parts, I employed Object-Oriented Programming (OOP) principles to abstract complexity, simplifying the codebase. However, during development, I encountered challenges related to dependencies, prompting the realization of the need for further study in this area. Despite encountering some hurdles, leveraging OOP facilitated clearer problem-solving and enhanced the overall clarity of the codebase.
- The decision to organize the project into separate frontend and backend folders was driven by my limited experience with configuring a monorepo. While this approach may not be optimal, especially for larger projects with multiple contributors, it proved sufficient for smaller projects or proof of concepts (POCs). In these scenarios, I didn't encounter any significant drawbacks. However, I recognize that a monorepo setup could offer benefits in streamlining development processes. Yet, for larger projects with diverse teams collaborating on various components, the added complexity of a monorepo might outweigh its advantages. In my view, the suitability of a monorepo depends on the specific needs and scale of the project, weighing the potential benefits against the complexities it introduces.

## Documentation

You can find more documentation about this project in both the [frontend](/frontend/README.md) and [backend](/backend/README.md) README.

## License

This project is licensed under the [MIT License](/LICENSE), allowing for flexible use and modification while ensuring proper attribution.

## Contacts

For questions or feedback, feel free to contact me at <ldantas.ti@gmail.com>. I welcome any questions or suggestions you may have. Additionally, you can check out my website and LinkedIn profile for more information:

- webstite: <https://lucianodantas.dev>
- Linkedin: <https://www.linkedin.com/in/ldantas-s/>
