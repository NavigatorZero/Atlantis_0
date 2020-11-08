# Atlantis_0
## Сайт бухгалтерской школы с интеграцией api Youtube 

# Workflow: 
    Разработка ведется на локальных машинах, после сливаются на сервер и тестируются. 
    Чтобы развернуть проект необходимы следующие зависиомсти: 

   * PHP 7.4 
   * PHP-fpm 7.4
   * node.js 6 
   * symfony 5.1.8  
   * react 17.0.1 
   * nginx 1.14 
   * composer 1.6 

# Deploy проекта (linux):
   1. sudo apt install nginx-full 
   2. sudo apt install php 
   3. sudo apt install php-fpm 
   4. cd etc/nginx/sites-enabled 
   5. vim default 
   6. скопировать данные из файла nginx.conf , изменив переменную root до папки backend/public , сохранить  
   7. sudo systemctl start nginx.  

  ##  Деплой бекенда: 
     1. cd backend 
     2. composer install 
     3. symony server:start -port=9000 

 ##   Деплой фронта: 
    1. cd frontend 
    2. sudo npm install 
    3. sudo npm start 
