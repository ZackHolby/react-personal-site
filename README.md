# My Personal Website

Built this website using React. Utilized Bootstrap for dyanmic functionality and S3 static website hosting.

You can view the live site here: [www.zholbrook.com](http://zholbrook.com)

# Running the code locally

After a pull, you will utilize docker to build and run an image of this app.

## Docker Build

In the project directory, you can run:

### `docker build -t local-site .`

After you have built the image, run the image in a container to view:

### `docker run -d -it -p 80:80/tcp --name local-site local-site:latest`

Open [http://localhost:80](http://localhost:80) to view it in the browser.

You will need to rebuild image if you make edits.