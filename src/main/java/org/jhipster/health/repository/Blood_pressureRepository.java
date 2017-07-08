package org.jhipster.health.repository;

import org.jhipster.health.domain.Blood_pressure;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the Blood_pressure entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Blood_pressureRepository extends JpaRepository<Blood_pressure,Long> {

    @Query("select blood_pressure from Blood_pressure blood_pressure where blood_pressure.user.login = ?#{principal.username}")
    List<Blood_pressure> findByUserIsCurrentUser();
    
}
