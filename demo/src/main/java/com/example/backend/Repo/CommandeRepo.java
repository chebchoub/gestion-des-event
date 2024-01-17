package com.example.backend.Repo;

import com.example.backend.Entity.Commande;
import com.example.backend.Entity.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface CommandeRepo extends MongoRepository<Commande,String> {
    List<Commande> findAllByEventPaticiper(Event eventPaticiper);

}
