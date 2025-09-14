package br.com.linktreeclone.repository;

import br.com.linktreeclone.entity.Link;
import br.com.linktreeclone.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface LinkRepository extends JpaRepository<Link, UUID>
{
    List<Link> findAllByUser(User user);
}
