# Atlantis_0
## Сайт бухгалтерской школы с интеграцией api Youtube 

# Workflow: 
    Разработка ведется на локальных машинах, после сливаются на сервер и тестируются. Разработка ведется в ветке с кратким описанием задачи типа 'issue/fixed_css'. После того как код готов нужно запросить пулл реквест в мастер. Кто запушит сразу в мастер получит пизды. 
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
   4. sudo apt-get install php-xml
   5. apt-get install php-pgsql
   6. cd etc/nginx/sites-enabled 
   7. vim default 
   8. скопировать данные из файла nginx.conf , изменив переменную root до папки backend/public , сохранить  
   9. sudo systemctl start nginx.  

##  Деплой бекенда: 
     1. cd backend 
     2. composer install
     3. Прописать в .env фйле реквизиты для доступа к базе
     4. php bin/console doctrine:migrations:migrate 
     3. symony server:start -port=9000 

##  Деплой фронта: 
    1. cd frontend 
    2. sudo npm install 
    3. sudo npm start    
