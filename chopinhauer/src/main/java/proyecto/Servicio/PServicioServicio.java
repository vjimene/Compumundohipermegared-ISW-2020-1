package proyecto.Servicio;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proyecto.Entidad.PServicio;
import proyecto.Repositorio.PServicioRepositorio;

@Service
public class PServicioServicio {
	
	@Autowired
	PServicioRepositorio repositorio;

	public Iterable<PServicio> getAllUsers() {
		return repositorio.findAll();
		//return repositorio.findAlByRol();
	}
	

	
}
