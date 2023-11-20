package backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/voteVoteable/{id}")
    public ResponseEntity<String> voteOnVoteable(@PathVariable Long id) {
        boolean success = voteService.voteOnVoteable(id);

        if (success) {
            return ResponseEntity.ok("Vote recorded successfully for item " + id);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to record vote for item " + id);
        }
    }

    @PostMapping("/votePreliminaries")
    public ResponseEntity<String> voteOnPreliminaries(@RequestBody List<Integer> ids) {
        Map<String, Integer> results = voteService.voteOnPreliminaries(ids);

        if (results != null) {
            return ResponseEntity.ok("Votes recorded successfully for items " + ids);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to record votes for preliminary items");
        }
    }

    @PostMapping("/turnTopIntoVoteable")
    public ResponseEntity<String> turnTopIntoVoteable(@RequestBody int amount) {
        List<Vote> newVotes = voteService.turnTopIntoVoteable(amount);

        if (!newVotes.isEmpty()) {
            return ResponseEntity.ok("Top " + amount + " non-voteable items turned into voteable");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to turn top non-voteable items into voteable");
        }
    }
}