package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository urepo;
	
	/*public Login getUser(Login l)
	{
		
		return urepo.getUser(l);
	}*/

	public int updateSeller(int loginid)
	{
		return urepo.updateSeller(loginid);
	}

	public List<User> approveSeller() {
		
		return urepo.approveSeller();
	}
	
	
}
