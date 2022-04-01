#!/bin/bash
sudo docker run --network backend \
  --rm -itd -v $(pwd)/flask:/flask \
  --name flask flask uwsgi /flask/uwsgi.ini
sudo docker run --network backend \
  --rm -d -v $(pwd)/ngx:/etc/nginx/conf.d \
  --name ngx -p 8000:80 nginx:alpine nginx -g 'daemon off;'