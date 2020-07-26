package proyecto.Controlador;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import proyecto.Entidad.Equipo;
import proyecto.Entidad.PServicio;
import proyecto.Repositorio.EquipoRepositorio;
import proyecto.Repositorio.PServicioRepositorio;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
@RequestMapping("/team") 
public class EquipoControlador {
	
	@Autowired
	EquipoRepositorio repo;
	PServicioRepositorio srepo;
	
	//obtener todos los equipos 
	@GetMapping("/all")
	public List<Equipo> getAllEquipo() {
		return (List<Equipo>) repo.findAll();
	}
	
	//obtener equipo por id
	@GetMapping("/byid")
	public Equipo getByIdEquipo(@RequestParam(name="id") Integer id) throws Exception {
		Optional<Equipo> equipofound = repo.findById(id);
		if (!equipofound.isPresent()) {
			throw new Exception("Equipo no encontrado");
		}else {
			return equipofound.get();
		}
	}
	
	//actualizar Equipo
	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/update")
	public Integer updatePServicio(@RequestBody Equipo equipoupdate) throws Exception {
		
		Optional<Equipo> newEquipo =  repo.findById(equipoupdate.getId());
		
		if (!newEquipo.isPresent()) {
			throw new Exception("Equipo no encontrado");
		}else {
			
			Equipo Equipofound = newEquipo.get();
			Equipofound.setTag(equipoupdate.getTag());
			Equipofound.setPersonalEquipo(equipoupdate.getPersonalEquipo());
			
			repo.save(Equipofound);
			
			return null;
		}
	}
		
	//eliminar equipo
	@PostMapping("/delete")
	@ResponseStatus(HttpStatus.OK)
	public Integer deletePServicio(@RequestParam(name="id") Integer id) throws Exception {
		Optional<Equipo> newEquipo =  repo.findById(id);
		
		if (!newEquipo.isPresent()) {
			throw new Exception("Equipo no encontrado");
		} else {
			//repo.deleteById(id);
			repo.deleteById(id);
			return null;
		}
	}
		
	//agregar equipo	
	@PostMapping("/add") 
	public @ResponseBody String addNewEquipo (@RequestParam(name="tag") String Tag,
			@RequestParam(name="idlist") Long[]  idList) throws Exception {
	    // @ResponseBody means the returned String is the response, not a view name
	    // @RequestParam means it is a parameter from the GET or POST request

	    Equipo newEquipo = new Equipo();
	    newEquipo.setTag(Tag);
	    
	 	Set<PServicio> newGrupo = null;
	 	
	    for(int i=0; i< idList.length; i++) {
	    	Optional<PServicio> personalfound = srepo.findById(idList[i]);;
			if (!personalfound.isPresent()) {
				throw new Exception("Personal no encontrado");
			}else {
				newGrupo.add(personalfound.get());
			}    	
	    }
	    newEquipo.setPersonalEquipo(newGrupo);
	    
	    repo.save(newEquipo);
	    return "Saved";
	  }
	
}