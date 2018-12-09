package com.portal.onlineexaminationportal.controller;

import com.portal.onlineexaminationportal.model.User;
import com.portal.onlineexaminationportal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(value = "/users")

public class UserController {
    @Autowired(required = true)
    private UserRepository repository;

    @GetMapping(value="/allUsers")
    @CrossOrigin(origins = "http://localhost:4200")
    public Iterable<User> getAllUsers()
    {
        return repository.findAll();
    }

    @GetMapping(value = "/{uname}")
    @CrossOrigin(origins = "http://localhost:4200")
    public User getUserByEmail(@PathVariable String uname)
    {
        return repository.findByUname(uname);
    }

    @PostMapping(value = "/register")
    @CrossOrigin(origins = "http://localhost:4200")
    public User createUser(@RequestBody Map<String, String> body)
    {
        String uname = body.get("uname");
        String email = body.get("email");
        String pass  = body.get("pass");
        String passC = body.get("passC");
        return repository.save(new User(uname, email, pass, passC));
    }


}
