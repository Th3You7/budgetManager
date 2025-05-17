package app.com.server.repos;

import app.com.server.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepo extends JpaRepository<Transaction, String> {


    List<Transaction> findByBudget(String budget);
}
