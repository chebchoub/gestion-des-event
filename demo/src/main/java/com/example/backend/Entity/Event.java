package com.example.backend.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "event")
public class Event {

    @Id
    private String _id;
    private String eventName;
    private String category;
    private Date dateTime;
    private String location;
    private String description;
    private Double ticketPrice;
    private Integer capacity;
    @DBRef
    private User organizer;
    private String contactInformation;
    private String imageUrl;

    public Event(String _id, String eventName, String category, Date dateTime, String location, String description, Double ticketPrice, Integer capacity, User organizer, String contactInformation, String imageUrl) {
        this._id = _id;
        this.eventName = eventName;
        this.category = category;
        this.dateTime = dateTime;
        this.location = location;
        this.description = description;
        this.ticketPrice = ticketPrice;
        this.capacity = capacity;
        this.organizer = organizer;
        this.contactInformation = contactInformation;
        this.imageUrl = imageUrl;
    }

    public Event() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(Double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public User getOrganizer() {
        return organizer;
    }

    public void setOrganizer(User organizer) {
        this.organizer = organizer;
    }

    public String getContactInformation() {
        return contactInformation;
    }

    public void setContactInformation(String contactInformation) {
        this.contactInformation = contactInformation;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Event{" +
                "_id='" + _id + '\'' +
                ", eventName='" + eventName + '\'' +
                ", category='" + category + '\'' +
                ", dateTime=" + dateTime +
                ", location='" + location + '\'' +
                ", description='" + description + '\'' +
                ", ticketPrice=" + ticketPrice +
                ", capacity=" + capacity +
                ", organizer=" + organizer +
                ", contactInformation='" + contactInformation + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}