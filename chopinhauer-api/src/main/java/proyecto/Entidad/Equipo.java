package proyecto.Entidad;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

import proyecto.Entidad.Equipo;

//import org.hibernate.annotations.GenericGenerator;

@Table(name="team")
@Entity
public class Equipo implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String tag;
    @OneToMany()
	private List<PServicio> pserviceteam;
    
    
    //getters
    public List<PServicio> getPersonalEquipo() {
		return pserviceteam;
	}
    public String getTag() {
		return tag;
	}
	public Integer getId() {
		return id;
	}
	
	//setter
	
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public void setTag(String tag) {
		this.tag = tag;
	}
	public void setPersonalEquipo(List<PServicio> personalEquipo) {
		this.pserviceteam = personalEquipo;
	}
	
	
	//String noasignado;
    //String quimio;
	//String pabellon;
    //String recuperacion;
    
    
}