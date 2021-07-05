package ru.vlsu.newsportal.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import ru.vlsu.newsportal.domain.News;

/**
 * Spring Data SQL repository for the News entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NewsRepository extends JpaRepository<News, Long> {}
