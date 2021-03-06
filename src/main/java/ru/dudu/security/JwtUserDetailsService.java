package ru.dudu.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.dudu.dto.UserDTO;
import ru.dudu.model.DAOUser;
import ru.dudu.repository.DAOUserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private DAOUserRepository userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        DAOUser user = userDao.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }

        List<GrantedAuthority> roles = new ArrayList<>();

        if(user.getRoles() != null) {
            for (String role : user.getRoles().split(",")) {
                roles.add(new SimpleGrantedAuthority(role));
            }
        }

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                roles);
    }

    public DAOUser save(UserDTO user) {
        DAOUser newUser = new DAOUser();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        return userDao.save(newUser);
    }
}