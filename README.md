# Photo Portfolio
This is a portfolio site I made as an outlet for the unreasonable number of golden retriever photos I've taken. It uses React and Next.js, with Cloudinary for image uploading and transformations, and Reflow Auth for simple passsword protection of family photos.

![Photo portfolio site on Macbook](https://res.cloudinary.com/dgswa3kpt/image/upload/v1728758520/vzructatvhk52p4buetd.png)

## Built With
- React
- Next.js
- Tailwind CSS
- Reflow Auth

## Live Demo
You can view the site at [jeffreyhampton.com](https://jeffreyhampton.com/). Hope you like dogs.

## Getting Started
### Image Hosting
Cloudinary has a terrific SDK and a generous free tier. Follow the developer documentation to create a [Cloudinary developer account](https://cloudinary.com/documentation/how_to_integrate_cloudinary), then add your cloud name, API key, preset, and cloud secret in your .env file.

### Authentication
The project uses Reflow Auth to restrict access to family photos to people with a password, so you can skip this step if your site will be fully visible. If you do, follow the [Reflow developer documentation](https://reflowhq.com/learn/how-to-password-protect-a-nextjs-web-app/) for password protecting urls You'll need to add the hashed passphrase, session secret, and project ID to your .env.

### Clone and Run
`git clone https://github.com/jeffreylawhampton/photoportfolio.git<br>
cd photoportfolio<br>
npm install<br>
npm run dev`
Your project should then be live at [localhost:3000](https://localhost:3000/).

## License
This project is licensed under the terms of the MIT license. 
