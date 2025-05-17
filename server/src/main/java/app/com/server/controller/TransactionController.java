package app.com.server.controller;

import app.com.server.dto.TransactionDto;
import app.com.server.entity.Transaction;
import app.com.server.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transaction")
public class TransactionController {
    TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }


    @GetMapping("/all")
    public List<TransactionDto> getAllTransactions(){
        return transactionService.getAllTransactions();
    }

    @GetMapping("/")
    public TransactionDto getTransactionById(@RequestParam String id){
        return transactionService.getTransactionById(id);
    }

    @GetMapping("/allByBudget/")
    public List<TransactionDto> getAllTransactionByCategory(@RequestParam String id){
        return transactionService.getTransactionsByBudget(id);
    }

    @PostMapping
    public TransactionDto updateTransaction(@RequestBody Transaction transaction){
        return transactionService.addTransaction(transaction);
    }

    @DeleteMapping
    public void deleteTransaction(@RequestParam String id){
        transactionService.deleteTransactionById(id);
    }
}
