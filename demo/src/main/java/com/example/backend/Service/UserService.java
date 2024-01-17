package com.example.backend.Service;

import com.example.backend.Entity.User;
import com.example.backend.Repo.UserRepo;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepo userRepo;
    public User findUserById(String s){
        return userRepo.findById(s).get();
    }
}
