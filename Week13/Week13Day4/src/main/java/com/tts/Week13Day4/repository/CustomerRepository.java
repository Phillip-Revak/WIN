package com.tts.Week13Day4.repository;

import com.tts.Week13Day4.model.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
