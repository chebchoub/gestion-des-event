package com.example.backend.Service;

import com.example.backend.Entity.Event;
import com.example.backend.Entity.User;
import com.example.backend.Repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepo repo;
    public void saveOrUpdate(Event events) {
        repo.save(events);
    }

    public Iterable<Event> listAll() {
        return this.repo.findAll();
    }

    public List<Event> getEventsByUserId(User u) {
        List<Event> listEvents = this.repo.findAll();
        List<Event>List = new ArrayList<>();
        for (Event e : listEvents){
            if (e.getOrganizer().getEmail().equals(u.getEmail())){
                List.add(e);
            }
        }
        return List;
    }
    public List<Event> getEventsExcludingDateTime(Date dateTime) {
        // Récupérer les événements à l'exception de celui avec la même date
        return repo.findAllByDateTimeNot(dateTime);
    }
    public Event getEventByDateTime(Date dateTime) {
        return repo.findByDateTime(dateTime);
    }
    public void deleteEvent(String id) {
        this.repo.deleteById(id);
    }

    public Event getEventById(String eventid) {
        return repo.findById(eventid).get();
    }

    public Event getEventByName(String eventName) {
        return  this.repo.findByEventName(eventName);
    }
    public List<Event> getEventsByCategory(String categorie) {
        return repo.getEventsByCategory(categorie);
    }


    public List<Event> getEventsByTicketPriceAsc() {
        return repo.findByOrderByTicketPriceAsc();
    }

    public List<Event> getEventsByTicketPriceDesc() {
        return repo.findByOrderByTicketPriceDesc();
    }

}
