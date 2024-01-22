package backend.controller;

import backend.model.User;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "https://ivp.digitalpixel.pt", "https://development.65.co.ucll.cloud",
        "https://virtual.65.co.ucll.cloud", "https://qa.65.co.ucll.cloud" })
@RestController
@RequestMapping("api/voteEase")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        System.out.println(user);
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        return userService.loginUser(user.getEmail(), user.getPassword());
    }

}