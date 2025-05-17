package app.com.server.service;

import app.com.server.dto.BudgetDto;
import app.com.server.entity.Budget;
import app.com.server.mapper.BudgetMapper;
import app.com.server.repos.BudgetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BudgetService {


    private final BudgetMapper budgetMapper;
    private final BudgetRepo budgetRepo;

    @Autowired
    public BudgetService(BudgetMapper budgetMapper, BudgetRepo budgetRepo) {
        this.budgetMapper = budgetMapper;
        this.budgetRepo = budgetRepo;
    }


    public BudgetDto createBudget(Budget budget) {
        return budgetMapper.toDTO(budgetRepo.save(budget));
    }



    public List<BudgetDto> getBudgets() {
        return budgetRepo.findAll().stream().map(budgetMapper::toDTO).toList();
    }


    public BudgetDto getBudget(String id) {
        return budgetMapper.toDTO(budgetRepo.findById(id).orElse(null));
    }


    public void deleteBudget(String id) {
        budgetRepo.deleteById(id);
    }


    public BudgetDto updateBudget(Budget budget) {
        return budgetMapper.toDTO(budgetRepo.save(budget));
    }


}
