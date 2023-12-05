package backend.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import backend.model.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    public List<Vote> findAll();

    public Vote findVoteById(long id);

    public Vote findVoteByName(String name);

    public List<Vote> findByVoteable(boolean voteable);

    @Query(value = "SELECT * FROM public.votes v WHERE v.voteable = false ORDER BY v.amount_of_votes DESC FETCH FIRST :x rows only", nativeQuery = true)
    public List<Vote> findTopXNonVoteables(@Param("x") int x);
}
