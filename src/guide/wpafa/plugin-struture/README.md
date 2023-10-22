# Plugin Structure

In our WordPress plugin project, the structure is organized into seven main folders, each serving a specific purpose within the plugin. These folders are located under the [`includes`](https://github.com/wpafa/wp-all-forms-api/tree/main/includes) directory and play a crucial role in the functionality and organization of our plugin.

```plaintext
wp-all-forms-api/
│
├── assets/
│   ├── img/
│   └── README.md
│
├── includes/
│   ├── admin/
│   ├── database/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── schema/
│   └── plugins/
│
├── languages/
│   ├── wp-all-forms-api.pot
│   ├── wp-all-forms-api-pt.mo
│   └── wp-all-forms-api-pt.po
│
├── .gitignore
├── README.md
├── index.php
└── wp-all-forms-api.php
```

1. **admin**: The 'admin' folder is where you'll find all the components and files related to the plugin's administration and settings. It helps manage the backend and user interface of our plugin.
2. **database**: The 'database' folder is responsible for managing custom database tables used by the plugin. It includes classes for creating and maintaining these tables, as well as handling data related to the plugin's specific functionalities.
3. **models**: The 'models' folder is the central location for defining and managing database operations. It encompasses operations related to both the plugin's functionality and its integration with third-party form builders. In this folder, you will find classes that handle interactions with the database, including querying, inserting, updating, and deleting data. These models are essential for maintaining and manipulating data within the plugin and for seamless collaboration with third-party form builder systems.
4. **controllers**: The 'controllers' folder acts as a crucial bridge connecting the 'routes' folder and the 'models' folder. It serves as an intermediary layer responsible for handling incoming requests and managing the flow of data between the user interface and the database. Controllers contain the logic necessary to interpret and process requests defined in the 'routes' folder and utilize the models for database operations. This pivotal role allows for seamless communication and effective control over the plugin's operations.
5. **routes**: The 'routes' folder is where we create custom routes specifically designed to integrate with third-party form builders. These routes establish a seamless connection between our plugin and external form builder plugins, allowing us to extend and enhance their capabilities. By creating custom routes within this folder, we can define how data flows between our plugin and third-party form builders, ensuring smooth communication and data exchange. This enables us to harness the power of popular form builder plugins while adding our unique features and functionality to the mix..
6. **schema**: The 'schema' folder is dedicated to validating request arguments based on the details registered for each route. Here, we define the schemas that outline the expected structure and criteria for incoming data. These schemas are essential for ensuring the accuracy and security of data processing within our plugin. By associating specific schemas with routes, we enforce strict validation rules that incoming data must satisfy. This validation process acts as a robust safeguard, preventing invalid or potentially harmful data from infiltrating the system and upholding the integrity of our plugin's functionality.
7. **plugins**: The 'plugins' folder serves as the core of our plugin, where we define and implement its fundamental functionality and methods. It contains the central components that drive the plugin's features and behavior. This folder encapsulates the heart of our plugin, housing the primary codebase responsible for managing various aspects of its operation. Here, we define core functionality, methods, and operations that enable the plugin to fulfill its intended purpose within the WordPress ecosystem. It acts as the backbone of the plugin, orchestrating all its essential functions and capabilities.

In addition, for adding support for new form builders, you'll find yourself working extensively in the [`models`](https://github.com/wpafa/wp-all-forms-api/tree/main/models), [`routes`](https://github.com/wpafa/wp-all-forms-api/tree/main/routes), [`controller`](https://github.com/wpafa/wp-all-forms-api/tree/main/controller) and [`plugins`](https://github.com/wpafa/wp-all-forms-api/tree/main/plugins) folders. These components play a vital role in implementing, extending, and managing support for various form builders. The [`models`](https://github.com/wpafa/wp-all-forms-api/tree/main/models) folder handles database operations, while [`routes`](https://github.com/wpafa/wp-all-forms-api/tree/main/routes) define custom routes for third-party form builders. The [`controller`](https://github.com/wpafa/wp-all-forms-api/tree/main/controller) acts as a bridge connecting these routes and the models, ensuring smooth data flow. The [`plugins`](https://github.com/wpafa/wp-all-forms-api/tree/main/plugins) folder remains the core of our plugin, where core functionality and methods are defined and expanded to support additional form builders. These folders collectively empower the plugin to adapt and integrate seamlessly with diverse form builder solutions.
