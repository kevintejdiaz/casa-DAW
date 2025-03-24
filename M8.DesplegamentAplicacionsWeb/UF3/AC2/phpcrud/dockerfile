FROM php:7.1-apache
# COPY src/ /var/www/html
RUN apt update -y && apt upgrade -y
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
EXPOSE 80