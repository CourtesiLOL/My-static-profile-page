package com.courtesilol.mystaticprofilepage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author javier
 */
@Controller
@RequestMapping("/cv")
public class CurriculumController {
    @GetMapping
    public String getView() {
        return "/curriculum/view";
    }
}
