package backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import backend.model.Vote;
import backend.service.VoteService;

@RestController
@RequestMapping("api/voteEase")
public class VoteController {

    @Autowired
    private VoteService voteService;

    @GetMapping("/votes")
    public List<Vote> getAllVotes() {
        return voteService.getAllVotes();
    }

    @GetMapping("/votes/{id}")
    public Vote getVoteById(@PathVariable long id) {
        return voteService.getVoteById(id);
    }

    @PostMapping("/votes")
    public void addVote(@RequestBody Vote vote) {
        voteService.addVote(vote);
    }

    // Add other methods as needed for specific operations on votes

    // For example:
    @GetMapping("/votes/voteable/{voteable}")
    public List<Vote> getVotesByVoteable(@PathVariable boolean voteable) {
        return voteService.getVoteByVoteable(voteable);
    }
}
