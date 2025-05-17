package app.com.server.controller;


import app.com.server.dto.BudgetDto;
import app.com.server.entity.Budget;
import app.com.server.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budget")
public class BudgetController {

    BudgetService budgetService;

    @Autowired
    public BudgetController(BudgetService budgetService) {
        this.budgetService = budgetService;
    }

    @GetMapping("/")
    public BudgetDto getBudget(@RequestParam("id") String id) {
        return budgetService.getBudget(id);
    }

    @GetMapping("/all")
    public List<BudgetDto> getAllBudgets() {
        return budgetService.getBudgets();
    }

    @PostMapping("/")
    public BudgetDto createBudget(@RequestBody Budget budget) {
        return budgetService.createBudget(budget);
    }

    @PutMapping("/")
    public BudgetDto updateBudget(@RequestBody Budget budget) {
        return budgetService.updateBudget(budget);
    }

    @DeleteMapping("/")
    public void deleteBudget(@RequestParam("id") String id) {
        budgetService.deleteBudget(id);
    }


}
