package com.tts.Week13Day4.controller;

import com.tts.Week13Day4.model.Customer;
import com.tts.Week13Day4.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/all")
    public Iterable<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
}
