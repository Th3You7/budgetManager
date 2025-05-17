package app.com.server.controller;

import app.com.server.dto.CategoryDto;
import app.com.server.entity.Category;
import app.com.server.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/")
    public CategoryDto getCategories(@RequestParam String id) {
        return categoryService.getCategoryById(id);
    }

    @GetMapping("/all")
    public List<CategoryDto> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @PostMapping("/")
    public CategoryDto createCategory(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

    @PutMapping("/")
    public CategoryDto updateCategory(@RequestParam String id, @RequestBody Category category) {
        return categoryService.updateCategory(id, category);
    }

    @DeleteMapping("/")
    public void deleteCategory(@RequestParam String id) {
        categoryService.deleteCategoryById(id);
    }
}
