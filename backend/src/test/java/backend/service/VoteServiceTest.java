// package backend.service;

// import org.junit.jupiter.api.Test;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.springframework.boot.test.context.SpringBootTest;

// import backend.model.Vote;
// import backend.repo.VoteRepository;

// import java.util.List;
// import static org.mockito.Mockito.*;
// import static org.junit.jupiter.api.Assertions.*;

// @SpringBootTest
// public class VoteServiceTest {

// @Mock
// private VoteRepository voteRepository;

// @InjectMocks
// private VoteService voteService;

// @Test
// public void testGetAllVotes() {
// // Mocking behavior
// when(voteRepository.findAll()).thenReturn(List.of(/* mock votes */));

// List<Vote> votes = voteService.getAllVotes();

// // Assertions
// assertNotNull(votes);
// // Add more assertions as needed
// }

// // Similar tests for other service methods
// }
