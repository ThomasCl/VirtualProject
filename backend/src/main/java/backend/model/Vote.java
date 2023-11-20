package backend.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "votes", schema = "public")
public class Vote {
    @Id
    private Long id;
    private String name;
    private String pics;
    private String description;
    private int amount_of_votes; // could both be used to make it voteable (if voteable is false) and have it be
                                 // chosen (if voteable is true)
    private boolean voteable; // if true, this is 1 of the choices you can vote on

    public Vote() {
    }

    public Vote(Long id, String name, String pics, String description, int amount_of_votes, boolean voteable) {
        this.id = id;
        this.name = name;
        this.pics = pics;
        this.description = description;
        this.amount_of_votes = amount_of_votes;
        this.voteable = voteable;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPics() {
        return pics;
    }

    public String getDescription() {
        return description;
    }

    public int getAmount_of_votes() {
        return amount_of_votes;
    }

    public Boolean getVoteable() {
        return voteable;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPics(String pics) {
        this.pics = pics;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setAmount_of_votes(int amount_of_votes) {
        this.amount_of_votes = amount_of_votes;
    }

    public void setVoteable(Boolean voteable) {
        this.voteable = voteable;
    }
}
