package proyecto.Repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import proyecto.Entidad.PServicio;

@Repository
public interface PServicioRepositorio extends CrudRepository<PServicio,Integer>{
	
	public Optional<PServicio> findById(Long idList);
	
	public void  deleteById(Integer id);
	
	public Iterable<PServicio> findAll();
	
	//public List<Usuario> findAlByRol(String rol);
	
	//public Optional<Usuario> findByUsername(String username);

	//public Optional<PServicio> findByEmail(String email);
	
	
}
