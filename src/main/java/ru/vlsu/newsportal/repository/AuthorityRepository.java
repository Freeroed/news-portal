package ru.vlsu.newsportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.vlsu.newsportal.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
