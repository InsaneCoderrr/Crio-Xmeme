#MONGO INSTALLATION 
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod


#NODEJS INSTALLATION
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
node -v
npm -v

#GIT
sudo yum update -y
sudo yum install git -y
git — version
git clone https://github.com/sumant-mishra/node-app.git

