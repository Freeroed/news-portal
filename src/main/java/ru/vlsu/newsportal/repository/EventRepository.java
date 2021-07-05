package ru.vlsu.newsportal.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import ru.vlsu.newsportal.domain.Event;

/**
 * Spring Data SQL repository for the Event entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EventRepository extends JpaRepository<Event, Long> {}
