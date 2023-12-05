package backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.model.Suggestion;
import backend.model.Vote;
import backend.repo.SuggestionRepository;

@Service
public class SuggestionService {

    @Autowired
    private SuggestionRepository suggestionRepository;
    @Autowired
    private VoteService voteService;

    public List<Suggestion> getAllSuggestions() {
        return suggestionRepository.findAll();
    }

    public Suggestion getSuggestionById(long id) {
        return suggestionRepository.findSuggestionById(id);
    }

    public Suggestion getSuggestionByTitle(String title) {
        return suggestionRepository.findSuggestionByTitle(title);
    }

    public Suggestion addSuggestion(Suggestion suggestion) {
        if (suggestion == null || suggestion.getTitle() == null || suggestion.getDescription() == null) {
            throw new IllegalArgumentException("Invalid suggestion data");
        }
        if (suggestionRepository.existsByTitle(suggestion.getTitle())) {
            throw new IllegalStateException("A suggestion with the same title already exists");
        }
        suggestionRepository.save(suggestion);
        return suggestionRepository.findSuggestionById(suggestion.getId());
    }

    // other

    public String approveOrDenySuggestion(String title, boolean approve) {
        Suggestion suggestion = getSuggestionByTitle(title);
        System.out.println(suggestion);
        if (approve) {
            // If approved, you might want to create a new Vote based on the suggestion
            Vote vote = new Vote();
            vote.setName(suggestion.getTitle());
            vote.setPics(suggestion.getPics());
            vote.setDescription(suggestion.getDescription());
            vote.setAmount_of_votes(0);
            vote.setVoteable(false);
            System.out.println(vote);
            // Save the new Vote
            voteService.addVote(vote);
            suggestionRepository.delete(suggestion);
            return (suggestion.getTitle() + " approved");
        } else {
            suggestionRepository.delete(suggestion);
            return (suggestion.getTitle() + " denied");
        }
    }

}
