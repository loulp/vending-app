package llp.cour.appback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PubliciteService {

    public String getPubliciteFromBoisson(final String boisson) {
      
      if (boisson.equals("chocolat")) {
        return "https://www.justeatemps.com/statique/images/front//img/Products/large/10695.jpg";
      } else {
        return "https://www.cafebonmarche.fr/media/catalog/product/c/w/cw221409m_senseo_cafe_latte_pads_8st-1_new.png";
      }
    }

}