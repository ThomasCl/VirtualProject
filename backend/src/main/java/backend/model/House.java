package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "woning", schema = "groep-2-woonanker")
public class House {
    @Id
    private Long id;
    private float huurprijs;
    private Integer slaapkamers;
    private float grootte;
    private String link;
    private String adres;
    private String foto;
    private String datum;
    private String type;

    public House() {
    }

    public House(Long id, float huurprijs, Integer slaapkamers, float grootte, String link, String adres, String foto,
            String datum, String type) {
        this.id = id;
        this.huurprijs = huurprijs;
        this.slaapkamers = slaapkamers;
        this.grootte = grootte;
        this.link = link;
        this.adres = adres;
        this.foto = foto;
        this.datum = datum;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public float getHuurprijs() {
        return huurprijs;
    }

    public Integer getSlaapkamers() {
        return slaapkamers;
    }

    public float getGrootte() {
        return grootte;
    }

    public String getLink() {
        return link;
    }

    public String getAdres() {
        return adres;
    }

    public String getFoto() {
        return foto;
    }

    public String getDatum() {
        return datum;
    }

    public String getType() {
        return type;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setHuurprijs(float huurprijs) {
        this.huurprijs = huurprijs;
    }

    public void setSlaapkamers(int slaapkamers) {
        this.slaapkamers = slaapkamers;
    }

    public void setGrootte(float grootte) {
        this.grootte = grootte;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setAdres(String adres) {
        this.adres = adres;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    public void setType(String type) {
        this.type = type;
    }
}
