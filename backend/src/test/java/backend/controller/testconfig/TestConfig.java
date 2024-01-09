package backend.controller.testconfig;

import backend.service.VoteService;
import org.mockito.Mockito;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;

@TestConfiguration
public class TestConfig {

    @Bean
    public VoteService voteService() {
        return Mockito.mock(VoteService.class);
    }
}
