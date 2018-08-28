package io.github.yuokada.swagger.demoapi.controllers;

import io.github.yuokada.swagger.demoapi.model.User;
import io.github.yuokada.swagger.demoapi.services.UserService;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(UserControler.BASE_URL)
public class UserControler {

    public static final String BASE_URL = "/api/user";

    private UserService userService;

    @Autowired
    public UserControler(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public static ArrayList<User> getUsers(){
        return new ArrayList<User>() {
        };
    }

    @GetMapping("{name}")
    public User getUser(@PathVariable String name){
        User user = new User();
        user.setUsername(name + "_full");
        user.setId((long) 100);
        user.setUserStatus(4649);
        System.out.println(Integer.MAX_VALUE);
        return user;
    }
}
