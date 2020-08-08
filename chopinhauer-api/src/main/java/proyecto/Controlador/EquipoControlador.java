package proyecto.Controlador;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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
	public ResponseEntity<Object> getAllEquipo() {
		List<Equipo> lista = (List<Equipo>) repo.findAll();
		if (lista.isEmpty()) {
			return new ResponseEntity<Object>(
					"No se encuentran equipos.",
					new HttpHeaders(),
					HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<Object>(
					//(List<Equipo>) repo.findAll(),
					lista,
					new HttpHeaders(),
					HttpStatus.OK);
		}
	}
	
	//obtener equipo por id
	@GetMapping("/byid")
	public ResponseEntity<Object> getByIdEquipo(@RequestParam(name="id") Integer id) throws Exception {
		Optional<Equipo> equipofound = repo.findById(id);
		if (!equipofound.isPresent()) {
			//throw new Exception("Equipo no encontrado \n");
			return new ResponseEntity<Object>(
					"Equipo no encontrado",
					new HttpHeaders(),
					HttpStatus.NOT_FOUND );
		} else {
			return new ResponseEntity<Object>(
					equipofound.get(),
					new HttpHeaders(),
					HttpStatus.OK );
		} 
		
	}
	
	@PostMapping("/addToTeam")
	public ResponseEntity<Object> addToTeam(@RequestParam(name="id") Integer id, @RequestParam(name="idlist") String[] idList) throws Exception {
		Optional<Equipo> newEquipo =  repo.findById(id);
		
		if (!newEquipo.isPresent()) {
			//throw new Exception("Equipo no encontrado \n");
			return new ResponseEntity<Object>(
					"Equipo ya se encuentra",
					new HttpHeaders(),
					HttpStatus.NOT_ACCEPTABLE );
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
			return new ResponseEntity<Object>(
					Equipofound,
					new HttpHeaders(),
					HttpStatus.OK
					);
		}
	}
	
	@ResponseStatus(HttpStatus.OK)
	@PostMapping("/deleteToTeam")
	public ResponseEntity<Object> deleteToTeam(@RequestParam(name="id") Integer id, @RequestParam(name="idlist") String[] idList) throws Exception {
		Optional<Equipo> newEquipo =  repo.findById(id);
		
		if (!newEquipo.isPresent()) {
			//throw new Exception("Equipo no encontrado \n");
			return new ResponseEntity<Object>(
					"Equipo no se encuentra",
					new HttpHeaders(),
					HttpStatus.NOT_FOUND );
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
			return new ResponseEntity<Object>(
					Equipofound,
					new HttpHeaders(),
					HttpStatus.OK
					);
		}
	}
	
			
	//eliminar equipo
	@PostMapping("/deleteTeam")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Object> deletePServicio(@RequestParam(name="id") Integer id) throws Exception {
		Optional<Equipo> newEquipo =  repo.findById(id);
		
		if (!newEquipo.isPresent()) {
			//throw new Exception("Equipo no encontrado \n");
			return new ResponseEntity<Object>(
					"Equipo no encontrado",
					new HttpHeaders(),
					HttpStatus.NOT_FOUND );
		} else {
			//repo.deleteById(id);
			//repo.deleteById(id);
			repo.deleteById(id);
			return new ResponseEntity<Object>(
					"Team " + id + " eliminado",
					new HttpHeaders(),
					HttpStatus.OK
					);
		}
		
	}
		
	//agregar equipo	
	@PostMapping("/add") 
	public ResponseEntity<Object> addNewEquipo (@RequestParam(name="tag") String Tag,
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
				//throw new Exception("Personal no encontrado \n");
				return new ResponseEntity<Object>(
						"Personal no encontrado",
						new HttpHeaders(),
						HttpStatus.NOT_FOUND );
			}else {
				newGrupo.add(personalfound.get());
			}    	
	    }
	    newEquipo.setPersonalEquipo(newGrupo);
	    
	    repo.save(newEquipo);
	    return new ResponseEntity<Object>(
				newEquipo,
				new HttpHeaders(),
				HttpStatus.OK
				);
	  }
	
}