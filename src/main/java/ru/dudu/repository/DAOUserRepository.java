package ru.dudu.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.dudu.model.DAOUser;

@Repository
public interface DAOUserRepository extends CrudRepository<DAOUser, Integer> {
    DAOUser findByUsername(String username);
}