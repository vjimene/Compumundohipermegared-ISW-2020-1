package proyecto.Controlador;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import proyecto.Entidad.PServicio;

import proyecto.Repositorio.PServicioRepositorio;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
@RequestMapping("/pservice")
public class PServicioControlador {

	@Autowired
	PServicioRepositorio repo;

	@GetMapping("/all")
	public ResponseEntity<Object> getAllPServicio() {
		Iterable<PServicio> allPServicio = repo.findAll();

		List<PServicio> lista = new ArrayList<PServicio>();
		allPServicio.iterator().forEachRemaining(lista::add);
		if(lista.isEmpty()) {
			//return Collections.emptyList();
			return new ResponseEntity<Object>(
					new EmptyJsonResponse(),
					new HttpHeaders(),
					HttpStatus.NOT_FOUND);

		} else {
			return new ResponseEntity<Object>(
					lista,
					new HttpHeaders(),
					HttpStatus.OK
					);
			//return lista;
		}

	}

	@GetMapping("/byid")
	public ResponseEntity<Object> getByIdPServicio(Integer id) throws Exception {
		Optional<PServicio> pserviciofound = repo.findById(id);
		if (!pserviciofound.isPresent()) {
			//throw new Exception("Personal no encontrado");
			return new ResponseEntity<Object>(
					"Personal no encontrado",
					new HttpHeaders(),
					HttpStatus.NOT_FOUND
					);
		}else {
			return new ResponseEntity<Object>(
					pserviciofound.get(),
					new HttpHeaders(),
					HttpStatus.OK
					);
		}

	}

	//funca mas o menos lindo
	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/update")
	public ResponseEntity<Object> updatePServicio(@RequestBody PServicio upPServicio) throws Exception {

		Optional<PServicio> newPServicio =  repo.findById(upPServicio.getId());

		if (!newPServicio.isPresent()) {
			//throw new Exception("Personal no encontrado");
			return new ResponseEntity<Object>(
					"Personal no encontrado",
					new HttpHeaders(),
					HttpStatus.NOT_FOUND
					);
		}else {

			PServicio PServiciofound = newPServicio.get();
			PServiciofound.setNombres(upPServicio.getNombres());
			PServiciofound.setApellidos(upPServicio.getApellidos() );
			PServiciofound.setRun(upPServicio.getRun());
			PServiciofound.setProfesion(upPServicio.getProfesion());
			PServiciofound.setTelefono(upPServicio.getTelefono());
			PServiciofound.setEmail(upPServicio.getEmail());

			//if(checkUserValid(user)) {
			//	user = repositorio.save(user);
			//}

			repo.save(PServiciofound);
			return new ResponseEntity<Object>(
					PServiciofound,
					new HttpHeaders(),
					HttpStatus.OK
					);
		}
	}

	//funca mas o menos lindo
	@ResponseStatus(HttpStatus.OK)
	@PostMapping(path="/add", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE}) // Map ONLY POST Requests
	  public ResponseEntity<Object> addPServicio(@RequestBody PServicio newPServicio) {
		/*
		PServicio newPServicio = new PServicio();
		newPServicio.setNombres(newPServicio.getNombres());
		newPServicio.setApellidos(newPServicio.getApellidos());
		newPServicio.setRun(newPServicio.getRun());
		newPServicio.setProfesion(newPServicio.getProfesion());
		newPServicio.setTelefono(newPServicio.getTelefono());
		newPServicio.setEmail(newPServicio.getEmail());
		*/
		// validacion de datos
	    repo.save(newPServicio);
	    return new ResponseEntity<Object>(
	    		newPServicio,
				new HttpHeaders(),
				HttpStatus.OK
				);
	  }


	@PostMapping("/delete")
	public ResponseEntity<Object> deletePServicio(Integer id) throws Exception {
		Optional<PServicio> newPServicio =  repo.findById(id);

		if (!newPServicio.isPresent()) {
			//throw new Exception("Personal no encontrado");
			return new ResponseEntity<Object>(
					"Personal no encontrado",
					new HttpHeaders(),
					HttpStatus.NOT_FOUND
					);
		} else {
			PServicio pservicioDeleted = newPServicio.get();

			repo.deleteById(id);
			return new ResponseEntity<Object>(
		    		"Personal de servicio llamad@ "+ pservicioDeleted.getNombres() +"fué eliminado ",
					new HttpHeaders(),
					HttpStatus.OK
					);
		}
	}



	@JsonSerialize
	public class EmptyJsonResponse { }

}
