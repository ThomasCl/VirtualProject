package backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import backend.model.Suggestion;

import backend.service.SuggestionService;

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
    public void addSuggestion(@RequestBody Suggestion suggestion) {
        suggestionService.addSuggestion(suggestion);
    }

    // other

    @PostMapping("/approve-or-deny/{id}")
    public void approveOrDenySuggestion(@PathVariable long id, @RequestParam("approve") boolean approve) {
        suggestionService.approveOrDenySuggestion(id, approve);
    }
}
