# Evaluación - Desarrollo de taller Microservicios

En este archivo encontrará los requisitos, instrucciones y parámetros de evaluación del taller de desarrollo de microservicios del Curso de desarrollo moderno 2023 de la Bolsa de Santiago.

## Requisitos
- Ambiente Linux con kernel 3.11 o superior, Windows 10 o superior con WSL2 instalado

- Docker instalado en Linux o WSL2. Script de instalación:
```shell
curl -s https://get.docker.com | bash
```

- K3d instalado localmente. Script de instalación:
```shell
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
```

- IDE VSCode o similar para desarrollar el código

## Instrucciones

__Clonar__ o realizar __fork__ del repositorio presente. Para clonar el repositorio, ejecutar el siguiente comando:

```shell
cd <directorio de trabajo>
git clone https://github.com/malarcon-79/microservices-lab.git
cd microservices-lab
```

Luego, iniciar la base de datos y otros requisitos. Para esto, se debe ingresar a la carpeta __01-kubernetes__ y ejecutar scripts `00-create-cluster.sh` y `01-create-backend.sh`
```shell
cd 01-kubernetes
./00-create-cluster.sh
./01-create-backend.sh
cd ..
```
---

## Evaluación

__2 puntos por método__

Se requiere completar el microservicio de Custodia (__custody-service__), para los siguientes métodos:
- CustodyService.AddCustodyStock: agregar 1 registro de custodia a la tabla de custodias.
    - __Entrada:__ mensaje de tipo `lab.system.custody.CustodyAdd`
        - period: período de la custodia en formato YYYY-MM. Parte de la llave primaria (PK) del registro de custodia. No puede ser nulo
	    - stock: nemotécnico del instrumento en custodia. Parte de la llave primaria. No puede ser nulo
	    - client_id: identificador del cliente (RUT). Parte de la llave primaria. No puede ser nulo
        - quantity: cantidad de instrumentos en custodia. Debe ser mayor o igual a cero
    - __Salida:__ mensaje vacío de tipo `lab.system.custody.Empty`
    - __Comportamiento:__ el microservicio debe validar que los campos del mensaje entrante no vengan nulos o inválidos, y en caso de no haber errores, almacenar el registro mediante una llamada al ORM empleado. En caso de haber errores, devolver un error indicando la causa (_"campo X nulo o inválido"_). Para código similar, revisar implementación del método `BillingService.CreateInvoice`
- CustodyService.GetCustody: obtener el listado de custodias para un conjunto de parámetros de búsqueda.
    - __Entrada:__ mensaje de tipo `lab.system.custody.CustodyFilter`
        - period: período de la custodia en formato YYYY-MM, o una cadena vacía
	    - stock: nemotécnico del instrumento en custodia, o una cadena vacía
	    - client_id: identificador del cliente (RUT), o una cadena vacía
    - __Salida:__ mensaje de tipo `lab.system.custody.Custodies`
      - items: arreglo de mensajes de custodia `lab.system.custody.Custody`
    - __Comportamiento:__ el microservicio debe generar un criterio de búsqueda simple mediante los parámetros de entrada, para devolver todas las custodias que cumplan con dicho criterio. Para código similar, revisar implementación del método `BillingService.GetInvoices`

---

__1 punto__

Se requiere compilar la imágen del microservicio de Custodia. Para esto, se creó un archivo __Dockerfile__ en la raíz del proyecto __custody-service__. Revisar el archivo y encontrar los errores en el mismo, para que pueda generar correctamente una imágen de salida mediante el comando:
```shell
cd custody-service
docker build -t custody-service:latest .
```

__Nota__: Los errores de sintaxis pueden ser detectados mediante plugins que den soporte para Dockerfiles, los otros errores sólo aparecerán al intentar compilar la imagen.

---

__1 punto__

Crear archivo YAML para liberar nuevo componente al clúster. Debe incluír:
- Definición de `Deployment` para realizar el despliegue básico con al menos 2 copias
- Definición de `Service` para enlazar puerto de escuchar del microservicio (TCP 5000)

---

## Entrega

La forma de entrega estará informada por medio de correo y mensajería oficial