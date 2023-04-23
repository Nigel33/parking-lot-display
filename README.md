To run local BE without docker
- Navigate to root folder of server
- run the command `npm run start`

To run local FE
- Navigate to root folder of client 
- run the command `npm run start`

To run local BE with docker 
- Ensure Docker desktop is first installed. 
- Run DOcker desktop
- Run this command in root folder of server: `docker build -t my-node-app .`
- Run this command in root folder of server: `docker run -p 8080:8080 my-node-app`
- To stop docker container and delete docker image permanently, open up a new terminal 
- run this command: `docker ps` 
- copy the container id and run this command `docker stop <container-id>`
- run this command `docker container prune -f` to remove all stopped docker containers. 
- Enter into docker desktop, click on docker images and delete the image. 
