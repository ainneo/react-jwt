- React JWT AUTH: https://www.youtube.com/watch?v=OUP-urBy1k4&t=0s
- Backend: Build a fake backend with Docker: https://github.com/scalablescripts/auth-api

  - run docker-compose up to build containers, then close containers to and run docker-compose up - d, and run the last command: docker exec backend /bin/sh start.sh (this command builds the mock database).
  - now the backend is running on localhost:8000

  -\*\*\* for other backends: https://www.youtube.com/watch?v=OUP-urBy1k4
  
  - if you are running into issues connecting to the faux docker backend, simply remove the MYSQL_USER and it will work fine because the root user gets created automatically.: https://stackoverflow.com/questions/66831863/mysql-docker-container-keeps-restarting
