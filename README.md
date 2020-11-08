# Atlantis_0
Сайт бухгалтерской школы с интеграцией api Youtube \n\n

Workflow: \n
    Разработка ведется на локальных машинах, после сливаются на сервер и тестируются. \n
    Чтобы развернуть проект необходимы следующие зависиомсти: \n\n

    PHP 7.4 \n
    PHP-fpm 7.4\n
    node.js 6 \n
    symfony 5.1.8 \n 
    react 17.0.1 \n
    nginx 1.14 \n
    composer 1.6 \n

Deploy проекта (linux):\n
    sudo apt install nginx-full \n
    sudo apt install php \n
    sudo apt install php-fpm \n
    cd etc/nginx/sites-enabled \n
    vim default \n
    скопировать данные из файла nginx.conf , изменив переменную root до папки backend/public , сохранить \n 
    sudo systemctl start nginx.  

    Деплой бекенда: \n
        cd backend \n
        composer install \n
        symony server:start -port=9000 \n

    Деплой фронта: \n
        cd frontend \n
        sudo npm install \n
        sudo npm start \n
