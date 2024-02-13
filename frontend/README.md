# Colab-users - Frontend

This section pertains to the frontend aspect of the entire project. Its purpose is to display user cards containing essential information and provide a detailed page for each user.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [License](#license)
- [Contacts](#contacts)

## Installation

> [!WARNING]
> To view the users in this part of the project, it's necessary to start the backend. You can do this by following the [installation steps](/backend/README.md)

Please follow these steps to get started:

1. Clone the project repository and navigate to the colab-users folder:

```bash
git clone git@github.com:ldantas-s/colab-users.git && cd colab-users
```

2. Enter into the frontend folder and install the dependencies:

```bash
cd frontend && yarn
```

3. Run the frontend project:

```bash
yarn dev
```

### Running with Docker

If you prefer to run this part of the project using Docker, follow these steps:

```bash
docker build -t <image_name_you_prefer> .
docker run --name <container_name_you_prefer> -p 5173:5173 <image_name_you_prefer>
```

Replace `<image_name_you_prefer>` with the desired name for your Docker image, and `<container_name_you_prefer>` with the preferred name for your Docker container. These commands will build the Docker image and then run the container, making the application accessible at <http://localhost:5173>. Adjust the port number if needed.

> [!TIP]
> You can bring up both the frontend and backend parts of the project by following the [installation steps](/README.md#installation)

## Usage

When you execute the command **`yarn dev`**, it automatically runs with the **`--host`** flag, allowing you to access the application from your phone or other devices. Simply look for the **Network: <ip_address>:5173** in the terminal output to find the address you need to access from the other device. Alternatively, you can access the application directly in your local browser using the URL <http://localhost:5173>.

## Documentation

You can find more documentation about this project in both the [root](/README.md) and [backend](/backend/README.md) README.

## License

This project is licensed under the [MIT License](/LICENSE), allowing for flexible use and modification while ensuring proper attribution.

## Contacts

For questions or feedback, feel free to contact me at <ldantas.ti@gmail.com>. I welcome any questions or suggestions you may have. Additionally, you can check out my website and LinkedIn profile for more information:

- webstite: <https://lucianodantas.dev>
- Linkedin: <https://www.linkedin.com/in/ldantas-s/>
