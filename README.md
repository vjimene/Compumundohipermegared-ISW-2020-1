# Compumundohipermegared-ISW-2020-1
Repositorio del equipo Compumundo hipermegared ISW 2020-1

1. [Direcciones](#direcciones)
  1. [API](#direcciones/api)
  2. [API Personal de Servicio](#direcciones/api/pservice)
  3. [API Equipo](#direcciones/api/team)
  4. [Web Integrada](#direcciones/web)
2. [Ejecución](#ejecutar)

<a name="direcciones"></a>
## 1. Direcciones:
<a name="direcciones/api"></a>
### API
API del Equipo Compummundohipermegared.

#### General.
- https://chopinhauer.herokuapp.com
<a name="direcciones/api/pservice"></a>
#### Personal de servicio
Api de Personal de Servicio.
- https://chopinhauer.herokuapp.com/pservice
#### Obtener todos.
Realizar petición GET.
- https://chopinhauer.herokuapp.com/pservice/all
#### Agregar.
Agregar el personal de servicio entregado en formato json.
- https://chopinhauer.herokuapp.com/pservice/add
<a name="direcciones/api/team"></a>
#### Eliminar.
Elimina el personal de servicio correspondiente al id entregado como parametro en la URL.
- https://chopinhauer.herokuapp.com/pservice/delete?id={id}
#### Update.
Actualizar el personal de servicio entregado como json a la URL.
- https://chopinhauer.herokuapp.com/pservice/update
<a name="direcciones/api/team"></a>
#### Equipos
API de equipos.
- https://chopinhauer.herokuapp.com/team
#### Obtener todos.
Realizar petición GET.
- https://chopinhauer.herokuapp.com/team/all
#### Crear.
Crea un equipo con especialidad(tag) y lista de ids correspondiente al personal de servicio integrantes del equipo.
- https://chopinhauer.herokuapp.com/team/add?tag={tag}&idlist={idlist}
#### Eliminar.
Elimina el equipo correspondiente al id entregado como parametro en la URL.
- https://chopinhauer.herokuapp.com/pservice/deleteTeam?id={id}
#### Agregar Personal de Servicio al Equipo.
Agregar el personal de servicio correspondiente al equipo, mediante la lista de ids e id del equipo, entregados como parametros.
- https://chopinhauer.herokuapp.com/pservice/addToTeam?id={id}&idlist={idlist}
#### Eliminar Personal de Servicio del Equipo.
Eliminar el personal de servicio correspondiente al equipo, mediante la lista de ids e id del equipo, entregados como parametros.
- https://chopinhauer.herokuapp.com/pservice/deleteToTeam?id={id}&idlist={idlist}
<a name="direcciones/web"></a>
### Aplicacion Web Integrada
- https://chopinhauer-web.herokuapp.com/

<a name="ejecutar"></a>
## 2. Ejecución
### Instalar modulos
```sh
npm install
```

### Iniciar Proyecto local
```sh
npm start
```
