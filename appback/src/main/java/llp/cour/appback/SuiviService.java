package llp.cour.appback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SuiviService {

    @Autowired
    public CommandeRepository commandeRepository;

    public void saveCommande(Commande cmd) {

        CommandeEntity cmdEntity = new CommandeEntity();
        cmdEntity.setBoisson(cmd.getBoisson());
        cmdEntity.setSucre(cmd.getSucre());

        commandeRepository.save(cmdEntity);
    }
}