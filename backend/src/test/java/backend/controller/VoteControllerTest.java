package backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import backend.model.Vote;
import backend.service.VoteService;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.anyBoolean;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc

public class VoteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private VoteService voteService;

    private VoteController voteController;
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testGetAllVotes() throws Exception {
        // Mocking behavior
        List<Vote> mockVotes = new ArrayList<Vote>();
        mockVotes.add(new Vote(1L, "MockVote", "mock_pic_url", "Mock description", 0, false));
        mockVotes.add(new Vote(2L, "MockVote2", "mock_pic_url2", "Mock description2", 1, false));

        when(voteService.getAllVotes()).thenReturn(mockVotes);

        mockMvc.perform(get("/api/voteEase/votes")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
        // Add more assertions as needed
    }

    @Test
    public void testAddVote() throws Exception {
        // Mocking behavior

        mockMvc.perform(post("/api/voteEase/votes")
                .content(objectMapper
                        .writeValueAsString(new Vote(1L, "MockVote", "mock_pic_url", "Mock description", 0, false)))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
        // Add more assertions as needed
    }

    @Test
    public void testGetVotesByVoteable() throws Exception {
        // Mocking behavior
        when(voteService.getVoteByVoteable(anyBoolean())).thenReturn(List.of(/* mock votes */));

        mockMvc.perform(get("/api/voteEase/votes/voteable/true")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
        // Add more assertions as needed
    }

}
