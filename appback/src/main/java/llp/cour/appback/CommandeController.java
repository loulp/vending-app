package llp.cour.appback;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CommandeController {

    @Autowired
    private SuiviService suiviService;


    @PostMapping(path="/commande")
    public void saveCommande(@RequestBody Commande cmd) {
        suiviService.saveCommande(cmd);
    }


}
