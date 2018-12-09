package com.portal.onlineexaminationportal.model;

import javax.persistence.*;

@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "uname")
    private String uname;

    @Column(name = "email")
    private String email;

    @Column(name = "pass")
    private String pass;

    @Column(name = "passC")
    private String passC;

    public User() {
    }

    public User( String uname, String email, String pass, String passC)
    {
        this.uname = uname;
        this.email = email;
        this.pass = pass;
        this.passC = passC;
    }

    public long getId()
    {
        return id;
    }
    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass()
    {
        return pass;
    }

    public void setPass()
    {
        this.pass = pass;
    }

    public String getPassC(){return passC;}

    public void setPassC(){this.passC = passC;}
}
