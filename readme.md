Run Dev Command: node --env-file=.env index.js

## Set Up WSL

wsl --install -d Ubuntu
wsl --update
wsl --set-default-version 2

## Install Redis

sudo apt-add-repository ppa:redislabs/redis
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install redis-server
sudo service redis-server restart

## WSL Trouble-shooting

sc config LxssManager start=auto
