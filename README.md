# Dia 1
// Imagen es semejante a una clase  
docker run hello-world  
docker pull nginx // bajar Imagen  
docker run nginx // ejecutar contenedor  
docker run -d nginx // ejecutar contenedor desacoplado de la consola  
docker run -d --name henrynginx nginx // ponerle nombre al contendor  
docker logs henrynginx // ver logs del contenedor  
docker top henrynginx // ver los procesos  
docker exec henrynginx ls // listas los archivos del contenedor  
docker exec henrynginx mkdir grupomatrix // crear una carpeta dentro el contenedor
docker exec -it henrynginx bash // abrir una consola bash del contenedor para interactuar
