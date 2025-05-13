package app.com.server.dto;


import app.com.server.entity.Budget;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDto {
    private String id;
    private String description;
    private Double amount;
    private LocalDate date;
    private int budgetId;


}
