package backend.service;

import backend.model.User;
import backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User saveUser(User user) {
        if (user == null || user.getEmail() == null || user.getPassword() == null || user.getFirst_name() == null
                || user.getLast_name() == null) {
            throw new IllegalArgumentException("Invalid user data");
        }

        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User loginUser(String email, String password) {
        if (email == null || password == null) {
            throw new IllegalArgumentException("Invalid user data");
        }

        User user = userRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        } else {
            throw new IllegalArgumentException("Invalid user data");
        }
    }

}