# Dia 1
// Imagen es semejante a una clase  
docker run hello-world  
docker pull nginx // bajar Imagen  
docker run nginx // ejecutar contenedor  
docker ps // mostrar los contenedores activos  
docker run -d nginx // ejecutar contenedor desacoplado de la consola  
docker run -d --name henrynginx nginx // ponerle nombre al contendor  
docker logs henrynginx // ver logs del contenedor  
docker top henrynginx // ver los procesos  
docker exec henrynginx ls // listas los archivos del contenedor  
docker exec henrynginx mkdir grupomatrix // crear una carpeta dentro el contenedor  
docker exec -it henrynginx bash // abrir una consola bash del contenedor para interactuar  
docker stop henrynginx // para el contenedor  
docker ps -a // muestra todos los contenedores  
docker rm nombre_contenedor // elimina contenedor  
docker run --rm -d  --name henrynginx2 // crea el contenedor y al momento de poner stop se eliminara no solo va parar  
docker run -d -p 8000:80 --name henrynginx3 nginx // mapea el puerto 80 del contenedor a un puerto 8000 del windows(maquina local)  
