package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;

@Repository
public interface UserRepository extends JpaRepository<Login, Integer> {

	/*@Query("select l from from Login l where loginid=:l")
	public Login getUser(Login l);*/

	@Query("select l from User l where role_id=2 and status=0 ")
	public List<User> approveSeller();
	
	@Modifying
	@Query("update User set status = 1 where loginid = ?1 ")
	public int updateSeller(int loginid);
}
