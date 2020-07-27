package proyecto.Entidad;

import java.io.Serializable;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

//import org.hibernate.annotations.GenericGenerator;

@Table(name="pservice")
@Entity
public class PServicio implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer id;
    private String nombres, apellidos;
    Integer RUN;
    private String profesion;
    private Integer telefono;
    private String email;
    
    public Integer getId() {
        return id;
    }
    public String getNombres() {
        return nombres;
    }
    
    public String getApellidos() {
		return apellidos;
	}
	
	public Integer getRUN() {
        return RUN;
    }
    public String getProfesion() {
        return profesion;
    }
    public Integer getTelefono() {
        return telefono;
    }
    public String getEmail() {
        return email;
    }
    
    
    public void setId(Integer id) {
        this.id = id;
    }
    public void setNombres(String nombres) {
    	this.nombres = nombres;
    }
    public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
    public void setRUN(Integer rUN) {
        RUN = rUN;
    }
    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }
    public void setTelefono(Integer telefono) {
        this.telefono = telefono;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}