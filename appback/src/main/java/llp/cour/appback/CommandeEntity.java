package llp.cour.appback;

import javax.persistence.*;

@Entity
@Table(name = "commandes")
public class CommandeEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @Column(name = "boisson")
    private String boisson;

    @Column(name = "sucre")
    private Boolean sucre;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBoisson() {
        return boisson;
    }

    public void setBoisson(String boisson) {
        this.boisson = boisson;
    }

    public Boolean getSucre() {
        return sucre;
    }

    public void setSucre(Boolean sucre) {
        this.sucre = sucre;
    }
}
