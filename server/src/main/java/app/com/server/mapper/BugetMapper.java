package app.com.server.mapper;


import app.com.server.dto.BugetDto;
import app.com.server.entity.Budget;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BugetMapper {


    Budget toEntity(BugetDto dto);

    BugetDto toDTO (Budget entity);
}
