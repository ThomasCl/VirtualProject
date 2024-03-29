package backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import backend.model.Suggestion;

import backend.service.SuggestionService;

@CrossOrigin(origins = { "http://localhost:3000", "https://ivp.digitalpixel.pt", "https://development.65.co.ucll.cloud",
        "https://virtual.65.co.ucll.cloud", "https://qa.65.co.ucll.cloud" })
@RestController
@RequestMapping("api/voteEase")
public class SuggestionController {

    @Autowired
    private SuggestionService suggestionService;

    @GetMapping("/suggestions")
    public List<Suggestion> getAllSuggestions() {
        return suggestionService.getAllSuggestions();
    }

    @GetMapping("/suggestions/{id}")
    public Suggestion getSuggestionById(@PathVariable long id) {
        return suggestionService.getSuggestionById(id);
    }

    @PostMapping("/suggestions/addSuggestion")
    public Suggestion addSuggestion(@RequestBody Suggestion suggestion) {
        System.out.println("Received suggestion: " + suggestion);

        return suggestionService.addSuggestion(suggestion);
    }

    // other

    @PostMapping("/approve-or-deny/{title}/{approve}")
    public String approveOrDenySuggestion(@PathVariable String title, @PathVariable boolean approve) {
        return suggestionService.approveOrDenySuggestion(title, approve);
    }
}
