package com.example.backend.Auth;

import com.example.backend.Entity.Event;
import com.example.backend.Entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    private final AuthService authenticationService;
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request)
    {     Optional<User> existingUser = authenticationService.getByMail(request);

        if(existingUser.isEmpty()) {
            // L'utilisateur n'existe pas, vous pouvez l'ajouter à la base de données
            return ResponseEntity.ok(authenticationService.register(request));
        } else {
            // L'utilisateur existe déjà, renvoyez un code de statut 409 Conflict
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> register(@RequestBody AuthRequest request)
    {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @GetMapping(value = "user/{email}")
    private User getUserByEmail(@PathVariable(name = "email")String email){
        return authenticationService.getByMail(email);
    }
}