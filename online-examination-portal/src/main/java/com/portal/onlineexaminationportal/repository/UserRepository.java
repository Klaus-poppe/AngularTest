package com.portal.onlineexaminationportal.repository;

import com.portal.onlineexaminationportal.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUname(@Param("uname") String uname);

}
