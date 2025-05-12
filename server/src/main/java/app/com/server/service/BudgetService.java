package app.com.server.service;

import app.com.server.mapper.BugetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BudgetService {

    @Autowired

    private BugetMapper bugetMapper;
}
