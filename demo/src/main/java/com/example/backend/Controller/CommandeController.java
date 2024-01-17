package com.example.backend.Controller;

import com.example.backend.Entity.Commande;
import com.example.backend.Entity.Event;
import com.example.backend.Service.CommandeService;
import com.example.backend.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/commande")
public class CommandeController {

    @Autowired
    private CommandeService commandeService;
    @Autowired
    private EventService eventService;

    @GetMapping("getAllCommandes")
    public List<Commande> getAllCommandes() {
        return commandeService.getAllCommandes();
    }
    @GetMapping("getAllCommandesByEvent/{eventName}")
    public List<Commande> getAllCommandesByEvent(@PathVariable(name = "eventName")String eventName) {

        return commandeService.getAllCommandesByEventName(this.eventService.getEventByName(eventName));
    }

    @GetMapping("getCommandeById/{id}")
    public Optional<Commande> getCommandeById(@PathVariable String id) {
        return commandeService.getCommandeById(id);
    }

    @PostMapping("createCommande/{eventName}")
    public Commande createCommande(@RequestBody Commande commande,@PathVariable(name = "eventName")String eventName){
        Event e=this.eventService.getEventByName(eventName);
        commande.setEventPaticiper(e);
        int capaciter=e.getCapacity();
        e.setCapacity(capaciter - commande.getNbrTicket());
        this.eventService.saveOrUpdate(e);
        return commandeService.createCommande(commande);
    }

    @PutMapping("updateCommande/{id}")
    public Commande updateCommande(@PathVariable String id, @RequestBody Commande updatedCommande) {
        return commandeService.updateCommande(id, updatedCommande);
    }

    @DeleteMapping("/{id}")
    public void deleteCommande(@PathVariable String id) {
        commandeService.deleteCommande(id);
    }
}
