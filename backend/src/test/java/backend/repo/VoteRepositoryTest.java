// package backend.repo;

// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
// import org.springframework.test.annotation.DirtiesContext;

// import backend.model.Vote;

// import java.util.List;
// import static org.junit.jupiter.api.Assertions.*;

// @DataJpaTest
// @DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
// public class VoteRepositoryTest {

// @Autowired
// private VoteRepository voteRepository;

// @Test
// public void testFindAll() {
// // Save test data to the in-memory database
// voteRepository.saveAll(List.of(/* test votes */));

// List<Vote> votes = voteRepository.findAll();

// // Assertions
// assertNotNull(votes);
// // Add more assertions as needed
// }

// // Similar tests for other repository methods
// }
