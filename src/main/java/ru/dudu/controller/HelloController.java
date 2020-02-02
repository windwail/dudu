package ru.dudu.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@RestController
public class HelloController {

    @RequestMapping(value = "/hello2", method = RequestMethod.GET)
    //@Secured("ADMIN")
    @ResponseBody
    public ResponseEntity<?> hello2(@AuthenticationPrincipal UserDetails user) {
        return ResponseEntity.ok("{ \"message\": \"Hello World 2!!!\"}");
    }

    @RequestMapping({ "/hello" })
    public ResponseEntity<?> hello() {

        return ResponseEntity.ok("{ \"message\": \"Hello World 2!!!\"}");
    }

}
