package backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.model.Vote;
import backend.repo.VoteRepository;

@Service
public class VoteService {
    @Autowired
    private VoteRepository voteRepository;

    public List<Vote> getAllVotes() {
        return voteRepository.findAll();
    }

    public Vote getVoteById(long id) {
        return voteRepository.findHouseById(id);
    }

    public void addVote(Vote vote) {
        voteRepository.save(vote);
    }

    // Add other methods as needed for specific operations on votes

    // For example:
    public List<Vote> getVoteByVoteable(boolean voteable) {
        return voteRepository.findByVoteable(voteable);
    }
}
