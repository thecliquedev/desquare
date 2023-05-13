#!/bin/sh
#set -x

if [ -z $1 ]
then
  COMMAND="bash"
else
  COMMAND="${@}"
fi

#docker build -t d_ui .

./scripts/create_network.sh


docker-compose --project-directory . up -d
docker exec -it desquare_ui sh


#echo yarn
#yarn

#echo npm start
#yarn start

# docker run -d -p 80:80 --network desquare_network d_ui