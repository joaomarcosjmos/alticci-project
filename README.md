# Alticci Project

The goal is to calculate a sequence according to the logic:

```
n=0 => a(0) = 0
n=1 => a(1) = 1
n=2 => a(2) = 1
n>2 => a(n) = a(n-3) + a(n-2)
```

Along with the REST API you will find a front-end to assist in testing.

## Tecnologies

* Java 17
* Quarkus 2.13.1
* Angular 14
* Docker 20.10.15
* Docker-compose 1.27.4


## Running the application in dev mode

* For Quarkus and Angula with docker-compose

Start
```shell
docker-compose up -d
```
Stop
```shell
docker-compose down
```
***

* For Quarkus (Go to /alticci-back):

```shell
./mvnw quarkus:dev
```
***

* For Angular (Go to /alticci-front):
```shell
npm install
ng serve
```


As long as api stays running you may access the Api documentation on the following URL:

```
http://localhost:8081/swagger-ui
```