package proyecto.Controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import proyecto.Entidad.Equipo;
import proyecto.Repositorio.EquipoRepositorio;

@RequestMapping(path="/equipo") 
@Controller
public class EquipoControlador {

	EquipoRepositorio repo;
	
	@GetMapping("/all")
	public List<Equipo> getAllEquipo() {
		return (List<Equipo>) repo.findAll();
	}

	@PostMapping("/add")
	
	
	
	
}