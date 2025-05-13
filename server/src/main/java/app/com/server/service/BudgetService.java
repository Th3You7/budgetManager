package app.com.server.service;

import app.com.server.mapper.BudgetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BudgetService {


    private BudgetMapper budgetMapper;

    @Autowired
    public BudgetService(BudgetMapper budgetMapper) {
        this.budgetMapper = budgetMapper;
    }
}
