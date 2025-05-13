package app.com.server.mapper;

import app.com.server.dto.TransactionDto;
import app.com.server.entity.Budget;
import app.com.server.entity.Category;
import app.com.server.entity.Transaction;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring" , uses = {CategoryMapper.class , BudgetMapper.class})
public interface TransactionMapper {

    @Mapping(source = "budgetId", target = "Budget.id")
    Transaction toEntity(TransactionDto dto);


    @Mapping(source = "Budget.id", target = "budgetId")
    TransactionDto toDTO(Transaction entity);
}
