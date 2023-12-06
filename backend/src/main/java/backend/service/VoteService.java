package backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.model.Vote;
import backend.repo.VoteRepository;

@Service
public class VoteService {
    @Autowired
    private VoteRepository voteRepository;

    @Autowired
    private UserService userService;

    public List<Vote> getAllVotes() {
        return voteRepository.findAll();
    }

    public Vote getVoteById(long id) {
        return voteRepository.findVoteById(id);
    }

    public void addVote(Vote vote) {
        voteRepository.save(vote);
    }

    // Add other methods as needed for specific operations on votes

    // For example:
    public List<Vote> getVoteByVoteable(boolean voteable) {
        return voteRepository.findByVoteable(voteable);
    }

    public Vote voteOnVoteable(long id, long userid) {
        Vote vote = voteRepository.findVoteById(id);
        if (vote != null) {
            if (vote.getVoteable() && userService.canVote(userid)) {
                // Increase the amount_of_votes by one
                System.out.println("test test");
                vote.setAmount_of_votes(vote.getAmount_of_votes() + 1);
                voteRepository.save(vote);
                userService.userVoted(userid);
                return vote; // Vote successfully incremented
            }
        }
        return null; // Vote not found or not voteable
    }

    public Map<String, Integer> voteOnPreliminaries(List<Integer> ids) {
        // Implement your logic to vote on multiple non-voteable items here
        // The map should contain the item IDs and the corresponding votes recorded

        Map<String, Integer> results = new HashMap<>();
        for (int id : ids) {
            // Your logic to record votes for each item goes here
            // For example:
            Vote vote = addAVote(id);

            results.put(vote.getName(), vote.getAmount_of_votes());
        }

        return results;
    }

    public List<Vote> turnTopIntoVoteable(int x) {
        List<Vote> topXNonVoteables = voteRepository.findTopXNonVoteables(x);
        deleteOldVotes();
        topXNonVoteables.forEach(vote -> {
            // Set voteable to true
            vote.setVoteable(true);
            // Reset amount_of_votes for the newly voteable items
            vote.setAmount_of_votes(0);
        });
        voteRepository.saveAll(topXNonVoteables);
        return topXNonVoteables;
    }

    public Vote addAVote(int id) {
        Vote vote = getVoteById(id);
        vote.setAmount_of_votes(vote.getAmount_of_votes() + 1);
        return vote;
    }

    public List<Vote> deleteOldVotes() {
        List<Vote> oldvotes = getVoteByVoteable(true);
        for (Vote oldvote : oldvotes) {
            deleteVote(oldvote);
        }
        return oldvotes;
    }

    private Vote deleteVote(Vote vote) {
        voteRepository.delete(vote);
        return vote;
    }
}
