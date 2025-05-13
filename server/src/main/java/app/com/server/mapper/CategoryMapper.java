package app.com.server.mapper;

import app.com.server.dto.CategoryDto;
import app.com.server.entity.Category;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface CategoryMapper {
    Category toEntity(CategoryDto dto);
    CategoryDto toDTO(Category entity);
}
