package backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "suggestions", schema = "public")
public class Suggestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String pics;
    private String description;

    public Suggestion() {
    }

    public Suggestion(Long id, String title, String description, String pics) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.pics = pics;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPics() {
        return pics;
    }

    public String getDescription() {
        return description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPics(String pics) {
        this.pics = pics;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
