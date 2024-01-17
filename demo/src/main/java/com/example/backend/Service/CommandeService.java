package com.example.backend.Service;

import com.example.backend.Entity.Commande;
import com.example.backend.Entity.Event;
import com.example.backend.Repo.CommandeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommandeService {

    @Autowired
    private CommandeRepo commandeRepo;

    public List<Commande> getAllCommandes() {
        return commandeRepo.findAll();
    }
    public List<Commande> getAllCommandesByEventName(Event event) {
        return commandeRepo.findAllByEventPaticiper(event);
    }


    public Optional<Commande> getCommandeById(String id) {
        return commandeRepo.findById(id);
    }

    public Commande createCommande(Commande commande) {
        return commandeRepo.save(commande);
    }

    public Commande updateCommande(String id, Commande updatedCommande) {
        if (commandeRepo.existsById(id)) {
            updatedCommande.set_id(id);
            return commandeRepo.save(updatedCommande);
        } else {
            // Gérer le cas où la commande avec l'ID spécifié n'existe pas
            return null;
        }
    }

    public void deleteCommande(String id) {
        commandeRepo.deleteById(id);
    }
}
