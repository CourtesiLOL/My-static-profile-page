package com.courtesilol.mystaticprofilepage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author javier
 */
@Controller
public class RedirectController {

    @GetMapping("/")
    public String redirect() {
        return "redirect:/portfolio";
    }

}
