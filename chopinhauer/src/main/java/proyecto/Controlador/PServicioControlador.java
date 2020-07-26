package proyecto.Controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import proyecto.Entidad.PServicio;
import proyecto.Repositorio.PServicioRepositorio;

@RequestMapping(path="/pservicio") 
@Controller
public class PServicioControlador {

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
	
	@PostMapping("/add")
	public Integer addPServicio(PServicio pservicioadd) {
		
		
		return null;
		
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
	
	@PostMapping("/deleteall")
	public Integer deleteAllPServicio(Integer id) throws Exception {
		Optional<PServicio> newPServicio =  repo.findByIdQuimio(id);
		
		if (!newPServicio.isPresent()) {
			throw new Exception("Personal no encontrado");
		} else {
			repo.deleteById(id);
			return null;
		}
	}
	
	
	

	
	
}