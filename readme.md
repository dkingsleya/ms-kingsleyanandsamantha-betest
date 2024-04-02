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

- Open the Command Palette (Ctrl+Shift+P) and use Docker: Add Docker Files to Workspace... command

#### Add an environment variable to the image

- Use ENV instruction to add an environment variable to the service container image.
- Set Docker CMD with command script to run the app (in this case node index.js)

#### Build the service image

- Open the Command Palette (Ctrl+Shift+P) and select the Docker Images: Build Image... command.
- Open the Docker Explorer and verify that the new image is visible in the Images tree:

#### Run the service container

- Right-click on the image built in the previous section and select Run or Run Interactive. The container should start and you should be able to see it in the Docker Containers tree
- Test the app just like regular development
- When done testing, right-click the container in the Containers tree and select Stop

#### Reference

- [Docker Reference](https://code.visualstudio.com/docs/containers/quickstart-node#_run-the-service-locally)

## WSL Trouble-shooting

```
sc config LxssManager start=auto
```

## Previews
#### Sign In JWT
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/sign-in.png)

#### Sign Up User
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/sign-up-user.png)

#### Insert Data
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/add-data.png)

#### Update Data
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/update-data.png)

#### Delete Data
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/delete-data.png)

#### Read Data
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/get-data.png)

#### Get Token
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/get-token.png)

#### Redis Before (Cache not yet created)
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/redis-1.png)

#### Redis After
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/redis-2.png)
