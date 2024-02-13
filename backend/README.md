# Colab-users - Backend

This part refers to the backend of a whole project which has a prupose get users from [Random User](https://randomuser.me/) service and return for the frontend part.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [License](#license)
- [Contacts](#contacts)

## Installation

Please follow these steps to get started:

1. Clone the project repository and navigate to the colab-users folder:

```bash
git clone git@github.com:ldantas-s/colab-users.git && cd colab-users
```

2. Enter into the backend folder and install the dependencies:

```bash
cd backend && yarn
```

3. Run the frontend project:

```bash
yarn dev
```

### Running with Docker

If you prefer to run this part of the project using Docker, follow these steps:

```bash
docker build -t <image_name_you_prefer> .
docker run --name <container_name_you_prefer> -p 3000:3000 <image_name_you_prefer>
```

Replace `<image_name_you_prefer>` with the desired name for your Docker image, and `<container_name_you_prefer>` with the preferred name for your Docker container. These commands will build the Docker image and then run the container, making the application accessible at <http://localhost:3000/>. Adjust the port number if needed.

> [!TIP]
> You can bring up both the frontend and backend parts of the project by following the [installation steps](/README.md#installation)

## Usage

You can explore the API endpoints by accessing the following URLs:

Users resource: <http://localhost:3000/api/users>
API Documentation: <http://localhost:3000/api-docs>

## Documentation

You can find more documentation about this project in both the [root](/README.md) and [frontend](/frontend/README.md) README.

## License

This project is licensed under the [MIT License](/LICENSE), allowing for flexible use and modification while ensuring proper attribution.

## Contacts

For questions or feedback, feel free to contact me at <ldantas.ti@gmail.com>. I welcome any questions or suggestions you may have. Additionally, you can check out my website and LinkedIn profile for more information:

- webstite: <https://lucianodantas.dev>
- Linkedin: <https://www.linkedin.com/in/ldantas-s/>
