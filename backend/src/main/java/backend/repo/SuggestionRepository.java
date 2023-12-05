package backend.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import backend.model.Suggestion;

public interface SuggestionRepository extends JpaRepository<Suggestion, Long> {
    public List<Suggestion> findAll();

    public Suggestion findSuggestionById(long id);

    public Suggestion findSuggestionByTitle(String title);

    boolean existsByTitle(String title);

}
