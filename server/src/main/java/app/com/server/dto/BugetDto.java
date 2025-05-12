package app.com.server.dto;

import app.com.server.entity.Category;
import app.com.server.entity.Transaction;
import app.com.server.entity.User;

import java.util.List;

public class BugetDto {

    private String id;
    private Double limit;
    private Double amount;
    private Category category;
    private List<Transaction> transactions;
    private User user;

}
