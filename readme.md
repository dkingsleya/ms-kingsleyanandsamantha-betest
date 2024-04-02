## Run Dev Command: 

```
node --env-file=.env index.js
```

## Set Up WSL

```
wsl --install -d Ubuntu
wsl --update
wsl --set-default-version 2
```

## Install Redis

```
sudo apt-add-repository ppa:redislabs/redis
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install redis-server
sudo service redis-server restart
redis-cli
```

## Setting Up Docker

#### Add Docker files to the project

- Open the Command Palette (Ctrl+Shift+P) and use <code>Docker: Add Docker Files to Workspace...</code> command

#### Add an environment variable to the image

- Use ENV instruction to add an environment variable to the service container image.
- Set Docker CMD with command script to run the app (in this case node index.js)

#### Build the service image

- Open the Command Palette (Ctrl+Shift+P) and select the <code>Docker Images: Build Image...</code> command.
- Open the Docker Explorer and verify that the new image is visible in the Images tree:

#### Run the service container

- Right-click on the image built in the previous section and select Run or Run Interactive. The container should start and you should be able to see it in the Docker Containers tree
- Test the app just like regular development
- When done testing, right-click the container in the Containers tree and select Stop

</br>
</br>

> [!TIP]
> See Docker References here -> [Docker Reference](https://code.visualstudio.com/docs/containers/quickstart-node#_run-the-service-locally)

</br>
</br>

## WSL Trouble-shooting

```
sc config LxssManager start=auto
```

## Application Snapshots
#### Running with Docker
![Preview](/docker.png)

#### Sign In JWT
![Preview](/sign-in.png)

#### Sign Up User
![Preview](/sign-up-user.png)

#### Insert Data
![Preview](/add-data.png)

#### Update Data
![Preview](/update-data.png)

#### Delete Data
![Preview](/delete-data.png)

#### Read Data
![Preview](/get-data.png)

#### Get Token
![Preview](/get-token.png)

#### Redis Before (Cache not yet created)
![Preview](/redis-1.png)

#### Redis After
![Preview](/redis-2.png)
