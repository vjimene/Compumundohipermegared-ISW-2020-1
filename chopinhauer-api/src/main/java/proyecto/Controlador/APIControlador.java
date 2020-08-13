package proyecto.Controlador;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET})
@RequestMapping("/")
public class APIControlador {

  @GetMapping("/")
  public String inicio(){
    return "Hola Bienvenid@ a la API de Compumundohipermegared v1.2.9";
  }
  @GetMapping("/pservice")
  public String pserviceInicio(){
    return "Hola Bienvenid@ a la sección Personal de Servicio de Compumundohipermegared";
  }

  @GetMapping("/team")
  public String teamInicio(){
    return "Hola Bienvenid@ a la sección Equipo de Compumundohipermegared";
  }
}
