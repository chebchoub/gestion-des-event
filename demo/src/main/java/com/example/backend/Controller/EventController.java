package com.example.backend.Controller;

import com.example.backend.Auth.AuthService;
import com.example.backend.Entity.Event;
import com.example.backend.Entity.User;
import com.example.backend.Repo.UserRepo;
import com.example.backend.Service.EventService;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/event")
public class EventController {

    @Autowired
    private EventService eventService;
    @Autowired
    private AuthService userService;
  @PostMapping(value = "/save/{email}")
    private String saveEvent(@RequestBody Event events,@PathVariable(name = "email")String email){
            User u = userService.getByMail(email);
        events.setOrganizer(u);
        eventService.saveOrUpdate(events);
        return events.get_id();
    }
    @GetMapping(value = "/getAll")
    private Iterable<Event> getEvents(){
        return eventService.listAll();
    }
    @GetMapping(value = "/getByDateTime/{dateTime}/{eventId}")
    public boolean getEventByDateTime(@PathVariable("eventId") String eventId,@PathVariable("dateTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date dateTime) {
        List<Event> events = eventService.getEventsExcludingDateTime(dateTime);
       boolean resultat =false;
       for(Event event:events)
       {
           if(event.get_id().equals(eventId))
           {
               resultat=true;
           }
       }
       return resultat;

    }

    @PutMapping(value = "/edit/{id}/{email}")
    private Event updateEvent(@RequestBody Event event,@PathVariable(name="id")String _id,@PathVariable(name = "email")String email){
        event.set_id(_id);
        User u = userService.getByMail(email);
        event.setOrganizer(u);
        eventService.saveOrUpdate(event);
        return event;
    }

    @DeleteMapping(value = "/delete/{id}")
    private void deleteEvent(@PathVariable(name="id")String _id){
        eventService.deleteEvent(_id);
    }

    @GetMapping(value = "searchById/{id}")
    private Event getEventById(@PathVariable(name = "id")String eventid){
        return eventService.getEventById(eventid);
    }
    @GetMapping(value = "searchByName/{eventName}")
    private Event getEventbyName(@PathVariable(name = "eventName")String eventName){
        return eventService.getEventByName(eventName);
    }


    @GetMapping( value= "/getAllByUser/{email}")
    public ResponseEntity<List<Event>> getEventsByUserId(@PathVariable(name = "email") String email) {
        List<Event> events =  eventService.getEventsByUserId(userService.getByMail(email));
        return ResponseEntity.ok(events);
    }
    @GetMapping("/{category}")
    public List<Event> getEventsByCategory(@PathVariable String category) {
        List<Event> events = eventService.getEventsByCategory(category);
        return events;
    }
    @GetMapping("/{category}/byTicketPriceAsc")
    public List<Event> getEventsByCategoryTicketPriceAsc(@PathVariable String category) {
        List<Event> events = eventService.getEventsByCategory(category);
        events.sort(Comparator.comparing(Event::getTicketPrice)); // Sort by ticketPrice in ascending order
        return events;
    }

    @GetMapping("/{category}/byTicketPriceDesc")
    public List<Event> getEventsByCategoryTicketPriceDesc(@PathVariable String category) {
        List<Event> events = eventService.getEventsByCategory(category);
        events.sort(Comparator.comparing(Event::getTicketPrice).reversed()); // Sort by ticketPrice in descending order
        return events;
    }

    @GetMapping("/byTicketPriceAsc")
    public List<Event> getEventsByTicketPriceAsc() {
        List<Event> events = eventService.getEventsByTicketPriceAsc();
        return events;
    }

    @GetMapping("/byTicketPriceDesc")
    public List<Event> getEventsByTicketPriceDesc() {
        List<Event> events = eventService.getEventsByTicketPriceDesc();
        return events;
    }

}
