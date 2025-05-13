package app.com.server.dto;

import app.com.server.entity.Budget;
import app.com.server.enums.CategoryEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto {
    private String id;
    private CategoryEnum category;
    private Budget budget;
    private UUID userId;

}
