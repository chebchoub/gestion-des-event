package com.example.backend.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection="Commande")
public class Commande {
    @Id
    private String _id;
    private String nomPartcipant;
    private String prenomParticpant;
    private String contactParticipant;
    private int nbrTicket;
    private Date date;
    @DBRef
    private Event eventPaticiper;

    public Commande( String nomPartcipant, String prenomParticpant, String contactParticipant, int nbrTicket, Date date, Event eventPaticiper) {
        this.nomPartcipant = nomPartcipant;
        this.prenomParticpant = prenomParticpant;
        this.contactParticipant = contactParticipant;
        this.nbrTicket = nbrTicket;
        this.date = date;
        this.eventPaticiper = eventPaticiper;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getNomPartcipant() {
        return nomPartcipant;
    }

    public void setNomPartcipant(String nomPartcipant) {
        this.nomPartcipant = nomPartcipant;
    }

    public String getPrenomParticpant() {
        return prenomParticpant;
    }

    public void setPrenomParticpant(String prenomParticpant) {
        this.prenomParticpant = prenomParticpant;
    }

    public String getContactParticipant() {
        return contactParticipant;
    }

    public void setContactParticipant(String contactParticipant) {
        this.contactParticipant = contactParticipant;
    }

    public int getNbrTicket() {
        return nbrTicket;
    }

    public void setNbrTicket(int nbrTicket) {
        this.nbrTicket = nbrTicket;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Event getEventPaticiper() {
        return eventPaticiper;
    }

    public void setEventPaticiper(Event eventPaticiper) {
        this.eventPaticiper = eventPaticiper;
    }
}
