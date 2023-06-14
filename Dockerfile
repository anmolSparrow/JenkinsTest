FROM nginx

RUN mkdir /etc/nginx/sites-available
RUN mkdir /etc/nginx/sites-enabled
COPY test.conf /etc/nginx/sites-available/test.conf
RUN ln -s /etc/nginx/sites-available/test.conf /etc/nginx/sites-enabled
COPY build/ /usr/share/nginx/html/