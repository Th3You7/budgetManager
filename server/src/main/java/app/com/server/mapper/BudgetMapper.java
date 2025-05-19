package app.com.server.mapper;


import app.com.server.dto.BudgetDto;
import app.com.server.entity.Budget;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface BudgetMapper {

    Budget toEntity(BudgetDto dto);
    BudgetDto toDTO (Budget entity);



}
