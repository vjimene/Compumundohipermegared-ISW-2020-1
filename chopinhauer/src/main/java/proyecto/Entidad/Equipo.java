package proyecto.Entidad;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

import proyecto.Entidad.Equipo;

//import org.hibernate.annotations.GenericGenerator;

@Table(name="usuario")
@Entity
public class Equipo implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer idEquipo;
    private String tag;
    @OneToMany()
	private Set<PServicio> personalEquipo;
    
    
    //getters
    public Set<PServicio> getPersonalEquipo() {
		return personalEquipo;
	}
    public String getTag() {
		return tag;
	}
	public Integer getIdEquipo() {
		return idEquipo;
	}
	
	//setter
	
	
	public void setIdEquipo(Integer idEquipo) {
		this.idEquipo = idEquipo;
	}
	
	public void setTag(String tag) {
		this.tag = tag;
	}
	public void setPersonalEquipo(Set<PServicio> personalEquipo) {
		this.personalEquipo = personalEquipo;
	}
	
	
	String noasignado;
    String quimio;
    String pabellon;
    String recuperacion;
    
    
}