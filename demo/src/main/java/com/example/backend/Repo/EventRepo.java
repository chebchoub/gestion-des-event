package com.example.backend.Repo;

import com.example.backend.Entity.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface EventRepo extends MongoRepository<Event,String> {

    Event findByDateTime(Date dateTime);
    Event findByEventName(String eventName);

    List<Event> findAllByDateTimeNot(Date dateTime);

    List<Event> getEventsByCategory(String categorie);
    List<Event> findByOrderByTicketPriceAsc();
    List<Event> findByOrderByTicketPriceDesc();

}
