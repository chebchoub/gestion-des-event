package com.example.backend.Auth;

import com.example.backend.Config.JwtService;
import com.example.backend.Entity.Role;
import com.example.backend.Entity.User;
import com.example.backend.Repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthResponse register(RegisterRequest request) {
        User user = new User(request.getNom(),request.getPrenom(), request.getEmail(), passwordEncoder.encode(request.getPassword()),Role.USER);
        userRepository.save(user);
        var jwtToken=jwtService.generateToken(user);
        return AuthResponse.builder().token(jwtToken).build();
    }

    public Optional<User> getByMail(RegisterRequest request)
    {
        return userRepository.findByEmail(request.getEmail());
    }
    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword())
        );
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken=jwtService.generateToken(user);
        return AuthResponse.builder().token(jwtToken).build();
    }

    public User getById(String s){
        return userRepository.findById(s).get();
    }

    public User getByMail(String email)
    {
        return userRepository.findByEmail(email).get();
    }

}