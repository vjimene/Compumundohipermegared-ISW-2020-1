package proyecto.Controlador;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	public ResponseEntity getAllPServicio() {
		Iterable<PServicio> allPServicio = repo.findAll();
		
		List<PServicio> lista = new ArrayList<PServicio>(); 
		allPServicio.iterator().forEachRemaining(lista::add);
		if(lista.isEmpty()) {
			//return Collections.emptyList();
			return new ResponseEntity(new EmptyJsonResponse(), HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity(lista, HttpStatus.OK);
			//return lista;
		}
		
	}
	
	@GetMapping("/byid") 
	public PServicio getByIdPServicio(Integer id) throws Exception {
		System.out.print("HOLAAAA \n");
		System.out.print(id);
		Optional<PServicio> pserviciofound = repo.findById(id);
		if (!pserviciofound.isPresent()) {
			throw new Exception("Personal no encontrado");
		}else {
			return pserviciofound.get();
		}
		
	}
	
	//funca mas o menos lindo
	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/update")
	public Integer updatePServicio(@RequestParam(name="id") Integer id,
			@RequestParam(name="nombre") String nombre, 
		    @RequestParam(name="apellido") String apellido,
		    @RequestParam(name="run") Integer run,
		    @RequestParam(name="profesion") String profesion,
		    @RequestParam(name="telefono") Integer telefono, 
		    @RequestParam(name="email") String email) throws Exception {
		
		Optional<PServicio> newPServicio =  repo.findById(id);
		
		if (!newPServicio.isPresent()) {
			throw new Exception("Personal no encontrado");
		}else {
			
			PServicio PServiciofound = newPServicio.get();
			PServiciofound.setNombres(nombre);
			PServiciofound.setApellidos(apellido );
			PServiciofound.setRUN(run);
			PServiciofound.setProfesion(profesion);
			PServiciofound.setTelefono(telefono);
			PServiciofound.setEmail(email);
			
			//if(checkUserValid(user)) {
			//	user = repositorio.save(user);
			//}
			
			repo.save(PServiciofound);
			
			return null;
		}
	}
	
	//funca mas o menos lindo
	@ResponseStatus(HttpStatus.OK)
	@PostMapping(path="/add") // Map ONLY POST Requests
	  public @ResponseBody PServicio addPServicio(@RequestParam(name="nombre") String nombre, 
	      @RequestParam(name="apellido") String apellido,
	      @RequestParam(name="run") Integer run,
	      @RequestParam(name="profesion") String profesion,
	      @RequestParam(name="telefono") Integer telefono, 
	      @RequestParam(name="email") String email) {
		
		PServicio newPServicio = new PServicio();
		newPServicio.setNombres(nombre);
		newPServicio.setApellidos(apellido);
		newPServicio.setRUN(run);
		newPServicio.setProfesion(profesion);
		newPServicio.setTelefono(telefono);
		newPServicio.setEmail(email);
		
	    repo.save(newPServicio);
	    return newPServicio;
	  }
	
	
	@PostMapping("/delete")
	public Integer deletePServicio(Integer id) throws Exception {
		Optional<PServicio> newPServicio =  repo.findById(id);
		
		if (!newPServicio.isPresent()) {
			throw new Exception("Personal no encontrado");
		} else {
			repo.deleteById(id);
			return null;
		}
	}
	
	

	@JsonSerialize
	public class EmptyJsonResponse { }
	
}