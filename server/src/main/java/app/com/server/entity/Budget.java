package app.com.server.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(nullable = false)
    private Double limit;
    private Double amount;
    @OneToMany(mappedBy = "budget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transaction> transactions;
    @OneToOne(mappedBy = "budget", cascade = CascadeType.ALL)
    private Category category;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
