# Instalar proyecto

1. Ejecutar ```git clone https://github.com/IsaacYAGI/app-cordova.git```.
2. Una vez descargado correr el comando `npm install`
3. Luego ejecutar el comando `cordova prepare` para descargar los plugins y plataformas configuradas en el proyecto.

Ya se puede compilar cualquiera de las plataformas guardadas previamente 

- Web: Correr el comando `cordova run browser`.
- Android: Correr el comando `cordova build android` para generar APK. También se puede lanzar directamente al emulador corriendo `cordova run android --target=[IP]:[PUERTO]`.