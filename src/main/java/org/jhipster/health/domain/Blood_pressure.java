package org.jhipster.health.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Blood_pressure.
 */
@Entity
@Table(name = "blood_pressure")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "blood_pressure")
public class Blood_pressure implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "date_time", nullable = false)
    private LocalDate date_time;

    @Column(name = "systolic")
    private Integer systolic;

    @Column(name = "diastolic")
    private Integer diastolic;

    @ManyToOne
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate_time() {
        return date_time;
    }

    public Blood_pressure date_time(LocalDate date_time) {
        this.date_time = date_time;
        return this;
    }

    public void setDate_time(LocalDate date_time) {
        this.date_time = date_time;
    }

    public Integer getSystolic() {
        return systolic;
    }

    public Blood_pressure systolic(Integer systolic) {
        this.systolic = systolic;
        return this;
    }

    public void setSystolic(Integer systolic) {
        this.systolic = systolic;
    }

    public Integer getDiastolic() {
        return diastolic;
    }

    public Blood_pressure diastolic(Integer diastolic) {
        this.diastolic = diastolic;
        return this;
    }

    public void setDiastolic(Integer diastolic) {
        this.diastolic = diastolic;
    }

    public User getUser() {
        return user;
    }

    public Blood_pressure user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Blood_pressure blood_pressure = (Blood_pressure) o;
        if (blood_pressure.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), blood_pressure.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Blood_pressure{" +
            "id=" + getId() +
            ", date_time='" + getDate_time() + "'" +
            ", systolic='" + getSystolic() + "'" +
            ", diastolic='" + getDiastolic() + "'" +
            "}";
    }
}
