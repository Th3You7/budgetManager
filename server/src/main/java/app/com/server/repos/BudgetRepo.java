package app.com.server.repos;

import app.com.server.entity.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BudgetRepo extends JpaRepository<Budget, String> {

}
