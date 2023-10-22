# Installation

You can install the plugin by following these steps:

1. Navigate to the "Plugins" section in your WordPress admin dashboard.
2. Click on the "Add New" button.
3. Search for "WPAFA - Mobile-Ready Submission Manager" and click "Install Now".
4. Once the installation is complete, click "Activate" to enable the plugin.

## Setup Requirements

- [x] WordPress Instance - you can learn more <a href="https://wordpress.org/support/article/how-to-install-wordpress/">here</a>
- [x] Composer - you can learn more <a href="https://getcomposer.org/doc/00-intro.md">here</a>

## For Developer

1. Clone the plugin directory into the `/wp-content/plugins/` directory.

```
git clone https://github.com/wpafa/wp-all-forms-api.git && cd wp-all-forms-api
```

2. Install project dependencies using `composer install`
3. Activate the `WP All Forms API` plugin through the WordPress plugin administration page.
4. After activating the plugin on your machine, the access route will be formed by the site's base, `https://mysite.com`, for the API base `/wp-json/wp-all-forms-api/v1`, and the endpoint, e.g.: `/ping`. Therefore, the route `https://mysite.com/wp-json/wp-all-forms-api/v1/ping` allows you to check if the API is functioning correctly, returning a `{"ping": "pong"}` response.
