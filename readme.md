# Cloudflare Workers Reverse Proxy

This project is a fast reverse proxy built using Cloudflare Workers. It allows you to proxy requests from your domain to another backend server.

## Prerequisites

Before using this reverse proxy, ensure that you have the following:

- A Cloudflare account
- A registered domain with Cloudflare
- Basic knowledge of Cloudflare Workers and JavaScript

## Usage

1. **Configure Cloudflare Workers:**

   - Log in to your Cloudflare dashboard.
   - Navigate to the "Workers" section.
   - Create a new Worker script.

2. **Modify Worker Script:**

   - Update the `targetHost` variable with the URL of your backend server.
   - Customize any additional configurations in the script according to your needs.

3. **Deploy the Worker:**

   - Save the script.
   - Deploy the script to Cloudflare Workers.

4. **Configure DNS:**

   - Ensure that your domain's DNS records are correctly configured to point to Cloudflare's nameservers.
   - Verify that the Cloudflare proxy (orange cloud icon) is enabled for the DNS records associated with your domain.

5. **Test the Reverse Proxy:**

   - Access your application by navigating to `https://yourdomain.com`.
   - The reverse proxy should forward requests to your backend server.

## Configuration Options

- **targetHost:** The URL of the backend server you want to proxy requests to.
- **Additional Configurations:** Modify the script to add custom headers, authentication, or other proxy-related configurations.

## Customization

Feel free to customize the reverse proxy script based on your requirements. You can add features, modify headers, or implement security measures according to your needs.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments

- Cloudflare Workers documentation: [https://developers.cloudflare.com/workers/](https://developers.cloudflare.com/workers/)

## Support and Contributions

If you encounter issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

