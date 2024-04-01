### Run Dev Command: 

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
```

## WSL Trouble-shooting

```
sc config LxssManager start=auto
```

## Previews
### Sign In JWT
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/sign-in.png)

### Sign Up User
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/sign-up-user.png)

### Insert Data
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/add-data.png)

### Update Data
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/update-data.png)

### Delete Data
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/delete-data.png)

### Read Data
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/get-data.png)

### Get Token
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/get-token.png)

### Redis Before (Cache not yet created)
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/redis-1.png)

### Redis After
![Preview](https://github.com/dkingsleya/ms-kingsleyanandsamantha-betest/blob/main/redis-2.png)
