package proyecto.Repositorio;

import java.util.Optional;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import proyecto.Entidad.PServicio;

@Repository
public interface PServicioRepositorio extends CrudRepository<PServicio,Long>{
	
	//public List<Usuario> findAlByRol(String rol);
	
	//public Optional<Usuario> findByUsername(String username);

	//public Optional<PServicio> findByEmail(String email);
	
}
