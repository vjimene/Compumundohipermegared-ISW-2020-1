package proyecto.Controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import proyecto.Entidad.PServicio;

import proyecto.Repositorio.PServicioRepositorio;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
@RequestMapping("/pservice") 
public class PServicioControlador {

	@Autowired
	PServicioRepositorio repo;
	
	@GetMapping("/all")
	public PServicio getAllPServicio() {
		return (PServicio) repo.findAll();
	}
	
	@GetMapping("/byid")
	public PServicio getByIdPServicio(Integer id) throws Exception {
		Optional<PServicio> pserviciofound = repo.findById(id);
		if (!pserviciofound.isPresent()) {
			throw new Exception("Personal no encontrado");
		}else {
			return pserviciofound.get();
		}
		
	}
	
	//actualizar personal
	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/update")
	public Integer updatePServicio(PServicio pservicioupdate ) throws Exception {
		
		Optional<PServicio> newPServicio =  repo.findById(pservicioupdate.getId());
		
		if (!newPServicio.isPresent()) {
			throw new Exception("Cosa no encontrado");
		}else {
			
			PServicio PServiciofound = newPServicio.get();
			PServiciofound.setNombres(pservicioupdate.getNombres());
			PServiciofound.setApellidos( pservicioupdate.getApellidos() );
			PServiciofound.setEmail(pservicioupdate.getEmail());
			PServiciofound.setProfesion(pservicioupdate.getProfesion());
			PServiciofound.setRUN(pservicioupdate.getRUN());
			PServiciofound.setTelefono(pservicioupdate.getTelefono());
			
			//if(checkUserValid(user)) {
			//	user = repositorio.save(user);
			//}
			
			repo.save(PServiciofound);
			
			return null;
		}
	}
	
	@ResponseStatus(HttpStatus.OK)
	@PostMapping(path="/add") // Map ONLY POST Requests
	  public @ResponseBody PServicio addPServicio(@RequestParam String nombre, 
	      @RequestParam String apellido,
	      @RequestParam Integer run,
	      @RequestParam String profesion,
	      @RequestParam Integer telefono, 
	      @RequestParam String email) {
		
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
	
	
	//nombre=Juanito&apellido=JuanJarry&run=123123123&profesion=Directortecnico31min&telefono=666&email=juan@email.com
	
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
	
	@PostMapping("/deleteall")
	public Integer deleteAllPServicio(Integer id) throws Exception {
		Optional<PServicio> newPServicio =  repo.findById(id);
		
		if (!newPServicio.isPresent()) {
			throw new Exception("Personal no encontrado");
		} else {
			repo.deleteById(id);
			return null;
		}
	}
	
	
	

	
	
}