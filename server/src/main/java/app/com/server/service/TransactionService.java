package app.com.server.service;

import app.com.server.dto.TransactionDto;
import app.com.server.entity.Transaction;
import app.com.server.mapper.TransactionMapper;
import app.com.server.repos.TransactionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService  {
    private final TransactionRepo transactionRepo;
    private final TransactionMapper transactionMapper;

    @Autowired
    public TransactionService(TransactionRepo transactionRepo, TransactionMapper transactionMapper) {
        this.transactionRepo = transactionRepo;
        this.transactionMapper = transactionMapper;

    }


    public TransactionDto addTransaction(Transaction transaction) {
        return transactionMapper.toDTO(transactionRepo.save(transaction));
    }

    public TransactionDto getTransactionById(String id) {
        return transactionMapper.toDTO(transactionRepo.findById(id).orElseThrow());
    }

    public void deleteTransactionById(String id) {
        transactionRepo.deleteById(id);

    }

    public List<TransactionDto> getAllTransactions() {
        return transactionRepo.findAll().stream().map(transactionMapper::toDTO).toList();
    }


    public List<TransactionDto> getTransactionsByBudget(String budgetId) {
        return transactionRepo.findByBudget(budgetId).stream().map(transactionMapper::toDTO).toList();
    }


}
