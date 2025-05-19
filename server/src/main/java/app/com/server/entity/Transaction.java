package app.com.server.entity;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String description;
    private Double amount;
    private LocalDate date;
    @ManyToOne
    @JoinColumn(name = "budget_id")
    private Budget budget;

}
