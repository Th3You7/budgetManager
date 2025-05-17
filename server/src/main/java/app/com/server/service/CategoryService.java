package app.com.server.service;

import app.com.server.dto.CategoryDto;
import app.com.server.entity.Category;
import app.com.server.mapper.CategoryMapper;
import app.com.server.repos.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepo categoryRepo;
    private final CategoryMapper categoryMapper;

    @Autowired
    public CategoryService(CategoryRepo categoryRepo, CategoryMapper categoryMapper) {
        this.categoryRepo = categoryRepo;
        this.categoryMapper = categoryMapper;
    }


    public List<CategoryDto> getAllCategories() {
        return categoryRepo.findAll().stream().map(categoryMapper::toDTO).toList();
    }

    public CategoryDto getCategoryById(String id) {
        return categoryMapper.toDTO(categoryRepo.findById(id).orElseThrow());
    }

    public CategoryDto saveCategory(Category category) {
        return categoryMapper.toDTO(categoryRepo.save(category));
    }

    public void deleteCategoryById(String id) {
        categoryRepo.deleteById(id);
    }

    public CategoryDto updateCategory(String id, Category category) {
        Category categoryToUpdate = categoryRepo.findById(id).orElseThrow();
       // categoryToUpdate.setName(category.getName());
        return categoryMapper.toDTO(categoryRepo.save(categoryToUpdate));
    }


}
