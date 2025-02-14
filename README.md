3. Pipeline CI/CD (básico)
1.	Elaboro el plano arquitectónico del proyecto

2.	Características del proyecto a desarrollar:
a.	Voy a crear un Backend con los métodos GET, POST, PUT, DELETE 
b.	La Api me va a pedir usuario/contraseña a través de un token generado JWT
c.	Voy a crear una base de datos en mysql en un dominio y hosting externo con las siguientes tablas: 
[customers] con los campos Documento/Nit, Nombre, Dirección, Email, Teléfono. 
[providers] tiene los mismos campos que  la tabla anterior
[users] tiene los campos username, email y password para poder registrame y loguearme.

Nota: Estas tablas se van a crear a través del ORM sequelize
Nota2: El Endpoint de customers está protegido con un middleware, es decir que debo loguearme con un usuario registrado y utilizando un token.
Nota3: El Endpoint de providers no necesita loguearse, es decir puedo acceder directo en la url de los distintos métodos.
d.	Voy a probarla con las herramientas Postman, Insomnia o desde el mismo id VSC a través de su plugin respectivo
e.	Lenguaje JavaScript, entorno nodeJS, framework Express
f.	Endpoints:
localhost:3001/api/users/register
localhost:3001/api/users/login
localhost:3001/api/customers/
localhost:3001/api/providers/

3.	Teniendo mi proyecto listo en local, procedo a crear un repositorio en GitHub voy a llamarlo PipelineCiCdBasico-Ada

4.	Una vez tenga mí proyecto funcionando correctamente en local, procedo a subirlo a GitHub. Desde la terminal de comandos donde está el proyecto, ejecutamos estos comandos.
git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git

git push -u origin master

5.	Creo un Instancia en AWS sea en EC2 o Lightsail  [SO Ubuntu 20.04] y aquí procedo con los siguientes comandos. 

5.1	Conectarme por SSH
5.2	sudo apt update [Para actualizar el servidor]
5.3	sudo apt upgrade [Actualiza el sistema operativo]
5.4	Recomendado instalar zsh [Este es un programa/ una terminal más fácil de poder navegar] sudo apt install zsh Luego 
sudo apt update luego sudo apt upgrade etc etc seguir el instructivo de instalación
zsh =  Es un Shell. Es un programa que me permiten interactuar directamente con el sistema operativo sin la interfaz gráfica, 
es decir por línea de comando. Cuando hayas activado correctamente el zsh debes salirte de la conexión SSH y volver a conectarte.
5.5	pwd  [Me muestra que estoy en el root]
6.0	COMENZAMOS: En GitHub dar clic en Settings luego en Actions y luego en Runners
7.0	Seguir con las instrucciones: Dar Clic en el botón de color verde que dice New self-hosted runner
