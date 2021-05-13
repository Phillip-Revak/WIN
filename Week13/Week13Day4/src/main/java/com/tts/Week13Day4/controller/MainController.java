package com.tts.Week13Day4.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// this annotation allows us to create routes
// basically allowing restful endpoints
@RestController
public class MainController {

    // this is an endpoint
    @RequestMapping("/")
    public String home() {
        return "Hello World";
    }

    // going to an endpoint will resolve the method
    // meaning that any algorithms will also resolve
    @GetMapping("/math")
    public Integer doMath(){
        return 5 + 4;
    }

    @RequestMapping("/print")
    public void doPrint(){
        System.out.println("hello from the terminal");
    }

    @GetMapping("/parammath/{x}/{y}")
    public Integer doMathWithParams(@PathVariable int x, @PathVariable int y){
        return x + y;
    }
}