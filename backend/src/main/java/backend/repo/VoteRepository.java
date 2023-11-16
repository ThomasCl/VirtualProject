package backend.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import backend.model.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    public List<Vote> findAll();

    public Vote findHouseById(long id);

    public List<Vote> findByVoteable(boolean voteable);
}
