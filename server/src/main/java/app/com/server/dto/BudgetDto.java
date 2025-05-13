package app.com.server.dto;

import app.com.server.entity.Category;
import app.com.server.entity.Transaction;
import app.com.server.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BudgetDto {

    private String id;
    private Double limit;
    private Double amount;
    private Category category;
    private List<Transaction> transactions;
    private User user;

}
