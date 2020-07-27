package proyecto.Controlador;

import java.util.ArrayList;
import java.util.Iterator;
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
	
	@Autowired
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
			throw new Exception("Equipo no encontrado \n");
		}else {
			return equipofound.get();
		}
	}
	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/addToTeam")
	public String addToTeam(@RequestParam(name="id") Integer id, @RequestParam(name="idlist") String[] idList) throws Exception {
		Optional<Equipo> newEquipo =  repo.findById(id);
		
		if (!newEquipo.isPresent()) {
			throw new Exception("Equipo no encontrado \n");
		} else {
			Equipo Equipofound = newEquipo.get();
			
		 	//List<PServicio> newGrupo = new ArrayList<PServicio>();
			List<PServicio> newGrupo = Equipofound.getPersonalEquipo();
		    for(int i=0; i< idList.length; i++) {
		    	Integer idItem = Integer.parseInt(idList[i]);
		    	Optional<PServicio> personalfound = srepo.findById(idItem);
				if (!personalfound.isPresent()) {
					throw new Exception("Personal no encontrado \n");
				}else {
					newGrupo.add(personalfound.get());
				}    	
		    }
		    Equipofound.setPersonalEquipo(newGrupo);
			repo.save(Equipofound);
			return "Updated";
		}
	}
	
	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/deleteToTeam")
	public String deleteToTeam(@RequestParam(name="id") Integer id, @RequestParam(name="idlist") String[] idList) throws Exception {
		Optional<Equipo> newEquipo =  repo.findById(id);
		
		if (!newEquipo.isPresent()) {
			throw new Exception("Equipo no encontrado \n");
		} else {
			
			Equipo Equipofound = newEquipo.get();
			List<PServicio> newGrupo = Equipofound.getPersonalEquipo();
		 	
			
		    for(int i=0; i< idList.length; i++) {
		    	Integer idItem = Integer.parseInt(idList[i]);
		    	Optional<PServicio> personalfound = srepo.findById(idItem);
				if (!personalfound.isPresent()) {
					throw new Exception("Personal no encontrado \n");
				}else {
					//newGrupo.add(personalfound.get());
					//newGrupo.remo
					PServicio pServiceItem = personalfound.get();
					if(newGrupo.contains(pServiceItem)) {
						newGrupo.remove(pServiceItem);						
					}
					
				}    	
		    }
		    
		    Equipofound.setPersonalEquipo(newGrupo);
			repo.save(Equipofound);
			return "Deleted";
		}
	}
	
			
	//eliminar equipo
	@PostMapping("/delete")
	@ResponseStatus(HttpStatus.OK)
	public Integer deletePServicio(@RequestParam(name="id") Integer id) throws Exception {
		Optional<Equipo> newEquipo =  repo.findById(id);
		
		if (!newEquipo.isPresent()) {
			throw new Exception("Equipo no encontrado \n");
		} else {
			//repo.deleteById(id);
			//repo.deleteById(id);
			repo.deleteById(id);
			return null;
		}
	}
		
	//agregar equipo	
	@PostMapping("/add") 
	public @ResponseBody String addNewEquipo (@RequestParam(name="tag") String Tag,
			@RequestParam(name="idlist") String[]  idList) throws Exception {
	    // @ResponseBody means the returned String is the response, not a view name
	    // @RequestParam means it is a parameter from the GET or POST request

	    Equipo newEquipo = new Equipo();
	    newEquipo.setTag(Tag);
	    
	 	List<PServicio> newGrupo = new ArrayList<PServicio>();
	 	
	    for(int i=0; i< idList.length; i++) {
	    	Integer id = Integer.parseInt(idList[i]);
	    	Optional<PServicio> personalfound = srepo.findById(id);
			if (!personalfound.isPresent()) {
				throw new Exception("Personal no encontrado \n");
			}else {
				newGrupo.add(personalfound.get());
			}    	
	    }
	    newEquipo.setPersonalEquipo(newGrupo);
	    
	    repo.save(newEquipo);
	    return "Saved";
	  }
	
}